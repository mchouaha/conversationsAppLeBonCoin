import { gql } from '@apollo/client';

export const ADD_MESSAGE = gql`
  mutation AddMessage(
        $conversationId: Int,
        $authorId: Int, 
        $timestamp: Int,
        $body: String 
    ) { messages(
            params: {
                conversationId: $conversationId, 
                authorId: $authorId,
                timestamp: $timestamp,
                body: $body
            }
        ) {
            id
            conversationId
            authorId
            timestamp
            body
        }
    }
`;