import React, { useState } from "react";
import "./appHeader.css";
import Modal from "../modal/Modal";
type Props = {
	setFilterStatus: (filterStatus: string) => void;
	filterStatus: string;
	setSearchTodo: (searchTodo: string) => void;
	searchTodo: string;
};

const AppHeader = ({
	setFilterStatus,
	filterStatus,
	setSearchTodo,
	searchTodo,
}: Props) => {
	const [showModal, setShowModal] = useState(false);
	// const [searchTerm, setSearchTerm] = useState("");

	const handleSearchTodoList = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTodo(e.target.value);
	};

	const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterStatus(e.target.value);
	};

	return (
		<div>
			<div className="app__header-container">
				<div>
					<button className="btn__style btn" onClick={() => setShowModal(true)}>
						Add Todo
					</button>
				</div>

				<div>
					<select
						name=""
						id=""
						className="btn__style"
						value={filterStatus}
						onChange={(e) => handleFilter(e)}
					>
						<option value="all">All</option>
						<option value="uncompleted">Uncompleted</option>
						<option value="completed">Completed</option>
					</select>
				</div>
			</div>
			<div className="app__header-input flex__center">
				<input
					className="btn__style"
					type="text"
					placeholder="search todo"
					style={{ cursor: "caret" }}
					value={searchTodo}
					onChange={(e) => handleSearchTodoList(e)}
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
