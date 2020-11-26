import React from "react";

//ASI LE PASO LAS FUNCIONES A ESTA CONST DESDE HOME.JS SIN TENER QUE PONER PROPS...
const Form = ({ setInputText, inputText, todos, setTodos }) => {
	//esto hace que obtengamos info del evento, en este caso, el value del input
	const inputTextHandler = e => {
		console.log(e.target.value);
		setInputText(e.target.value);
	};
	const submitTodoHandler = e => {
		e.preventDefault();
		//creamos un objeto que es lo que se añadirá a la lista
		setTodos([...todos, { text: inputText, id: Math.random() * 10000 }]);
		//para que despues de submit el input se ponga a 0: set the state back to 0
		setInputText("");
	};

	return (
		<form>
			<input
				value={inputText}
				onChange={inputTextHandler}
				type="text"
				className="todo-input"
				placeholder="new plan here..."
			/>
			<button
				className="todo-button"
				type="submit"
				onClick={submitTodoHandler}>
				<i className="fas fa-plus-square" />
			</button>
		</form>
	);
};

export default Form;
