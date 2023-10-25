
import "./App.css";
import { AppContent, AppHeader, } from "./components";
// import { useTodo } from "./context/TodoContext";

function App() {

	return (
		<div className="container">
			<h1 className="titles">TODO LIST</h1>
			<div className="app__wrapper">
				<AppHeader />
				<AppContent />
				<div className="flex__center">
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
