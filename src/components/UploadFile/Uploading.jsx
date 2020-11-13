import React from "react";
import { ReactComponent as UploadIcon } from "../../assets/UploadIcon.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Uploading = (props) => {
	// keep track of percentage with state
	const { fileName } = props;

	return (
		<div>
			<CircularProgressbar
				value={50}
				strokeWidth={2}
				styles={buildStyles({
					strokeLinecap: "butt",
					pathColor: "rgb(0, 184, 0)"
				})}
			/>
			<UploadIcon />
			<h1>{fileName}</h1>
			<p>uploading...</p>
		</div>
	);
};

export default Uploading;
