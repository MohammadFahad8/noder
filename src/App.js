import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/view-student.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const App = () => {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to={"/"}>Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/create-student"}>Add Student</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/student-list"}>Student List</Link>
      </li>
      <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" to={"#"} id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </Link>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" to={"#"}>Action</a>
          <a className="dropdown-item" to={"#"}>Another action</a>
          <a className="dropdown-item" to={"#"}>Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper mt-5">
              <Switch>
                
                <Route exact path='/' component={StudentList} />
                <Route path="/create-student" component={CreateStudent} />
                <Route path="/edit-student/:id" component={EditStudent} />
                <Route path="/student-list" component={StudentList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
  );
}

export default App;
