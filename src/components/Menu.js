import React from 'react'
import { Menu, Input, Button, Label } from 'semantic-ui-react'

const CustomMenu = ({ handleSearch, handleSearchInputChange, booksInCart }) => {
  return (
    <Menu secondary>
      <Menu.Item name='home' >

      </Menu.Item>
      <Menu.Item name='messages' />
      <Menu.Item name='my books' />
      { booksInCart > 0 ? <Menu.Item name='my books'><Label color='teal'>{booksInCart}</Label></Menu.Item> : null}

      <Menu.Menu position='right'>
        <Menu.Item>
          <Input
              label={<Button onClick={handleSearch} content="Search" />}
              onChange={handleSearchInputChange}
              labelPosition='right'
                placeholder='Search books'
            />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default CustomMenu
