import React from "react";
import InputFile from "./InputFile";
import { ReactComponent as ErrorIcon } from "../../assets/ErrorIcon.svg";

const Error = (props) => {
	const { fileName } = props;

	return (
		<div>
			<div>
				<ErrorIcon />
			</div>
			<h1>{fileName}</h1>
			<p>
				This document could not be uploaded because the file type is incorrect.
			</p>
			<p>Only .CSV and .XLSX can be uploaded</p>
			<InputFile label="Upload another document" />
		</div>
	);
};

export default Error;
