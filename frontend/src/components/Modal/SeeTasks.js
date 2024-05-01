import Task from "../Task";

const SeeTasks = () => {
    return (
        <div className="overflow-y-scroll max-h-[500px] hidden-scroll"> 
            <Task text="Initialise le projet."/>
               <Task text="Ajouter le projet sur github."/>
               <Task text="Heberger le projet sur vercel."/>
               <Task text="Partager le projet a d'autres personnes."/>
               <Task text="Ajoute les taches du projet sur trello."/>
        </div>
    );
}

export default SeeTasks;