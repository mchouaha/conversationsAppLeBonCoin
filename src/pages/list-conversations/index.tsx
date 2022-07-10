import { FC } from 'react'

import { apolloClient } from '../../api/apolloClient'
import { GET_CONVERSATIONS } from '../../api/graphql/queries'

import ConversationCard from '../../components/Cards/ConversationCard'

import { Conversation } from '../../types/conversation'
import Layout from '../../components/Layout'

import styles from '../../styles/Card.module.css'

type ConversationsProps = {
  conversations: Conversation[]
}

const ListConversations: FC<ConversationsProps> = ({conversations}) => {

  return(
    <Layout title='Conversations - Leboncoin'>

            <div className={styles.header}>
                <div>
                  <span>Currently you have {conversations.length} conversations</span>
                </div>
            </div>

      <div className={styles['list-conversations']}>

        { conversations.map((conversation: Conversation) => 
            <ConversationCard conversation={conversation} key={conversation.id}/> 
        )}
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {

  const response = (await apolloClient.query({ query: GET_CONVERSATIONS })).data
  
  return {
    props: {
      conversations: response.conversations,
    }
  }
}

export default ListConversations