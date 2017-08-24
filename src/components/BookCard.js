import React from 'react'
import { Card, Icon, Image, Rating, Button, Item, Label } from 'semantic-ui-react'

class BookCard extends React.Component {

  handleAdd = () => {

    this.props.addBook(this.props.volumeInfo)
  }


  render() {
    const title = typeof this.props.volumeInfo.title != "undefined" ? this.props.volumeInfo.title : ""
    const authors = typeof this.props.volumeInfo.authors != "undefined" ? this.props.volumeInfo.authors : ""
    const description = typeof this.props.volumeInfo.description != "undefined" ? this.props.volumeInfo.description : ""
    const imageLinks = typeof this.props.volumeInfo.imageLinks != "undefined" ? this.props.volumeInfo.imageLinks : ""
    const averageRating = typeof this.props.volumeInfo.averageRating != "undefined" ? this.props.volumeInfo.averageRating : 0
    return (

        <Item>
          <Item.Image size="tiny" src={imageLinks.thumbnail} />

          <Item.Content>
            <Item.Header as='a'>{title}</Item.Header>
            <Item.Meta>
              <span className='cinema'>{authors[0]}</span>
            </Item.Meta>
            <Item.Description>{description.slice(0, 200) + "..."}</Item.Description>
            <Item.Extra>
            <Rating rating={averageRating} maxRating={5} />
            <Icon onClick={this.handleAdd} name="add circle"/>
            </Item.Extra>
          </Item.Content>
        </Item>


    )
  }
}
export default BookCard
