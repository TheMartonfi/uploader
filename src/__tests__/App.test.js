import React from "react";
import "@testing-library/jest-dom";
import {
	render,
	cleanup,
	fireEvent,
	waitForElementToBeRemoved
} from "@testing-library/react";
import App from "../App";

afterEach(cleanup);

describe("App", () => {
	const csvFile = {
		name: "file.csv",
		size: 1434,
		type: "application/vnd.ms-excel"
	};

	const docxFile = {
		name: "file.docx",
		size: 1543,
		type:
			"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
	};

	it("defaults to showing drag and drop area", () => {
		const { getByText } = render(<App />);

		expect(getByText("Drag and drop")).toBeInTheDocument();
	});

	it("renders app, uploads file and updates the history on success", async () => {
		const { getByText, getByTestId, queryByText } = render(<App />);

		fireEvent.change(getByTestId("get-file"), {
			target: { files: { 0: csvFile } }
		});

		expect(getByText("uploading...")).toBeInTheDocument();

		await waitForElementToBeRemoved(queryByText("uploading..."));

		expect(queryByText("file.csv")).toBeInTheDocument();
	});

	it("renders app, uploads file and shows error message for incorrect file type", async () => {
		const { getByText, getByTestId, queryByText } = render(<App />);

		fireEvent.change(getByTestId("get-file"), {
			target: { files: { 0: docxFile } }
		});

		expect(getByText("uploading...")).toBeInTheDocument();

		await waitForElementToBeRemoved(queryByText("uploading..."));

		expect(
			getByText("Only .CSV and .XLSX can be uploaded")
		).toBeInTheDocument();
	});
});
