import { useState } from "react";
import "./App.css";
import { AppContent, AppHeader, Modal } from "./components";
interface TData {
	id: number;
	title: string;
	date: string;
	status: string;
}
const data = [
	{
		title: "test 101",
		id: 101,
		date: "10/24/2023, 9:04:07 PM",
		status: "completed",
	},
	{
		title: "test 102",
		id: 102,
		date: "10/24/2023, 9:04:07 PM",
		status: "incomplete",
	},
	{
		title: "test 103",
		id: 103,
		date: "10/24/2023, 9:04:07 PM",
		status: "incomplete",
	},
];

function App() {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="container">
			<h1 className="titles">TODO LIST</h1>
			<div className="app__wrapper">
				<AppHeader />
				<AppContent />
				<div className="flex__center">
					<button
						className="btn__style"
						style={{ marginTop: "5rem", cursor: "pointer" }}
					>
						Clear All
					</button>
				</div>
				{showModal && <Modal />}
			</div>
		</div>
	);
}

export default App;
