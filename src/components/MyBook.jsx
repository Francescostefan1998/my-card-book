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
      <div className="col-6 col-md-4 col-lg-3 mt-3 hover-this">
        <Card key={this.props.bookid.asin}>
          <Card.Img variant="top" src={this.props.bookid.img} />
          <Card.Body>
            <Card.Title id="wrap">{this.props.bookid.title}</Card.Title>
            <Card.Text>
              £{this.props.bookid.price}
              <br></br>
              booknumber:{this.props.bookid.asin}
            </Card.Text>
            <Button
              variant="primary"
              onClick={(e) => this.onselected(e.target)}
            >
              Read me
            </Button>
          </Card.Body>
        </Card>
        {this.state.selectedcard && (
          <CommentArea elementid={this.props.bookid.asin} />
        )}
      </div>
    );
  }
}
export default MyBook;
