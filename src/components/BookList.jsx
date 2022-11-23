import { Component } from "react"
import { Container, Button, Card } from "react-bootstrap"
import fantasy from '../books/fantasy.json'
import MyBook from "./MyBook"
class BookList extends Component{
    state = {
        selectedBook: null, // this is the INITIAL VALUE of selectedPasta in the State
      }
    render(){
    
    return ( 
        <Container id="display-book" className="row">
        
        {fantasy.map((book) => (
            
        <MyBook bookid={book.asin}/>
) )}
    </Container>)

    }}
    export default BookList