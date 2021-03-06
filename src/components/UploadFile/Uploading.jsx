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
				const csvFileType = "application/vnd.ms-excel";
				const xlsxFileType =
					"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
				console.log(file.type);
				if (file.type === csvFileType || file.type === xlsxFileType) {
					setMode({ type: "SHOW" });
					setUploads((prev) => [...prev, file]);
				} else {
					setMode({ type: "ERROR", file });
				}
			}, 1000);
		} else {
			setPercentage(percentage + 2);
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
