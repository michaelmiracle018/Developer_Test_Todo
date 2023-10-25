import React, { useEffect } from "react";
import { IAlert, IData } from "../../shared/types";
import "./alert.css";
type Props = {
	alert: IAlert;
	showAlert: () => void;
	todo: IData[] | string;
};

const Alert = ({ alert, showAlert, todo }: Props) => {
	useEffect(() => {
		const timeout = setTimeout(() => {
			showAlert();
		}, 3000);
		return () => clearTimeout(timeout);
	}, [todo]);

	return (
		<p
			className={`flex__center alert alert-${alert.value}`}
			style={{ marginBottom: "1rem" }}
		>
			{alert.msg}
		</p>
	);
};

export default Alert;
