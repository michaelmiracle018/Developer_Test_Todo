import { MdOutlineClose } from "react-icons/md";
import { IData } from "../../shared/types";
import { useTodo } from "../../context/TodoContext";

type Props = {
	setShowDeleteModal: (showDeleteModal: boolean) => void;
	showDeleteModal: boolean;
	todoItem: IData;
};

const DeleteModal = ({
	setShowDeleteModal,
	showDeleteModal,
	todoItem,
}: Props) => {
	const response = useTodo();
	const deleteItem = (todo: IData) => {
		response?.handleDeleteSingleTodo(todo);
	};

	return (
		<div>
			{showDeleteModal && (
				<div className="modal__wrapper">
					<div className="modal__container">
						<div className="close__button" role="button" tabIndex={0}>
							<MdOutlineClose onClick={() => setShowDeleteModal(false)} />
						</div>
						<div>
							<h1 className="form__title">Add TODO</h1>
							<h4>Are you sure you want to delete this item?</h4>
							<div style={{ marginTop: "1rem" }}>
								<button
									className="btn__style"
									style={{
										cursor: "pointer",
										background: "#78b5f2",
										color: "#fff",
									}}
									onClick={() => deleteItem(todoItem)}
								>
									Yes
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DeleteModal;
