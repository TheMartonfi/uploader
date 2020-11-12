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
			<h4>Uploaded in the past 3 months</h4>
			<div>
				{uploadList.length ? uploadList : "No documents for this period"}
			</div>
		</React.Fragment>
	);
};

export default UploadList;
