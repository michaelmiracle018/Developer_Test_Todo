import React from "react";
import TodoItem from "../todoItem/TodoItem";
import "./appContent.css";
import { IData, UserArray } from "../../shared/types";
import { useTodo } from "../../context/TodoContext";

const AppContent = () => {
	const response = useTodo();
	const { dataTodos } = response as unknown as { dataTodos: Array<IData> };

	return (
		<div className="content__wrapper">
			{dataTodos.map((item: IData) => (
				<TodoItem key={item.id} todo={item} />
			))}
		</div>
	);
};

export default AppContent;
