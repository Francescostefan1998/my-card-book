import { Component } from "react";
import { Container, Button, Card } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import BookList from "./BookList";
import MyBook from "./MyBook";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    selectedMovieObject: [],
    isLoading: false,
  };
  fetchComment = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.selectedMovieTitle}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzdmNWNmYWQ4MzkzNTAwMTVlOGM0YTUiLCJpYXQiOjE2NjkyOTEyNTksImV4cCI6MTY3MDUwMDg1OX0.R9fOcNdfbqF-E06umapRM0bFhO6l1qqyZMtvrBY5C4I",
          },
        }
      );
      if (response.ok) {
        let data = await response.json(); // this extracts the body from the Response object
        let chosenMovieInfo = data;
        console.log("chosen movie info", chosenMovieInfo);
        this.setState({
          selectedMovieObject: chosenMovieInfo,
          isLoading: false,
        });
        // ...now render() will fire again!
      } else {
        console.log("something went wrong :(");
        this.setState({
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    console.log("componentDid");
    this.fetchComment();
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log("MOVIECARD HAS BEEN UPDATED!");
    console.log("prevProps", prevProps);
    console.log("current props", this.props);

    if (prevProps.selectedMovieTitle !== this.props.selectedMovieTitle) {
      console.log("NOW IT'S THE TIME TO FETCH THE NEW MOVIE!");
      this.fetchComment();
    }
  };

  render() {
    return (
      <div className="ul-listt">
        <ul className="ul-listt">
          {this.state.selectedMovieObject.map((m) => (
            <li key={m._id}>
              <b>{m.author}:</b> - -{m.comment}- -rate- -{m.rate}{" "}
            </li>
          ))}
          <AddComment elementid={this.props.selectedMovieTitle} />
        </ul>
      </div>
    );
  }
}

export default CommentArea;
