import React from "react";
import { ReactComponent as CsvIcon } from "../assets/CSVicon.svg";
import { ReactComponent as XlsxIcon } from "../assets/XLSXicon.svg";

const UploadItem = (props) => {
	const { name, size, type } = props;

	return (
		<li className="upload-item">
			{type === "application/vnd.ms-excel" ? <CsvIcon /> : <XlsxIcon />}
			<p>{name}</p>
			{/* Convert bytes to kb with one decimal place */}
			<p className="file-size">{`${(size / 1000).toFixed(1)} kb`}</p>
		</li>
	);
};

export default UploadItem;
