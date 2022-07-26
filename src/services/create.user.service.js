import userRepository from "../repositories/user.repository.js";

export class CreateUserService {
  execute(data) {
    /**
     * username
     * name
     * id
     */
    if (!data.username) return {status: 404, msg: "Username não pode estar vazio"};

    // const userRepository = UserRepository;

    //verificar se o username já existe no banco de dados!
    const existUser = userRepository.findByUsername(data.username);
    if (existUser) return {status: 400, msg: "Usuário já existe!"};

    //Salvar o usuário chamando o repositório
    const user = userRepository.save(data);
    return {status: 200, msg: "Success", user};
  }
}
