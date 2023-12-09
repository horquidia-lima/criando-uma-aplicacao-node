//import express
const express = require("express") 

//initialize express
const app = express() 

app.get("/message/:id", (request, response) => {
  const {id} = request.params

  response.send(`Id da mensagem: ${id}`)
})

app.get("/users", (request, response) => {
  const {page, limit} = request.query

  response.send(`Pagina: ${page}. Mostrar: ${limit}`)
})

const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))