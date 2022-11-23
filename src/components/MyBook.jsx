import { Component } from "react"
import { Container, Button, Card } from "react-bootstrap"
import fantasy from '../books/fantasy.json'
import BookList from "./BookList"

const MyBook = (prop) => (
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
)

    export default MyBook