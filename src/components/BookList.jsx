import { Component } from "react";
import { Container, Button, Card, Spinner } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import MyBook from "./MyBook";
class BookList extends Component {
  state = {
    selectedBook: null, // this is the INITIAL VALUE of selectedPasta in the State
    isLoading: true,
  };
  changestatus = () => {
    this.setState({
      isLoading: false,
    });

    console.log("nn");
  };
  componentDidMount() {
    this.changestatus();
    console.log("did");
  }
  render() {
    return (
      <Container id="display-book" className="row">
        {this.state.isLoading && (
          <Spinner
            animation="border"
            role="status"
            className="custom-spinner-color"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        {fantasy.map((book) => (
          <MyBook bookid={book} key={book.asin} />
        ))}
      </Container>
    );
  }
}
export default BookList;
