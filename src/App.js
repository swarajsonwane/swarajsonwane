import "bootstrap/dist/css/bootstrap.css";
// Import Custom CSS
import "./App.css";

// Import Bootstrap
import { Col, Container, Nav, Navbar, Row }
		from "react-bootstrap";
// Import from react-router-dom
import {
	Link,
	Route,
	BrowserRouter as Router,
	Routes
} from "react-router-dom";

// Import other React Component
import CreateWord from
	"./components/create-word";
import EditWord from
	"./components/edit-word";
// Import React
import React from "react";
import WordList from
	"./components/word-list";

// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/create-word"}
				className="nav-link">
				React App
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-word"}
					className="nav-link">
					Add Word
				</Link>
				</Nav>

				<Nav>
				<Link to={"/word-list"}
					className="nav-link">
					Word List
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>

		<Container>
		<Row>
			<Col md={12}>
			<div className="wrapper">
				<Routes >
				<Route exact path="/"
					component={CreateWord} />
				<Route path="/create-word"
					element={<CreateWord/>} exact  />
				<Route path="/edit-student/:id"
				element={<EditWord/>} exact  />
				<Route path="/word-list"
					element={<WordList/>} exact />
				</Routes >
			</div>
			</Col>
		</Row>
		</Container>
	</div>
	</Router>
);
};

export default App;
