import React from "react";
import { ReactComponent as UploadIcon } from "../../assets/UploadIcon.svg";

const Uploading = (props) => {
	const { fileName } = props;

	return (
		<div>
			<div>
				<UploadIcon />
			</div>
			<h1>{fileName}</h1>
			<p>uploading...</p>
		</div>
	);
};

export default Uploading;
