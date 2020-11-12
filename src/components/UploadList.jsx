import React from "react";

const UploadList = (props) => {
	return (
		<div>
			{/* Find a way to make this dynamic */}
			<h4>Uploaded in the past 3 months</h4>
			{props.uploads || []}
		</div>
	);
};

export default UploadList;
