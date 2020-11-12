import React from "react";
import UploadItem from "./UploadItem";

const UploadList = (props) => {
	const uploadList = props.uploads.map((upload) => {
		return (
			<UploadItem name={upload.name} size={upload.size} type={upload.type} />
		);
	});

	return (
		<div>
			{/* Find a way to make this dynamic */}
			<h4>Uploaded in the past 3 months</h4>
			{uploadList}
		</div>
	);
};

export default UploadList;
