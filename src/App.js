import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './services/authorize'
import { connect } from 'react-redux'
import { FormGroup, FormControl } from 'react-bootstrap'
import 'semantic-ui-css/semantic.min.css'
import { List } from 'semantic-ui-react'
import { Icon, Grid, Item, Label } from 'semantic-ui-react'
import Menu from './components/Menu'
import GoogleBooks from "./services/googleBooksApi"
import BookCard from './components/BookCard'
import BookList from './components/BookList'
import BookDetail from './components/BookDetail'

class App extends Component {


  state = {
    searchBook:"suspense",
    books: [],
    selectedBook:{},
    booksInCart: []

  }

  addBook = (book) => {
    this.setState({
      selectedBook: book
    })
  }

  componentDidMount() {
    GoogleBooks.getCategory(this.state.searchBook)
      .then((json) => this.setState({ books: json.items }))
  }

  handleSearch = () => {
    GoogleBooks.search(this.state.searchBook)
      .then((json) => this.setState({ books: json.items }))
  }

  handleSearchInputChange = (e) => {

    this.setState({
      searchBook: e.target.value
    })
  }

  handleAddToCart = (book) => {
    this.setState({
      booksInCart: [...this.state.booksInCart, book]
    })
  }


  render() {

    console.log(this.state.booksInCart.length)
    return (
      <div>
        <Menu handleSearch={this.handleSearch} handleSearchInputChange={this.handleSearchInputChange} booksInCart={this.state.booksInCart.length}/>
        <Grid>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={9}>
            <h3>{this.state.searchBook.toUpperCase()}</h3>
            <BookList books={this.state.books} addBook={this.addBook}/>
          </Grid.Column>
          <Grid.Column width={6}>
            <Grid.Row>
              {this.state.selectedBook.title ? <BookDetail inCart={this.state.booksInCart.filter((e) => e.title == this.state.selectedBook).length > 0} {...this.state.selectedBook} addToCart={this.handleAddToCart}/> : null}
            </Grid.Row>
          </Grid.Column>
        </Grid>

        <div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log(state)
  return { todos: state.todos}
}



const mapDispatchToProps = (dispatch) => {
  console.log(dispatch)
  return {}

}

export default connect(mapStateToProps, mapDispatchToProps)(App);
