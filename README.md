<h1 align="center">
    Example GraphQL API - Apollo Server
</h1>

### Getting Starting

- Testing GraphQL with database

  1. Cloning project

     ```bash
     git clone --branch apollo-server git@github.com:HallexCosta/example-graphql-api.git
     ```

  2. Install dependencies

     ```bash
     yarn
     ```

  3. Configure environment variables

     - creates the file `.env`

       ```bash
       cp .env-example .env
       ```

     - configure file `.env` (should work normally, if I not deletes the animes-united-cluster and animes-united-test)

       ```bash
       MONGODB_URI=YOUR_MONGODB_URI
       ```

  4. Starting API

     > If have returned an error is because the GraphQL API not started with successfully

     ```graphql
     yarn start
     ```

## Requests

List All Users

```graphql
query {
  users {
    id
    name
    email
    isPremium
  }
}
```

List User by Id

```graphql
query {
  user(id: "1") {
    id
    name
    email
    isPremium
  }
}
```

Create an User

```graphql
mutation {
  createUser(name: "Example", email: "teste@example.com") {
    id
    name
    email
    isPremium
  }
}
```

List User By Id

```graphql
query {
  user(id: "1") {
    id
    name
    email
    isPremium
  }
}
```

Update User By Id

```graphql
mutation {
  updateUser(id: "1", { isPremium: true }) {
    id
    name
    email
    isPremium
  }
}
```

Delete User By Id

```graphql
mutation {
  deleteUser(id: "1")
}
```
