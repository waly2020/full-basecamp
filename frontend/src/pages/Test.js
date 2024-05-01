import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';

// Composant de la page protégée
const PageProtegee = () => {
  return (
    <div>
      <h2>Bienvenue sur la page protégée!</h2>
      <p>Vous êtes connecté.</p>
    </div>
  );
};

// Composant de la page de connexion
const PageConnexion = ({ setIsConnected }) => {
  const handleLogin = () => {
    // Dans un scénario réel, vous feriez probablement une vérification côté serveur pour valider les informations de connexion
    setIsConnected(true);
  };

  return (
    <div>
      <h2>Page de connexion</h2>
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
};

// Composant qui gère la navigation
const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/page-protegee">Page protégée</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Redirect to="/page-connexion" />
          </Route>
          <Route path="/page-protegee">
            {isConnected ? <PageProtegee /> : <Redirect to="/page-connexion" />}
          </Route>
          <Route path="/page-connexion">
            <PageConnexion setIsConnected={setIsConnected} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
