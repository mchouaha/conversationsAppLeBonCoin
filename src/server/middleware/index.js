const path = require('path')

const db = require(`${path.dirname(__filename)}/../db.json`)

const { ApolloServer, gql } = require('apollo-server')

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

  input Inputs {
    key: String
    value: String
    func: String
  }

  input MessageInputs {
    id: Int
    conversationId: Int
    authorId: Int
    timestamp: Int
    body: String
  }

  type Conversation {
    id: Int
    recipientId: String
    recipientNickname: String
    senderId: Int
    senderNickname: String
  }

  type Message { 
    id: Int
    conversationId: Int
    authorId: Int
    timestamp: Int
    body: String
  }

  type User { 
    id: Int
    nickname: String
    token: String
    avatar: String
  }

  type Query {
    conversations(params: Inputs): [Conversation]
  }

  type Query {
    messages(params: Inputs): [Message]
  }

  type Mutation {
    messages(params: MessageInputs) : Message
  }

  type Query {
    users(params: Inputs): [User]
  }

`;

const filters  = (params={}, collection) => {

  switch(params.func) {
    case 'sort': 
      const sortResult = (db[collection]).sort((a,b) => b[params.key.toString()] - a[params.key.toString()])
      return (Object.values(sortResult))

    case 'find': 
      const filterResult = (db[collection]).filter((data) => data[params.key] == params.value)  
      return (Object.values(filterResult))
    
    case 'find:last': 
      const findLastResult = (db[collection]).filter((data) => data[params.key] == params.value) 
      return ([findLastResult.at(-1)])

    default:
      return db[collection]
  }  
}

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    conversations: (parent, args, context, info) => {
      const {params} = args 
      return filters(params, 'conversations')
    },
    messages: (parent, args, context, info) => {
      const {params} = args 

      return filters(params, 'messages')
    },
    users: (parent, args, context, info) => {
      const {params} = args 
      return filters(params, 'users')
    } 
  },
  Mutation: {
    messages: (parent, args, context, info) => {
      const {params} = args 

      const newMsg = {
        id: db.messages.length+1,
        conversationId: params.conversationId,
        authorId: params.authorId,
        timestamp: Math.floor(params.timestamp),
        body: params.body
      }

      db.messages.push(newMsg)

      return db.messages.at(-1)
    },
  }
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
