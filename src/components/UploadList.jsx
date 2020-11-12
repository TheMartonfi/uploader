import React from "react";
import UploadItem from "./UploadItem";

const UploadList = (props) => {
	const uploadList = props.uploads.map((upload) => {
		return (
			<UploadItem name={upload.name} size={upload.size} type={upload.type} />
		);
	});

	return (
		<React.Fragment>
			{/* Find a way to make this dynamic */}
			<h4>Uploaded in the past 3 months</h4>
			<div>{uploadList}</div>
		</React.Fragment>
	);
};

export default UploadList;
