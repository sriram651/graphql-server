export const typeDefs = `#graphql
    type Game {
        id: ID!
        title: String!
        platform: [String!]!
        reviews: [Review!]
        createdAt: String!
    }
    type Review {
        id: ID!
        rating: Float!
        content: String!
        game: Game
        user: User
        createdAt: String!
    }
    type User {
        id: ID!
        userName: String!
        email: String!
        createdAt: String!
    }
    type UserResponse {
        id: ID!
        userName: String!
        email: String!
        createdAt: String!
        token: String!
    }

    enum Platform {
        PC
        PS4
        PS5
        XBOX
        XBOX360
        XBOXONE
        NINTENDO
        SWITCH
        MOBILE
    }

    type Query {
        reviews: [Review]
        reviewById(id: ID!): Review
        getAllGames(search: String, platform: [Platform]): [Game]
        getGameById(id: ID!): Game
        getReviewsByUser: [Review]
    }

    type Mutation {
        registerNewUser(newUser: NewUserInput!): UserResponse
        loginUser(userLogin: UserLoginInput!): UserResponse
        addGame(newGame: NewGameInput!): Game
        updateGame(id: ID!, editGame: EditGameInput!): Game
        deleteGame(id: ID!): [Game]
        addReview(gameId: ID! review: NewReviewInput!): Review
        updateReview(id: ID!, review: UpdateReviewInput!): Review
    }

    input NewUserInput {
        userName: String!
        email: String!
        password: String!
    }

    input NewGameInput {
        title: String!
        platform: [Platform!]!
    }

    input EditGameInput {
        title: String
        platform: [Platform!]
    }

    input NewReviewInput {
        rating: Float!
        content: String!
    }

    input UpdateReviewInput {
        rating: Float
        content: String
    }

    input UserLoginInput {
        email: String!
        password: String!
    }
`;