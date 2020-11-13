import React from "react";
import Show from "./Show";

const UploadFile = (props) => {
	const handleClick = () => {
		document.getElementById("get-file").click();
	};

	return (
		<div>
			<Show setUploads={props.setUploads} handleClick={handleClick} />
		</div>
	);
};

export default UploadFile;
