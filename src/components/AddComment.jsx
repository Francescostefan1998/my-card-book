import { Component } from "react";
import { Container, Button, Card, ListGroup, Form } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import BookList from "./BookList";
import MyBook from "./MyBook";
import CommentArea from "./CommentArea";

class AddComment extends Component {
  state = {
    com: {
      comment: "",
      rate: "",
      elementId: this.props.elementid,
      author: "",
    },
  };
  onChangehand = (value, fieldToSet) => {
    this.setState({
      com: {
        ...this.state.com, // this creates a copy of reservation!
        [fieldToSet]: value,
      },
    });
  };
  handlesubmission = async (a) => {
    a.preventDefault();
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.com),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNWNmYWQ4MzkzNTAwMTVlOGM0YTUiLCJpYXQiOjE2NjkyOTEyNTksImV4cCI6MTY3MDUwMDg1OX0.R9fOcNdfbqF-E06umapRM0bFhO6l1qqyZMtvrBY5C4I",

            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("Comment Saved");
        this.setState({
          com: {
            comment: "",
            rate: "",
            author: "",
            elementId: this.props.elementid,
          },
        });
      } else {
        console.log("Somethig wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <ListGroup key={this.props._id}>
        <b>Let us know how it is going</b>
        <Form onSubmit={this.handlesubmission}>
          <Form.Group>
            <Form.Label>Your email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type here your email address"
              required
              value={this.state.com.author}
              onChange={(a) => this.onChangehand(a.target.value, "author")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your rate from 1 to 5</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write here your rate "
              required
              value={this.state.com.rate}
              onChange={(a) => this.onChangehand(a.target.value, "rate")}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Your comment</Form.Label>
            <Form.Control
              type="text"
              placeholder="Write here a comment"
              required
              value={this.state.com.comment}
              onChange={(a) => this.onChangehand(a.target.value, "comment")}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            submit{" "}
          </Button>
        </Form>
      </ListGroup>
    );
  }
}

export default AddComment;
