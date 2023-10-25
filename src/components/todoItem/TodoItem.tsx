import React, { useState } from "react";
import "./todoItem.css";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { IData } from "../../shared/types";
import Modal from "../modal/Modal";
import { useTodo } from "../../context/TodoContext";

type Props = {
	todo: IData;
};

const TodoItem = ({ todo }: Props) => {
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const response = useTodo();

	const handleEditTodo = () => {
		setUpdateModalOpen(true);
	};
	const deleteTodo = (todo: IData) => {
		response?.handleDeleteTodo(todo);
	};
	return (
		<div>
			<div className="todo__item">
				<div className="todo__details">
					<div className="check__box-input">
						<input type="checkbox" className="check__box" />
					</div>

					<div className="text">
						<p className="">{todo.title}</p>
						<p className="time">
							{format(new Date(todo.date), "p, MM/dd/yyyy")}
						</p>
					</div>
				</div>
				<div className="todo__actions">
					<div
						className="icon"
						tabIndex={0}
						role="button"
						onClick={() => deleteTodo(todo)}
					>
						<MdDelete />
					</div>
					<div
						className="icon"
						tabIndex={0}
						role="button"
						onClick={() => {
							handleEditTodo();
						}}
						onKeyDown={() => handleEditTodo()}
					>
						<MdEdit />
					</div>
				</div>
			</div>
			<Modal
				type="update"
				showModal={updateModalOpen}
				setShowModal={setUpdateModalOpen}
				todo={todo}
			/>
		</div>
	);
};

export default TodoItem;
