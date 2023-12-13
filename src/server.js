//import express
const express = require("express") 

//initialize express
const app = express() 
app.use(express.json())

/*app.get("/message/:id", (request, response) => {
  const {id} = request.params

  response.send(`Id da mensagem: ${id}`)
})*/

app.post("/users", (request, response) => {
  const {name, email, password} = request.body

  response.send(`Usuario ${name} - Email: ${email} e a senha ${password}`)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))