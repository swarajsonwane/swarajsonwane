import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";
import WordTable from "./word-table";
import axios from "axios";

const WordList = () => {
const [words, setWords] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:9000/")
	.then(({ data }) => {
		setWords(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return words.map((res, i) => {
	return <WordTable obj={res} key={i} />;
	});
};

return (
	<div className="table-wrapper">
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>Id</th>
			<th>Word</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default WordList;
