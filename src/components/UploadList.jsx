import React from "react";
import UploadItem from "./UploadItem";
import "./upload-history.css";

const UploadList = (props) => {
	// Add key prop to UploadItem
	const uploadList = props.uploads.map((upload) => {
		return (
			<UploadItem name={upload.name} size={upload.size} type={upload.type} />
		);
	});

	return (
		<div className="upload-item-container">
			<h4>Uploaded in the past 3 months</h4>
			{uploadList.length ? (
				uploadList
			) : (
				<div>
					<p>No documents for this period</p>
				</div>
			)}
		</div>
	);
};

export default UploadList;
