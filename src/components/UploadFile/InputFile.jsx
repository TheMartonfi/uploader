import React from "react";

const InputFile = (props) => {
	const { handleFile, label } = props;

	const handleClick = () => {
		document.getElementById("get-file").click();
	};

	return (
		<React.Fragment>
			<button className="upload-button" onClick={handleClick}>
				{label}
			</button>
			<input
				id="get-file"
				type="file"
				accept=".csv, .xlsx"
				style={{ display: "none" }}
				onChange={(event) => handleFile(event.target.files, event)}
			></input>
		</React.Fragment>
	);
};

export default InputFile;
