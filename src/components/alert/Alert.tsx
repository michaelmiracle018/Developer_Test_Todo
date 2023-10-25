import React, { useEffect } from "react";

const Alert = () => {
	useEffect(() => {
		const timeout = setTimeout(() => {}, 3000);
		return () => clearTimeout(timeout);
	}, []);

	return <p className={`alert alert`}>msg</p>;
};

export default Alert;
