import React from 'react'
import { Card, Image, Icon, Rating } from 'semantic-ui-react'



const BookDetail = (props) => {
  const title = typeof props.title != "undefined" ? props.title : ""
  const authors = typeof props.authors != "undefined" ? props.authors : ""
  const description = typeof props.description != "undefined" ? props.description : ""
  const imageLinks = typeof props.imageLinks != "undefined" ? props.imageLinks : ""
  const averageRating = typeof props.averageRating != "undefined" ? props.averageRating : 0
    const handleAddToCart = () => {
      props.addToCart(props)
    }

    return (
      <Card>
        <Image src={imageLinks.thumbnail} />
        <Card.Content>
          <Card.Header>
            {title}
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {authors[0]}
            </span>
          </Card.Meta>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Rating rating={averageRating} maxRating={5} />
          { props.inCart ? <Icon name='in cart' size='big' /> :<Icon name='add to cart' size='big' onClick={handleAddToCart} />  }

        </Card.Content>
      </Card>
    )
}

export default BookDetail
