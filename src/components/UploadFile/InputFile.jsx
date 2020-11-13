import React from "react";

const InputFile = (props) => {
	const { handleFile, label } = props;

	const handleClick = () => {
		document.getElementById("get-file").click();
	};

	return (
		<React.Fragment>
			{/* Hide input file and make this button click input file so I can customize text */}
			<button onClick={handleClick}>{label}</button>
			{/* Move style to css file later */}
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
