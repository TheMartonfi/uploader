import React from "react";

const UploadButton = (props) => {
	return (
		<div>
			<button onClick={() => document.getElementById("get-file").click()}>
				{props.label}
			</button>
		</div>
	);
};

export default UploadButton;
