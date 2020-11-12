import UploadList from "./components/UploadList";
// We will need a state to keep track of all the uploaded documents

function App() {
	return (
		<div className="App">
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
