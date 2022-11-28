import { Component } from "react";
import { Container, Button, Card } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import BookList from "./BookList";
import CommentArea from "./CommentArea";
/*const MyBook = (prop) => (
    <Container id="display-book" className="row">
    
      
      <Card className="col-6 col-md-4 col-lg-3"key={prop.bookid.asin}>
      <Card.Img variant="top" src={prop.bookid.img} />
      <Card.Body>
        <Card.Title id="wrap">{prop.bookid.title}</Card.Title>
        <Card.Text>
        £{prop.bookid.price}
        </Card.Text>
        <Button variant="primary">Read me</Button>
      </Card.Body>
    </Card>
    
    </Container>
)*/
class MyBook extends Component {
  state = {
    selectedcard: false,
  };
  onselected = () => {
    if (this.state.selectedcard === true) {
      this.setState({
        selectedcard: false,
      });
    } else {
      this.setState({
        selectedcard: true,
      });
    }
  };

  render() {
    return (
      <Card key={this.props.book.asin} className="col-4 space">
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title id="wrap">{this.props.book.title}</Card.Title>
          <Card.Text>
            £{this.props.book.price}
            <br></br>
            booknumber:{this.props.book.asin}
          </Card.Text>
          <button
            variant="primary"
            onClick={(e) =>
              this.props.changeSelectedMovieTitle(
                e.target.innerText,
                this.props.search
              )
            }
          >
            {this.props.book.asin}
          </button>
        </Card.Body>
      </Card>
    );
  }
}
export default MyBook;
