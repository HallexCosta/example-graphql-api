<h1 align="center">
    Example GraphQL API - TypeGraphQL
</h1>

### Getting Starting

- Testing GraphQL with database

  1. Cloning project

     ```bash
     git clone --branch type-graphql git@github.com:HallexCosta/example-graphql-api.git
     ```

  2. Install dependencies

     ```bash
     yarn
     ```

  3. Starting API

     > If have returned an error is because the GraphQL API not started with successfully

     ```graphql
     yarn start
     ```

## Requests

List All Books

```graphql
query {
  books {
    id
    title
    author
    isPublished
  }
}
```

Create an Book

```graphql
mutation {
  createBook(
    data: { title: "Clean Architecture", author: "Robert C. Martin" }
  ) {
    id
    title
    author
    isPublished
  }
}
```

List Book By Id

```graphql
query {
  book(id: "1") {
    id
    title
    author
    isPublished
  }
}
```

Update Book By Id

```graphql
mutation {
  updateBook(id: "1", data: { isPublished: true }) {
    id
    title
    author
    isPublished
  }
}
```

Delete Book By Id

```graphql
mutation {
  deleteBook(id: "3")
}
```

References:  
[How build GraphQL API TypeGraphQL TypeORM](https://blog.logrocket.com/how-build-graphql-api-typegraphql-typeorm)
