export interface IData {
	id: number;
	title: string;
	date: string;
	status: string;
}
export interface UserArray {
	data: IData[];
}

export type TodoContextType = {
	// todos: IData[];
	saveTodo: (todo: IData) => void;
	showModal: boolean;
	setShowModal: (showModal: boolean) => void;
	handleEditTodo: (todo: IData) => void;
	editTitle: IData | null | undefined;
	isEdit: boolean;
	setDataTodos: (todo: any) => void;
	handleDeleteTodo: (todo: IData) => void;
};

export interface IProps {
	children: React.ReactNode;
}

export interface IModal {
	openModal: () => void;
}

export interface IEdit {
	handleEditTodos: () => void;
}
