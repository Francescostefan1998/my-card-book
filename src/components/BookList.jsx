import { Component } from "react";
import { Container, Button, Card, Spinner } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import MyBook from "./MyBook";
class BookList extends Component {
  render() {
    return (
      <Container id="display-book" className="row">
        {fantasy
          .filter((book) => book.title.includes(this.props.search))
          .map((book) => (
            <MyBook
              search={this.props.search}
              book={book}
              changeSelectedMovieTitle={this.props.changeSelectedMovieTitle}
            />
            /* <Card key={book.asin}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title id="wrap">{book.title}</Card.Title>
              <Card.Text>
                £{book.price}
                <br></br>
                booknumber:{book.asin}
              </Card.Text>
              <button
                variant="primary"
                onClick={(e) =>
                  this.props.changeSelectedMovieTitle(e.target.innerText)
                }
              >
                {book.asin}
              </button>
            </Card.Body>
          </Card>*/
          ))}
      </Container>
    );
  }
}

export default BookList;
