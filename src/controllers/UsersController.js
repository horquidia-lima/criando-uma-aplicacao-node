const AppError = require("../utils/AppError")

class UsersController {
  /** 
  * index - GET para listar varios registros
  * show - GET para exibir um registro especifico
  * create - POST para criar um registro
  * update - PUT para atualizar um registro
  * delete - DELETE para remover um registro
  */

  create(request, response) {
    const {name, email, password} = request.body

    if(!name) {
      throw new AppError("O nome e obrigatorio")
    }

    //response.send(`Usuario ${name} - Email: ${email} e a senha ${password}`)
    response.json({name, email, password})
  }
}

module.exports = UsersController