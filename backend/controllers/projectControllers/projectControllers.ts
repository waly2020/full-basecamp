import { Request, Response } from "express";
import { db } from "../../db.server";
import { validationResult } from "express-validator";
import { CustomSession } from "../../utils/types";
// import { Role } from "@prisma/client";

// Create a new project
export const addProject = async (
  req: Request & { session: CustomSession },
  res: Response
) => {
  const { name, description } = req.body;
  const userId = req.session.user?.id;

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const project = await db.projects.create({
      data: {
        name,
        description,
        owner: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return res.status(201).json(project);
  } catch (error) {
    console.log(error);
  }
};
// Get all projects
export const getAllProjects = async (
  req: Request & { session: CustomSession },
  res: Response
) => {
  
  try {
    // On récupère tous les projets
    const projects = await db.projects.findMany();

    // if there are no projects
    if (!projects)
      return res.status(404).json({ message: "No projects found" });

    // On filtre les projets de façon à ce qu'ils ne soient vus que par l'ADMIN ou le propriétaire

    const filteredProjects = projects.filter(
      (project) =>
        project.userId === req.session.user?.id ||
        req.session.user?.role === "ADMIN"
    );

    return res.status(200).json(filteredProjects);
  } catch (error) {
    console.log(error);
  }
};
// Get a project by its ID
export const getProject = async (
  req: Request & { session: CustomSession },
  res: Response
) => {
  const projectId = parseInt(req.params.id, 10);
  try {
    const project = await db.projects.findUnique({
      where: {
        id: projectId,
      },
    });

    // Si le projet appartient à l'utilisateur, on le retourne, sinon on retourne un message
    project?.userId == req.session.user?.id
      ? res.status(200).json(project)
      : res.status(404).json({ message: "No project found" });
  } catch (e) {
    console.log(e);
  }
};

// Delete a project

export const deleteProject = async (
  req: Request & { session: CustomSession },
  res: Response
) => {
  const projectId = parseInt(req.params.id, 10);
  try {
    const project = await db.projects.findUnique({
      where: {
        id: projectId,
      },
    });

    // Si le projet n'existe pas
    if (!project) return res.status(404).json({ message: "No project found" });

    // Le projet existe et on vérifie s'il appartient à l'utilisateur connecté
    if (project.userId === req.session.user?.id) {
      // Le projet appartient à l'utilisateur, il peut donc le supprimer
      await db.projects.delete({
        where: {
          id: projectId,
        },
      });
      return res.status(200).json({ message: "Project successfully deleted" });
    }

    // Le projet n'appartient pas à l'utilisateur connecté. Il n'a donc aucune autorisation
    return res.status(403).json({ message: "You can't delete this project" });
  } catch (e) {
    console.log(e);
  }
};

// Update a project

export const updateProject = async (
  req: Request & { session: CustomSession },
  res: Response
) => {
  const projectId = parseInt(req.params.id, 10);
  const { name, description } = req.body;
  try {
    const project = await db.projects.findUnique({
      where: {
        id: projectId,
      },
    });

    // Le projet n'existe pas
    if (!project) return res.status(404).json({ message: "Project not found" });

    // Le projet existe...
    if (project.userId == req.session.user?.id) {
      // il appartient à l'utilisateur connecté. Il peut donc le mettre à jour
      const updatedProject = await db.projects.update({
        where: {
          id: projectId,
        },
        data: {
          name,
          description,
        },
      });
      // On lui renvoie le projet mis à jour
      return res.status(200).json(updatedProject);
    }

    // Sinon il n'est pas autorisé à update le projet
    return res.status(403).json({ message: "Can't access this project" });
  } catch (e) {
    console.log(e);
  }
};
