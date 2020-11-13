import React from "react";
import { FileDrop } from "react-file-drop";
import { ReactComponent as DocumentLeft } from "../../assets/Document-Left.svg";
import { ReactComponent as SpreadsheetCenter } from "../../assets/Spreadsheet-Center.svg";
import { ReactComponent as FolderRight } from "../../assets/Folder-Right.svg";

// Going to need some validation for what files are uploaded
const Show = (props) => {
	const { setUploads, handleClick } = props;

	const handleFile = (file) => {
		setUploads((prev) => [...prev, file["0"]]);
	};

	return (
		<FileDrop frame={document.getElementById("file-drop")} onDrop={handleFile}>
			<DocumentLeft />
			<SpreadsheetCenter />
			<FolderRight />
			<h1>Drag and drop</h1>
			<p>your document here or</p>
			{/* Hide input file and make this button click input file so I can customize text */}
			<button onClick={handleClick}>click to upload</button>
			{/* Move style to css file later */}
			<input
				id="get-file"
				type="file"
				accept=".csv, .xlsx"
				style={{ display: "none" }}
				onChange={(event) => handleFile(event.target.files)}
			></input>
		</FileDrop>
	);
};

export default Show;
