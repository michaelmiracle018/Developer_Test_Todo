import { useEffect, useState } from "react";
import "./todoItem.css";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";
import { IData } from "../../shared/types";
import Modal from "../modal/Modal";
import { useTodo } from "../../context/TodoContext";
import DeleteModal from "../deleteModal/DeleteModal";

type Props = {
	todo: IData;
};

const TodoItem = ({ todo }: Props) => {
	const [updateModalOpen, setUpdateModalOpen] = useState(false);
	const [checked, setChecked] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [todoItem, setTodoItem] = useState<IData | null>(null);

	const response = useTodo();

	const handleEditTodo = () => {
		setUpdateModalOpen(true);
	};
	const handleDeleteModal = (todo: IData) => {
		setShowDeleteModal(true);
		setTodoItem(todo);
	};
	const toggleCheck = (checked: boolean, todo: IData) => {
		setChecked(!checked);
		response?.handleCheckTodo(checked, todo);
	};
	useEffect(() => {
		if (todo.status === "completed") {
			setChecked(true);
		} else {
			setChecked(false);
		}
	}, [todo]);

	return (
		<div>
			<div className="todo__item">
				
				<div className="todo__details">
					<div className="check__box-input">
						<input
							type="checkbox"
							className="check__box"
							checked={checked}
							onChange={(e) => toggleCheck(e.target.checked, todo)}
						/>
					</div>

					<div className="text">
						<p className={`${todo.status === "completed" && "check__mark"}`}>
							{todo.title}
						</p>
						<p className="time">
							{format(new Date(todo.date), "p, MM/dd/yyyy")}
						</p>
					</div>
				</div>
				<div className="todo__actions">
					<div className="icon" tabIndex={0} role="button">
						<MdDelete onClick={() => handleDeleteModal(todo)} />
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
			<DeleteModal
				showDeleteModal={showDeleteModal}
				setShowDeleteModal={setShowDeleteModal}
				todoItem={todoItem!}
			/>
		</div>
	);
};

export default TodoItem;
