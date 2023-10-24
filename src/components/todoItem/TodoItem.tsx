import React from "react";
import "./todoItem.css";
import { format } from "date-fns";
import { MdDelete, MdEdit } from "react-icons/md";

type Props = {};

const TodoItem = (props: Props) => {
	return (
		<div>
			<div className="todo__item">
				<div className="todo__details">
					<div className="check__box-input">
						<input type="checkbox" className="check__box" />
					</div>

					<div className="text">
						<p className="">TodoItem</p>
						<p className="time">
							{format(new Date("10/24/2023, 9:04:07 PM"), "p, MM/dd/yyyy")}
						</p>
					</div>
				</div>
				<div className="todo__actions">
					<div className="icon" tabIndex={0} role="button">
						<MdDelete />
					</div>
					<div className="icon" tabIndex={0} role="button">
						<MdEdit />
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoItem;
