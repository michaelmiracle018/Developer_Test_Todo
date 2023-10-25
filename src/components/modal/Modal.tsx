import React, { useEffect, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import "./modal.css";
import { useTodo } from "../../context/TodoContext";
import { IAlert, IData } from "../../shared/types";
import Alert from "../alert/Alert";

type Props = {
	type: string;
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
	todo: IData | null;
};

const Modal = ({ type, showModal, setShowModal, todo }: Props) => {
	// console.log(type);

	const response = useTodo();
	const [title, setTitle] = useState("");
	const [status, setStatus] = useState("");
	const [isAlert, setIsAlert] = useState<IAlert>({
		msg: "",
		show: false,
		value: "",
	});

	useEffect(() => {
		if (type === "update" && todo) {
			setTitle(todo.title);
			setStatus(todo.status);
		} else {
			setTitle("");
			setStatus("");
		}
	}, [type, showModal, todo]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title || !status) {
			showAlert(true, "danger", "please fill all fields");

			return;
		}
		if (type === "add") {
			if (title && status) {
				response?.saveTodo({
					id: Number(new Date().getTime()),
					title,
					status,
					date: new Date().toLocaleString(),
				});
				setShowModal(false);
			}
		} else if (type === "update") {
			if (todo !== null) {
				response?.handleEditTodo({ ...todo, title, status });
			}
			setShowModal(false);
		}
	};

	const showAlert = (show = false, value = "", msg = "") => {
		setIsAlert({ show, value, msg });
	};
	return (
		<div>
			{showModal && (
				<div className="modal__wrapper">
					<div className="modal__container">
						<div
							className="close__button"
							role="button"
							tabIndex={0}
							onClick={() => setShowModal(false)}
						>
							<MdOutlineClose />
						</div>
						<div>
							<h1 className="form__title">Add TODO</h1>
							{isAlert.show && (
								<Alert
									alert={isAlert!}
									showAlert={showAlert}
									todo={response?.dataTodos!}
								/>
							)}
							<form className="form" onSubmit={(e) => handleSubmit(e)}>
								<label htmlFor="title">
									Title
									<input
										type="text"
										id="title"
										value={title}
										onChange={(e) => setTitle(e.target.value)}
									/>
								</label>
								<label htmlFor="type">
									Status
									<select
										id="type"
										value={status}
										onChange={(e) => setStatus(e.target.value)}
									>
										{" "}
										<option value="" disabled>
											--Please choose an option--
										</option>
										<option value="uncompleted">Uncompleted</option>
										<option value="completed">Completed</option>
									</select>
								</label>
								<div className="button__container">
									<button className="btn__style modal__btn">Add Todo</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Modal;
