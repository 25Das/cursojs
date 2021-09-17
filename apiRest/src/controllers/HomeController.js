import Aluno from '../models/Aluno';

class HomeController {
	async index(req, res) {
		const novoAluno = await Aluno.create({
			nome: 'Fernanda',
			sobrenome: 'Santos',
			email: 'fernanda23021999@gmail.com',
			idade: 22,
			peso: 50,
			altura: 1.53,
		});
		res.json(novoAluno);
	}
}

export default new HomeController();
