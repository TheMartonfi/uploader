import React from "react";
import { ReactComponent as CsvIcon } from "../assets/CSVicon.svg";
import { ReactComponent as XlsxIcon } from "../assets/XLSXicon.svg";

const UploadItem = (props) => {
	return (
		<div>
			{props.type === "csv" ? <CsvIcon /> : <XlsxIcon />}
			<p>{props.name || "Uploaded document name"}</p>
			<p>{props.size || "weight"}</p>
		</div>
	);
};

export default UploadItem;
