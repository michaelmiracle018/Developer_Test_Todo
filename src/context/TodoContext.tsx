import React, { createContext, useContext, useEffect, useState } from "react";
import { TodoContextType, IData, IProps } from "../shared/types";
import { getLocalStorage } from "../shared/dataStorage";
const data = [
	{
		title: "test great",
		id: 101,
		date: "10/21/2023, 9:29:10 PM",
		status: "completed",
	},
	{
		title: "test nice",
		id: 102,
		date: "10/24/2023, 2:04:07 PM",
		status: "completed",
	},
	{
		title: "test good",
		id: 103,
		date: "09/24/2023, 9:04:07 PM",
		status: "uncompleted",
	},
];

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: IProps) => {
	const [dataTodos, setDataTodos] = useState(getLocalStorage());
	const [showModal, setShowModal] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [editTitle, setEditTitle] = useState<IData | null | undefined>(null);

	const saveTodo = (todo: IData) => {
		setDataTodos([...dataTodos, todo]);
	};
	const handleEditTodo = (todo: IData) => {
		console.log(todo);
		setDataTodos(
			dataTodos.map((itm: IData) => {
				if (itm.id === todo.id) {
					return { ...itm, title: todo.title };
				}
				return itm;
			}),
		);
	};
	const handleDeleteSingleTodo = (todo: IData) => {
		setDataTodos(dataTodos.filter((itm: IData) => itm.id !== todo.id));
	};
	const handleAllTodos = () => {
		setDataTodos([]);
	};

	const handleCheckTodo = (checked: boolean, todo: IData) => {
		setDataTodos(
			dataTodos.map((itm: IData) => {
				if (itm.id === todo.id) {
					return { ...itm, status: checked ? "completed" : "uncompleted" };
				}
				return itm;
			}),
		);
	};
	useEffect(() => {
		localStorage.setItem("todoList", JSON.stringify(dataTodos));
	}, [dataTodos]);

	const contextData = {
		saveTodo,
		dataTodos,
		showModal,
		setShowModal,
		handleEditTodo,
		editTitle,
		isEdit,
		setDataTodos,
		handleDeleteSingleTodo,
		handleAllTodos,
		handleCheckTodo,
	};

	return (
		<TodoContext.Provider value={contextData}>{children}</TodoContext.Provider>
	);
};

export const useTodo = () => {
	return useContext(TodoContext);
};

export default TodoContext;
