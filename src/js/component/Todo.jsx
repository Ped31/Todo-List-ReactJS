import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
	//event to delete the task
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
