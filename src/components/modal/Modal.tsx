import React from "react";
import { MdOutlineClose } from "react-icons/md";
import "./modal.css";

type Props = {};

const Modal = (props: Props) => {
	return (
		<div>
			<div className="modal__wrapper">
				<div className="modal__container">
					<div
						className="close__button"
						role="button"
						tabIndex={0}
						// animation
					>
						<MdOutlineClose />
					</div>

					<form className="form">
						<h1 className="form__title">Add TODO</h1>
						<label htmlFor="title">
							Title
							<input type="text" id="title" />
						</label>
						<label htmlFor="type">
							Status
							<select id="type">
								<option value="incomplete">Incomplete</option>
								<option value="complete">Completed</option>
							</select>
						</label>
						<div className="button__container">
							<button className="btn__style modal__btn">Add Todo</button>
							<button className="btn__style modal__btn">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Modal;
