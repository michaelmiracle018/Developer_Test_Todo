import { createContext, useContext, useEffect, useState } from "react";
import { TodoContextType, IData, IProps, IAlert } from "../shared/types";
import { getLocalStorage } from "../shared/dataStorage";

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider = ({ children }: IProps) => {
	const [dataTodos, setDataTodos] = useState(getLocalStorage());
	const [showModal, setShowModal] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [editTitle, setEditTitle] = useState<IData | null | undefined>(null);
	const [isAlert, setIsAlert] = useState<IAlert>({
		msg: "",
		show: false,
		value: "",
	});

	const saveTodo = (todo: IData) => {
		showAlert(true, "success", "Item added successfully");
		setDataTodos([...dataTodos, todo]);
	};
	const handleEditTodo = (todo: IData) => {
		showAlert(true, "success", "Item edited successfully");

		setDataTodos(
			dataTodos.map((itm: IData) => {
				if (itm.id === todo.id) {
					return { ...itm, title: todo.title, status: todo.status };
				}
				return itm;
			}),
		);
	};
	const handleDeleteSingleTodo = (todo: IData) => {
		showAlert(true, "success", "Item deleted successfully");

		setDataTodos(dataTodos.filter((itm: IData) => itm.id !== todo.id));
	};
	const handleAllTodos = () => {
		setDataTodos([]);
	};

	const handleCheckTodo = (checked: boolean, todo: IData) => {
		showAlert(true, "success", "Item status changed");

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

	const showAlert = (show = false, value = "", msg = "") => {
		setIsAlert({ show, value, msg });
	};
	const handleCopyTodo = (todo: IData) => {
		showAlert(true, "success", `${todo.title} copied to clipboard`);
		navigator.clipboard.writeText(todo.title);
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
		handleDeleteSingleTodo,
		handleAllTodos,
		handleCheckTodo,
		setIsAlert,
		isAlert,
		showAlert,
		handleCopyTodo,
	};

	return (
		<TodoContext.Provider value={contextData}>{children}</TodoContext.Provider>
	);
};

export const useTodo = () => {
	return useContext(TodoContext);
};

export default TodoContext;
