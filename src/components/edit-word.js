// EditStudent Component for update student data

// Import Modules

import React, { useEffect, useState } from "react";

import WordForm from "./word-form";
import axios from "axios";

const EditWord = (props) => {
const [formValues, setFormValues] = useState({
    id:0,
	word:""
});
	
const onSubmit = (wordObject) => {
	axios
	.put(
		"http://localhost:9000/" +
		props.match.params.id,
	   wordObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Word successfully updated");
		props.history.push("/word-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

useEffect(() => {
	axios
	.get(
		"http://localhost:9000/"
		+ props.match.params.id
	)
	.then((res) => {
		const { id, word } = res.data;
		setFormValues({ id, word });
	})
	.catch((err) => console.log(err));
}, []);

return (
	<WordForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update Word
	</WordForm>
);
};

export default EditWord;
