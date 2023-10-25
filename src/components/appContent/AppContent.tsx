import React, { useEffect } from "react";
import TodoItem from "../todoItem/TodoItem";
import "./appContent.css";
import { IData } from "../../shared/types";
import { useTodo } from "../../context/TodoContext";

type Props = {
	filterStatus: string;
	filteredCategory: IData[];
};

const AppContent = ({ filterStatus, filteredCategory }: Props) => {
	const response = useTodo();
	const { dataTodos } = response as unknown as { dataTodos: Array<IData> };

	if (!dataTodos.length) {
		return <div className="content__wrapper msg__text">Add a Todo List</div>;
	}
	if (!filteredCategory.length) {
		return <div className="content__wrapper msg__text">No Todo Found</div>;
	}
	return (
		<div className="content__wrapper">
			{filteredCategory.map((item: IData) => {
				return <TodoItem key={item.id} todo={item} />;
			})}
		</div>
	);
};

export default AppContent;
