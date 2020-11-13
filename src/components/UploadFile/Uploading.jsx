import React from "react";
import { ReactComponent as UploadIcon } from "../../assets/UploadIcon.svg";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Uploading = (props) => {
	const { setMode, fileName } = props;
	const [percentage, setPercentage] = React.useState(0);

	React.useEffect(() => {
		if (percentage === 100) {
			setTimeout(() => {
				setMode({ type: "SHOW" });
			}, 1050);
		} else {
			setPercentage(percentage + 50);
		}
	}, [percentage]);

	return (
		<div>
			<CircularProgressbar
				className="progress"
				value={percentage}
				strokeWidth={4}
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
