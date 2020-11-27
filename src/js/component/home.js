import React, { useState } from "react";
import "../../styles/home.css";
// importing components:
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";

export function Home() {
	//inputText es el valor y setInputText es la funcion que te permite cambiar ese valor...
	//...es decir, lo actualiza según lo que escriba el usuario en el input
	//Declaro aquí todos los estados porque asi se los puedo pasar a todos los componentes mas facilmente...
	//...los puedo usar en cualquier sitio de mi aplicación, pasandoselo de la forma: <Form setInputText={setInputTex} /> ,POR EJEMPLO
	const [inputText, setInputText] = useState("");
	//creo otro estado para almacenar los todos que vaya introduciendo el ususario
	const [todos, setTodos] = useState([]);

	return (
		<div className="app">
			<header>
				<h1>Any Plan For Today?</h1>
			</header>
			<Form
				inputText={inputText}
				todos={todos}
				setTodos={setTodos}
				setInputText={setInputText}
			/>
			<TodoList todos={todos} setTodos={setTodos} />
			<div className="counter">{todos.length} tasks left</div>
		</div>
	);
}
