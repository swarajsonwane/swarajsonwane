import * as Yup from "yup";

import { Button, FormGroup } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";

import React from "react";

const WordForm = (props) => {
const validationSchema = Yup.object().shape({
	word: Yup.string().required("Rquired"),
	
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormGroup>
			<Field name="word" type="text"
				className="form-control" />
			<ErrorMessage
			name="word"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default WordForm;
