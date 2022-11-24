import { Component } from "react";
import { Container, Button, Card } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import BookList from "./BookList";
import MyBook from "./MyBook";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    selectedcard: false,
    selecteddate: [],
  };
  fetchComment = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.elementid}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNWNmYWQ4MzkzNTAwMTVlOGM0YTUiLCJpYXQiOjE2NjkyOTEyNTksImV4cCI6MTY3MDUwMDg1OX0.R9fOcNdfbqF-E06umapRM0bFhO6l1qqyZMtvrBY5C4I",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        this.setState({
          selectedcard: false,
          selecteddate: data,
        });
        console.log("hello");
      } else {
        console.log("error fetching");
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    console.log("componentDid");
    this.fetchComment();
  }

  render() {
    return (
      <div className="ul-listt">
        <ul className="ul-listt">
          {this.state.selecteddate.map((m) => (
            <li key={m._id}>
              <b>{m.author}:</b> - -{m.comment}- -rate- -{m.rate}
            </li>
          ))}
        </ul>
        <AddComment elementid={this.props.elementid} />
      </div>
    );
  }
}

export default CommentArea;
