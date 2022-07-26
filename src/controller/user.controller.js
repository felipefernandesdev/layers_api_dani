import { CreateUserService } from "../services/create.user.service.js";

export class UserController {
  handle(request, response) {
    const { body } = request;

    //Chama a camada de serviço
    try {
      const createUserService = new CreateUserService();
      const result = createUserService.execute(body);
      return response.status(result.status).json(result);

    } catch (error) {

      console.error(error);
      response.status(500).json({
        error,
        msg: "Não foi possível cadastrar!"
      })
    }
  }
}
