import React from "react";
import Show from "./Show";
import Uploading from "./Uploading";
import Error from "./Error";
import "./upload-file.css";

const UploadFile = (props) => {
	const { setUploads } = props;
	const [mode, setMode] = React.useState({ type: "SHOW", fileName: "" });

	const handleFile = (files, event) => {
		event.preventDefault();

		const currentFile = files["0"];
		const csvFileType = "application/vnd.ms-excel";
		const xlsxFileType =
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

		if (currentFile.type === csvFileType || currentFile.type === xlsxFileType) {
			// Transition to upload
			setMode({ type: "UPLOADING", fileName: currentFile.name });
			setUploads((prev) => [...prev, currentFile]);
		} else {
			setMode({ type: "ERROR", fileName: currentFile.name });
		}
	};

	return (
		<React.Fragment>
			{mode.type === "SHOW" && <Show handleFile={handleFile} />}
			{mode.type === "UPLOADING" && (
				<Uploading setMode={setMode} fileName={mode.fileName} />
			)}
			{mode.type === "ERROR" && (
				<Error handleFile={handleFile} fileName={mode.fileName} />
			)}
		</React.Fragment>
	);
};

export default UploadFile;
