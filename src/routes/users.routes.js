const { Router } = require("express")

const UsersController = require("../controllers/UsersController")

const usersRoutes = Router()

/*function myMiddleware(request, response, next){
  console.log("Voce passou pelo Middleware")
  if(!request.body.isAdmin){
    return response.json({message: "user unauthorized"})
  }
  next()
}*/


const usersController = new UsersController() //instaciando a class (guardando na memoria)

usersRoutes.post("/", usersController.create)
usersRoutes.put("/:id", usersController.update)

module.exports = usersRoutes