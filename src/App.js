import React from "react";
import UploadFile from "./components/UploadFile";
import UploadList from "./components/UploadList";

function App() {
	const [uploads, setUploads] = React.useState([]);

	return (
		<div className="App">
			<h1>Quarterly Report Dropbox</h1>
			<UploadFile setUploads={setUploads} />
			<UploadList uploads={uploads} />
		</div>
	);
}

export default App;
