import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

// Tarefas
// import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

class Main extends Component {
	state = {
		novaTarefa: '',
		tarefas: ['Fazer café', 'Beber água', 'Estudar'],
	};

	handleChange = e => {
		this.setState({
			novaTarefa: e.target.value,
		});
	};

	render() {
		const { novaTarefa, tarefas } = this.state;

		return (
			<div className='main'>
				<h1>Lista de Tarefas</h1>

				<form className='form' action='#'>
					<input onChange={this.handleChange} type='text' value={novaTarefa} />
					<button type='submit'>
						<FaPlus />
					</button>
				</form>

				<ul className='tarefas'>
					{tarefas.map(tarefa => (
						<li key={tarefa}>
							{tarefa}
							<span>
								<FaEdit className='edit' />
								<FaWindowClose className='delete' />
							</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Main;
