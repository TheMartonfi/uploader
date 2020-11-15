import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import App from "../App";

describe("Show", () => {
	const csvFile = {
		name: "file.csv",
		size: 1434,
		type: "application/vnd.ms-excel"
	};

	const xlsxFile = {
		name: "file.xlsx",
		size: 1543,
		type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
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
});
