require("express-async-errors")

const AppError = require("./utils/AppError")

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

app.use((error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })
})


const PORT = 3333
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))