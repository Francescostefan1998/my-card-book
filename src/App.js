import "./App.css";
import MyBadge from "./components/MyBadge";
import WarningSign from "./components/WarningSign";
import "bootstrap/dist/css/bootstrap.min.css";
import MyBook from "./components/MyBook";
import BookList from "./components/BookList";
import { Component } from "react";
import FilterBookList from "./components/FilterBookList";
import CommentArea from "./components/CommentArea";
import { Container, Col, Row } from "react-bootstrap";
class App extends Component {
  state = {
    selectedMovieTitle: "",
    search: "",
  };

  changeSelectedMovieTitle = (newMovieTitle, searchvalue) => {
    this.setState({
      selectedMovieTitle: newMovieTitle,
      search: searchvalue,
    });
    console.log("status changed");
    console.log(this.state.selectedMovieTitle);
  };
  render() {
    return (
      <div className="App">
        <WarningSign textalert="Attention, failed loading" />
        <MyBadge classn="color-badge" text="my-badge" />
        <FilterBookList
          search={this.state.search}
          changeSelectedMovieTitle={this.changeSelectedMovieTitle} // CHANGES THE VALUE
        />
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={7} id="scroll">
            <BookList
              search={this.state.search}
              selectedMovieTitle={this.state.selectedMovieTitle} // READS THE VALUE
              changeSelectedMovieTitle={this.changeSelectedMovieTitle} // CHANGES THE VALUE
            />
          </Col>
          <Col xs={12} md={5} id="fixed">
            <CommentArea selectedMovieTitle={this.state.selectedMovieTitle} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
