import { Component } from "react";
import { Container, Button, Card, Form, Spinner } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import MyBook from "./MyBook";

class FilterBookList extends Component {
  state = {
    search: "",
    isLoading: true,
  };
  onChangeHandler = (value, fieldToSet) => {
    this.setState({
      search: this.state.search, // this creates a copy of reservation!
      [fieldToSet]: value,
    });
  };

  changestatus = () => {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1000);

    console.log("nn");
  };
  componentDidMount() {
    this.changestatus();
    console.log("did");
  }
  render() {
    return (
      <div>
        {this.state.isLoading && (
          <Spinner
            animation="border"
            role="status"
            className="custom-spinner-color"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
        <Form.Control
          type="text"
          value={this.state.search}
          onChange={(e) => this.onChangeHandler(e.target.value, "search")}
        />

        <div>
          {fantasy
            .filter((book) => book.title.includes(this.state.search))
            .map((filteredPerson) => (
              <li>
                <Container id="display-book" className="row">
                  <Card
                    className="col-6 col-md-4 col-lg-3"
                    key={filteredPerson.asin}
                  >
                    <Card.Img variant="top" src={filteredPerson.img} />
                    <Card.Body>
                      <Card.Title id="wrap">{filteredPerson.title}</Card.Title>
                      <Card.Text>£{filteredPerson.price}</Card.Text>
                      <Button variant="primary">Read me</Button>
                    </Card.Body>
                  </Card>
                </Container>
                {filteredPerson.title}
              </li>
            ))}
        </div>
      </div>
    );
  }
}

export default FilterBookList;
