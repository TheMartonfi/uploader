import React from "react";
import InputFile from "./InputFile";
import { ReactComponent as ErrorIcon } from "../../assets/ErrorIcon.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Error = (props) => {
	const { handleFile, file } = props;

	return (
		<div className="error-container">
			<CircularProgressbar
				className="progress"
				value={100}
				strokeWidth={4}
				styles={buildStyles({ pathColor: "red" })}
			/>
			<ErrorIcon className="error-icon" />
			<h1>{file.name}</h1>
			<p>
				This document could not be uploaded because the file type is incorrect.
				<br></br>Only .CSV and .XLSX can be uploaded
			</p>
			<InputFile label="Upload another document" handleFile={handleFile} />
		</div>
	);
};

export default Error;
