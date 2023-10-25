import TodoItem from "../todoItem/TodoItem";
import "./appContent.css";
import { IData } from "../../shared/types";
import { useTodo } from "../../context/TodoContext";
import Alert from "../alert/Alert";

type Props = {
	filterStatus: string;
	filteredCategory: IData[];
};

const AppContent = ({ filteredCategory }: Props) => {
	const response = useTodo();
	const { dataTodos } = response as unknown as { dataTodos: Array<IData> };

	if (!dataTodos.length) {
		return (
			<div
				className="content__wrapper msg__text flex__center"
				style={{ color: "red" }}
			>
				Add a Todo List
			</div>
		);
	}
	if (!filteredCategory.length) {
		return (
			<div
				className="content__wrapper msg__text flex__center"
				style={{ color: "red" }}
			>
				No Todo Found
			</div>
		);
	}
	return (
		<div className="content__wrapper">
			{response?.isAlert.show && (
				<Alert
					alert={response?.isAlert!}
					showAlert={response?.showAlert!}
					todo={response?.dataTodos!}
				/>
			)}
			{filteredCategory.map((item: IData) => {
				return <TodoItem key={item.id} todo={item} />;
			})}
		</div>
	);
};

export default AppContent;
