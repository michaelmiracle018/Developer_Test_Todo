import React, { useState } from "react";
import "./appHeader.css";
import Modal from "../modal/Modal";

const AppHeader = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<div>
			<div className="app__header-container">
				<div>
					<button className="btn__style btn" onClick={() => setShowModal(true)}>
						Add Todo
					</button>
				</div>

				<div>
					<select name="" id="" className="btn__style">
						<option value="all">All</option>
						<option value="incomplete">Incomplete</option>
						<option value="complete">Completed</option>
					</select>
				</div>
			</div>
			<div className="app__header-input flex__center">
				<input
					className="btn__style"
					type="text"
					placeholder="search todo"
					style={{ cursor: "caret" }}
				/>
			</div>

			<Modal
				type="add"
				showModal={showModal}
				setShowModal={setShowModal}
				todo={null}
			/>

			{/*<TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />*/}
		</div>
	);
};

export default AppHeader;
