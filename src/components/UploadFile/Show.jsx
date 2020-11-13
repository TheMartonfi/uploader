import React from "react";
import UploadButton from "./UploadButton";

const Show = (props) => {
	return (
		<div>
			<h1>Drag and drop</h1>
			<p>your document here or</p>
			{/* Hide input file and make this button click input file so I can customize text */}
			<UploadButton label={"click to upload"} />
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
