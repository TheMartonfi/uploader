import UploadList from "./components/UploadList";
// We will need a state to keep track of all the uploaded documents

function App() {
	return (
		<div className="App">
			<h1>Quarterly Report Dropbox</h1>
			<UploadList
				uploads={[
					{ name: "My Document", size: "32kb", type: "csv" },
					{ name: "My Document", size: "64kb", type: "xlsx" }
				]}
			/>
		</div>
	);
}

export default App;
