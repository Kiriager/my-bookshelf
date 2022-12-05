# Project name

Project description

---

#### For Windows users:

-   WSL is mandatory for running this project.

-   Project is to be cloned to WSL disk.
    If you're seeing `/mnt/` path prefix in your terminal it means the project **isn't** on the WSL disk.
    **This is required for hot reloading with docker**.

---

#### 0.1. What's shipped with this boilerplate?

-   React (CRA) + NestJS applications
-   Configured sequelize for PostgreSQL
-   Storybook
-   Tailwind
-   React Redux (+Saga)
-   React Router
-   docker-compose

#### 0.2. Reference

-   [Backend folder structure](./docs/backend.md)
-   [Frontend folder structure](./docs/frontend.md)
-   shared is a directory where common code is located in order to avoid duplication.
    It's symlinked into backend and frontend during project initiazation.

#### 0.3. Eslint

-   To follow project code style you should use Eslint that is already configured
-   To enable linting, you need to use an extension for your code editor
-   [Extension for VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
    If you want to integrate Eslint with other code editors you can find information on how to do it
    [here](https://eslint.org/docs/user-guide/integrations#editors)

---

#### 1. Project init

-   Run `npm run symlink-shared` after git clone.

---

#### 2. Bootstrap project using Docker Compose

-   To build (rebuild) `npm run start:build`
-   To start without building `npm run start`
-   To stop `npm run stop`


---

#### 3. Version control

-   To make any change in the project you should create separate branch from develop
-   Branch name should start with `fix/` or `feature/`
-   Commit names should
    -   Be short (10-12 words)
    -   Describe the changes that were done specifically
    -   Follow [best practices](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53#commit-message-guidelines)
-   Once you finish with changes you should create a pull request
-   Then you should request approval from your colleague and one of your mentors
-   If your pull request approved by these people you can squash & merge into develop branch
-   It's a good thing to keep your branch in sync with develop, so once in a while you should merge develop into your branch
-   Prefer small but frequent pull requests over infrequent and huge ones
