export const getLocalStorage = () => {
	let todoData = localStorage.getItem("todoList");

	if (todoData) {
		return JSON.parse(localStorage.getItem("todoList") || "");
	} else {
		return [];
	}
};
