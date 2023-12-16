const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

function myMiddleware(request, response, next){
  console.log("Voce passou pelo Middleware")
  if(!request.body.isAdmin){
    return response.json({message: "user unauthorized"})
  }
  next()
}


const usersController = new UsersController //instaciando a class (guardando na memoria)

usersRoutes.post("/", myMiddleware, usersController.create)

module.exports = usersRoutes