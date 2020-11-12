import React from "react";
import { ReactComponent as CsvIcon } from "../../public/assets/CSVicon.svg";
import { ReactComponent as XlsxIcon } from "../../public/assets/XLSXicon.svg";

const UploadItem = (props) => {
	return (
		<div>
			{props.upload.type === "csv" ? <CsvIcon /> : <XlsxIcon />}
			<p>{props.upload.name || "Uploaded document name"}</p>
			<p>{props.upload.size || "weight"}</p>
		</div>
	);
};

export default UploadItem;
