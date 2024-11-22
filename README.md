# Farabet-Dubois

# Guide de Lancement du Projet

## Prérequis
Assurez-vous d'avoir installé les éléments suivants :
- **Node.js** (version LTS recommandée)
- **PostgreSQL** (version 12 ou ultérieure)

---

## Étapes pour lancer le projet

### 1. Configuration et lancement de l'API
1. Accédez au dossier `api` :
   ```bash
   cd api
   ```

 2. Créez un fichier .env à la racine du dossier api avec le contenu suivant :

    ```
    DB__PORT=5432
    DB__DATABASE="event_hub_db"
    DB__PASSWORD="postgres"
    DB__USER="postgres"
    DB__HOST="localhost"
    DB__CLIENT="pg"

    PASSWORD_PEPPER="kzefjihubgjknfzhovuigfyvjhbekznhu234567"
    JWT_SECRET="kjnflkzjiohubgrjkznleebghkrjfn34567enjbhgf"
    ```
 3. Installez les dépendances :

    ```bash
    npm install
    ```

 4. Lancez le serveur en mode développement :
    
    ```bash
    npm run dev
    ```

### 2. Configuration et lancement du Frontend

 1. Accédez au dossier front :

    ```bash
    cd front
    ```
 2. Installez les dépendances :

    ```bash
    npm install
    ```

3. Lancez le serveur en mode développement :
    
    ```bash
    npm run dev
    ```
