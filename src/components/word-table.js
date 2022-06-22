import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

const WordTable = (props) => {
const { _id, name, email, rollno } = props.obj;

const deleteWord = () => {
	axios
	.delete(
"http://localhost:9000/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Word successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{rollno}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-word/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteWord}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default WordTable;
