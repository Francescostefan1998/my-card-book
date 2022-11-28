import { Component } from "react";
import { Container, Button, Card, Form, Spinner } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import MyBook from "./MyBook";

class FilterBookList extends Component {
  render() {
    return (
      <div>
        <Form.Control
          type="text"
          value={this.props.search}
          onChange={(e) =>
            this.props.changeSelectedMovieTitle(0, e.target.value)
          }
        />
      </div>
    );
  }
}

export default FilterBookList;
