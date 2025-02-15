import gql from "graphql-tag";

export default gql`
  type Source {
    source_id: ID!
    book: Book
    pageNumber: Int
  }

  type Book {
    book_id: ID!
    book: String!
    author: String
    publisher: String
    year: Int
    isbn: String
    version: String
  }
`;
