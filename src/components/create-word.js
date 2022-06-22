import React, { useEffect, useState } from "react";

import WordForm from "./word-form";
import axios from 'axios';

const CreateWord = () => {
const [formValues, setFormValues] =
	useState({ word: ''})

const onSubmit = wordObject => {
	axios.post(
'http://localhost:9000/',
wordObject)
	.then(res => {
		if (res.status === 200)
		alert('Word successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	
return(
	<WordForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Add Word
	</WordForm>
)
}

export default CreateWord
