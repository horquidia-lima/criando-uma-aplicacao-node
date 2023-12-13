//import express
const express = require("express") 

const routes = require("./routes")

//initialize express
const app = express() 
app.use(express.json())

app.use(routes)

/*app.get("/message/:id", (request, response) => {
  const {id} = request.params

  response.send(`Id da mensagem: ${id}`)
})*/



const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))