# ws-search-front

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine locale :

- [Node.js](https://nodejs.org/): version la plus récente ou >= 16

## Démarrer

1. Clonez ce dépôt sur votre machine locale

   ```bash
   # avec ssh
   git clone git@github.com:adamako/ws-search-front.git
   
   # avec https
   git clone https://github.com/adamako/ws-search-front.git

2. Accédez au répertoire du projet
   ```bash
   cd ws-search-front
   
3. Installez les dépendances du projet en utilisant npm ou yarn
   ```bash
   npm install
   # or
   yarn
4. Configurez la variable d'environnement, elle contient l'URL du serveur backend
   ```bash
   cp .env.example .env
5. Démarrez le serveur de développement
   ```bash
   npm run dev
   # or
   yarn dev

L'application devrait maintenant être accessible à l'adresse http://localhost:5173
