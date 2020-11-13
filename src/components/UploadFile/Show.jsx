import React from "react";

const Show = (props) => {
	return (
		<div>
			<h1>Drag and drop</h1>
			<p>your document here or</p>
			<button onClick={() => document.getElementById("get-file").click()}>
				click to upload
			</button>
			{/* Move style to css file later */}
			<input
				id="get-file"
				type="file"
				accept=".csv, .xlsx"
				style={{ display: "none" }}
				onChange={(event) =>
					props.setUploads((prev) => [...prev, event.target.files["0"]])
				}
			></input>
		</div>
	);
};

export default Show;
