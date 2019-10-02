# Mongo and Node
CR(Create and Read) User using NodeJS(Express) and MongoDB(Mongoose)

# Requisites
* [Git](https://www.digitalocean.com/community/tutorials/how-to-install-git-on-ubuntu-18-04-quickstart)
* [Yarn](https://yarnpkg.com/lang/en/docs/install/#debian-stable)
* [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

# Installation
- Using Git we will clone this repository: `git clone https://github.com/brunnomatheuus/mongo-node`
- Using Yarn on the terminal we type `yarn install` to install the dependencies.

# Run
- In terminal execute `yarn dev`

# Routes
- `GET /users/` returns all registered users
- `GET /users/:id/` returns owner user of this id
- `POST /users/` register a user passing their attributes by parameter
