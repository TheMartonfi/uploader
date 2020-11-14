import React from "react";
import { ReactComponent as UploadIcon } from "../../assets/UploadIcon.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./uploading.css";

const Uploading = (props) => {
	const { setMode, setUploads, file } = props;
	const [percentage, setPercentage] = React.useState(0);

	React.useEffect(() => {
		if (percentage === 100) {
			setTimeout(() => {
				setMode({ type: "SHOW" });
				setUploads((prev) => [...prev, file]);
			}, 1050);
		} else {
			setPercentage(percentage + 1);
		}
		//eslint-disable-next-line
	}, [percentage]);

	return (
		<div className="uploading-container">
			<CircularProgressbar
				className="progress"
				value={percentage}
				strokeWidth={4}
				styles={buildStyles({
					strokeLinecap: "butt",
					pathColor: "rgb(0, 184, 0)"
				})}
			/>
			<UploadIcon className="upload-icon" />
			<h1>{file.name}</h1>
			<p>uploading...</p>
		</div>
	);
};

export default Uploading;
