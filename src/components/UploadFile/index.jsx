import React from "react";
import Show from "./Show";

const UploadFile = (props) => {
	return (
		<div>
			<Show setUploads={props.setUploads} />
		</div>
	);
};

export default UploadFile;
