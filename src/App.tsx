import { useEffect, useState } from "react";
import "./App.css";
import { AppContent, AppHeader } from "./components";
import { useTodo } from "./context/TodoContext";
import { IData } from "./shared/types";

function App() {
	const [filterStatus, setFilterStatus] = useState("all");
	const [searchTodo, setSearchTodo] = useState("");

	const response = useTodo();
	const { dataTodos } = response as unknown as { dataTodos: Array<IData> };

	const deleteAllTodos = () => {
		response?.handleAllTodos();
	};

	let filterCategory: IData[];

	filterCategory = dataTodos.filter((item) => {
		if (filterStatus === "all") {
			return true;
		} else {
			return item.status === filterStatus;
		}
	});

	if (searchTodo) {
		filterCategory = dataTodos.filter((item) =>
			item.title.toLowerCase().includes(searchTodo.toLowerCase()),
		);
	}

	// if (!filterCategory.length) {

	// }


	return (
		<div className="container">
			<h1 className="titles">TODO LIST</h1>
			<div className="app__wrapper">
				<AppHeader
					setFilterStatus={setFilterStatus!}
					filterStatus={filterStatus!}
					setSearchTodo={setSearchTodo!}
					searchTodo={searchTodo!}
				/>
				<AppContent
					filterStatus={filterStatus!}
					filteredCategory={filterCategory!}
				/>
				<div className="flex__center" onClick={deleteAllTodos}>
					<button
						className="btn__style"
						style={{
							marginTop: "5rem",
							cursor: "pointer",
							marginBottom: "5rem",
						}}
					>
						Clear All
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
