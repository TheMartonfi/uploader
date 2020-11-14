import React from "react";
import UploadFile from "./components/UploadFile";
import UploadList from "./components/UploadList";
import "./app.css";

function App() {
	const [uploads, setUploads] = React.useState([]);
	// React Fragment should be a div and I should be positioning title based on that
	// Slightly rounded corners around every square and box shadow around app
	return (
		<React.Fragment>
			<h1>Quarterly Report Dropbox</h1>
			<div className="app">
				<UploadFile setUploads={setUploads} />
				<UploadList uploads={uploads} />
			</div>
		</React.Fragment>
	);
}

export default App;
