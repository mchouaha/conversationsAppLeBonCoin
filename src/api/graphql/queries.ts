
import { gql } from '@apollo/client'

export const GET_MESSAGES = gql`
    query GetMessages ($func: String, $key: String, $value: String) {
        messages (params: {func: $func, key: $key, value: $value}) {
            id
            conversationId
            timestamp
            authorId
            body
        }
    }
`

export const GET_USERS = gql`
    query GetUsers ($func: String, $key: String, $value: String) {
        users (params: {func: $func, key: $key, value: $value}) {
            id
            nickname
            token
            avatar
        }
    }
`

export const GET_CONVERSATIONS = gql`
    query GetConversation ($func: String, $key: String, $value: String) {
        conversations (params: {func: $func, key: $key, value: $value}) {
            id
            recipientId
            recipientNickname
            senderId
            senderNickname
        }
    }
`