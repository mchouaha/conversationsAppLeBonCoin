import { FC, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { useQuery } from '@apollo/client'
import { GET_MESSAGES } from '../../../api/graphql/queries'
import { fetchConversation } from '../../../api'

import { Conversation } from '../../../types/conversation'

import styles from '../../../styles/Card.module.css'

import { format } from 'date-fns'


type cardProps = {
    conversation: Conversation
}

const ConversationCard: FC<cardProps> = ({conversation}) => {

    const router = useRouter()

    const {data, refetch} = useQuery(GET_MESSAGES, {
        variables: {func: "find:last", key:"conversationId", value: conversation.id.toString()},
    });

    const goToMessages = () => router.push({ pathname: 'list-messages/[conversation]', query: { 
        conversation: JSON.stringify(conversation), 
    }}, 'list-messages')
    
    useEffect(()=>{
        refetch({ func: "find:last", key:"conversationId", value: conversation.id.toString() })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [conversation])

    return(
        <div className={styles.card} onClick={goToMessages} style={{backgroundColor: conversation.id%2 !== 0 ? `rgb(237 110 37 / 42%)` : '#fff'}}>
            <div className={styles['logo-container']}>
                <Image
                    layout='responsive'
                    height={512}
                    width={512}
                    alt={'avatar'}
                    src={fetchConversation(conversation.id)}
                />
            </div>

            <div className={styles['main-container']}>

                <div className={styles['info']}>
                    <span>
                        Created by: <b>{conversation && conversation.senderNickname}</b>
                    </span>
                    <p>
                        Last message: <i>{ data && (data.messages[0].body).slice(0,50)} ...</i>                 
                    </p>
                </div>

                <div className={styles['date']}>
                    { data && <span> 
                        Last time message: { format(new Date(data.messages[0].timestamp*1000), 'd MMMM yyyy') } 
                    </span> }
                </div>
            </div>
        </div>
    )
}

export default ConversationCard