import React from "react";
import Todo from "./Todo.jsx";
//
function TodoList({ todos, setTodos }) {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map(todo => (
					<Todo
						todos={todos}
						setTodos={setTodos}
						todo={todo}
						text={todo.text}
						id={todo.id}
					/>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
