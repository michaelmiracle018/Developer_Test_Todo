import React from "react";
import TodoItem from "../todoItem/TodoItem";
import './appContent.css'
type Props = {};

const AppContent = (props: Props) => {
	return (
		<div className="content__wrapper">
            <TodoItem />            
		</div>
	);
};

export default AppContent;
