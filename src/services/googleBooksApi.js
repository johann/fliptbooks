class GoogleBooks {
  static search(book) {
    const book_encoded = encodeURIComponent(book)
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=${book_encoded}&maxResults=40`)
      .then(res => res.json())
  }

  static getCategory(category) {
    const category_encoded = encodeURIComponent(category)
    return fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${category_encoded}&maxResults=40`)
      .then(res => res.json())
  }
}

export default GoogleBooks
