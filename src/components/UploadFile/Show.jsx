import React from "react";

const Show = () => {
	return (
		<div>
			<h1>Drag and drop</h1>
			<p>your document here or</p>
			<button onClick={() => document.getElementById("get-file").click()}>
				click to upload
			</button>
			{/* Move style to css file later */}
			<input type="file" id="get-file" style={{ display: "none" }}></input>
		</div>
	);
};

export default Show;
