import React from "react";
import "./appHeader.css";

type Props = {};

const AppHeader = (props: Props) => {
	return (
		<div>
			<div className="app__header-container">
				<div>
					<button className="btn__style btn">Add Todo</button>
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
			{/*<TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />*/}
		</div>
	);
};

export default AppHeader;
