import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
	//event to delete the task
	//La función filter permite filtrar los elementos de un array y generar uno nuevo...
	//... con todos los elementos que cumplen una determinada condición.
	//cojo todos los todos que tenga en la lista y los voy a filtrar
	//si la Id del elemento es igual a la id del todo la va eliminar y no lo incluira en el nuevo array
	const deleteHandler = () => {
		setTodos(todos.filter(el => el.id !== todo.id));
	};

	return (
		<div className="todo">
			<li className="todo-item">{text}</li>
			<button onClick={deleteHandler} className="trash-btn">
				<i className="fas fa-trash" />
			</button>
		</div>
	);
};

export default Todo;
