### To Contribute
 - Clone this project `git clone {gitProjectUrl}`
 - Install dependecies `node install`
 - Create a branch per feature/fix `git checkout -b branch_feature_name`
 - Create a commit `git commit -m "commit name"`
 - Push you changes to you new branch `git push origin branch_feature_name"`
 - The merge will be made on github page.

### VS Code Dependecies
 - EditorConfig for VS Code
 - vscode-styled-components
 - Prettier - Code Formater
 - Eslint

### Using Docker
 - Install Docker 'https://www.docker.com/'
 - Run command to start the projetct with Docker Compose `docker-compose up -d`
 - See the container log `docker logs containerId -f`
 - Into in docker container `docker exec -it containerId /bin/bash`
 - Clear your docker containers `docker system prune --all`

### Tips
 - Give linux folder permission `sudo chown -R userName .`
 - Enable VS Code lint on save ctrl + shift + p -> Opensettings(JSON) -> add this settings:
    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true
