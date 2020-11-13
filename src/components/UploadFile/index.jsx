import React from "react";
import Show from "./Show";
import Uploading from "./Uploading";
import Error from "./Error";
import "./upload-file.css";

const UploadFile = (props) => {
	const { setUploads } = props;
	const [mode, setMode] = React.useState({ type: "SHOW", file: {} });

	const handleFile = (files, event) => {
		event && event.preventDefault();

		const file = files["0"];
		const csvFileType = "application/vnd.ms-excel";
		const xlsxFileType =
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

		if (file.type === csvFileType || file.type === xlsxFileType) {
			setMode({ type: "UPLOADING", file });
		} else {
			setMode({ type: "ERROR", file });
		}
	};

	return (
		<React.Fragment>
			{mode.type === "SHOW" && <Show handleFile={handleFile} />}
			{mode.type === "UPLOADING" && (
				<Uploading setMode={setMode} setUploads={setUploads} file={mode.file} />
			)}
			{mode.type === "ERROR" && (
				<Error handleFile={handleFile} file={mode.file} />
			)}
		</React.Fragment>
	);
};

export default UploadFile;
