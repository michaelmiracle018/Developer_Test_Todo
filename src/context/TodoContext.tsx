import React, { createContext, useContext, useState } from "react";
import { TodoContextType, IData, IProps } from "../shared/types";
const data = [
	{
		title: "test 101",
		id: 101,
		date: "10/21/2023, 9:29:10 PM",
		status: "completed",
	},
	{
		title: "test 102",
		id: 102,
		date: "10/24/2023, 2:04:07 PM",
		status: "incomplete",
	},
	{
		title: "test 103",
		id: 103,
		date: "09/24/2023, 9:04:07 PM",
		status: "incomplete",
	},
];
// const TodoContext = createContext();
export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: IProps) => {
	const [dataTodos, setDataTodos] = useState(data);
	const [showModal, setShowModal] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	// const [modalType, setModalType] = useState("");
	const [editTitle, setEditTitle] = useState<IData | null | undefined>(null);

	// const openModal = () => {
	// 	setShowModal(true);
	// };

	// const closeModal = () => {
	// 	setShowModal(false);
	// };

	const saveTodo = (todo: IData) => {
		setDataTodos([...dataTodos, todo]);
	};
	const handleEditTodo = (todo: IData) => {
		console.log(todo);
		setDataTodos(
			dataTodos.map((itm) => {
				if (itm.id === todo.id) {
					return { ...itm, title: todo.title };
				}
				return itm;
			}),
		);
	};
	const handleDeleteTodo = (todo: IData) => {
		console.log(todo);
	};

	const contextData = {
		saveTodo,
		dataTodos,
		showModal,
		setShowModal,
		handleEditTodo,
		editTitle,
		isEdit,
		setDataTodos,
		handleDeleteTodo,
	};

	return (
		<TodoContext.Provider value={contextData}>{children}</TodoContext.Provider>
	);
};

export const useTodo = () => {
	return useContext(TodoContext);
};

export default TodoContext;
