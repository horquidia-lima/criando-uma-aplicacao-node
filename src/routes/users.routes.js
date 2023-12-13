const { Router } = require("express")

const usersRoutes = Router()

usersRoutes.post("/", (request, response) => {
  const {name, email, password} = request.body

  //response.send(`Usuario ${name} - Email: ${email} e a senha ${password}`)
  response.json({name, email, password})
})

module.exports = usersRoutes