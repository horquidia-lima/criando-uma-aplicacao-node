const { Router } = require("express")

const NotesController = require("../controllers/NotesController")

const notesRoutes = Router()

/*function myMiddleware(request, response, next){
  console.log("Voce passou pelo Middleware")
  if(!request.body.isAdmin){
    return response.json({message: "user unauthorized"})
  }
  next()
}*/


const notesController = new NotesController() //instaciando a class (guardando na memoria)

notesRoutes.post("/:user_id", notesController.create)

module.exports = notesRoutes