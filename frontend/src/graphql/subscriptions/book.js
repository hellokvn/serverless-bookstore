export const onCreatedBook = `
  subscription OnCreatedBook($author: String!) {
    onCreatedBook(author: $author) {
        author
    }
  }
`;

// triggered by

// mutation MyMutation {
//   createBook(newBook: {author: "test", title: "test", price: 2}) {
//     bookId
//     author
//   }
// }
