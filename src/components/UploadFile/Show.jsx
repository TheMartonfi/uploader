import React from "react";
import InputFile from "./InputFile";
import { FileDrop } from "react-file-drop";
import { ReactComponent as DocumentLeft } from "../../assets/Document-Left.svg";
import { ReactComponent as SpreadsheetCenter } from "../../assets/Spreadsheet-Center.svg";
import { ReactComponent as FolderRight } from "../../assets/Folder-Right.svg";

const Show = (props) => {
	const { handleFile } = props;

	return (
		<FileDrop frame={document.getElementById("file-drop")} onDrop={handleFile}>
			<DocumentLeft />
			<SpreadsheetCenter />
			<FolderRight />
			<h1>Drag and drop</h1>
			<p>your document here or</p>
			<InputFile label="click to upload" handleFile={handleFile} />
		</FileDrop>
	);
};

export default Show;
