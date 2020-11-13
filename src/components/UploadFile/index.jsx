import React from "react";
import Show from "./Show";
import Uploading from "./Uploading";
import Error from "./Error";

const UploadFile = (props) => {
	const { setUploads } = props;
	const [mode, setMode] = React.useState({ type: "SHOW", fileName: "" });

	const handleFile = (file) => {
		const currentFile = file["0"];
		const csvFileType = "application/vnd.ms-excel";
		const xlsxFileType =
			"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

		if (currentFile.type === csvFileType || currentFile.type === xlsxFileType) {
			// Transition to upload
			setUploads((prev) => [...prev, currentFile]);
		} else {
			setMode({ type: "ERROR", fileName: currentFile.name });
		}
	};

	return (
		<React.Fragment>
			{mode.type === "SHOW" && <Show handleFile={handleFile} />}
			{mode.type === "UPLOADING" && <Uploading fileName={mode.fileName} />}
			{mode.type === "ERROR" && (
				<Error fileName={mode.fileName} handleFile={handleFile} />
			)}
		</React.Fragment>
	);
};

export default UploadFile;
