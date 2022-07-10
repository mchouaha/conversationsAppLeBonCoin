import { FC, useEffect, useRef, useState } from 'react'
import { NextPageContext } from 'next'

import { format } from 'date-fns'

import { useMutation, useQuery } from '@apollo/client'

import { GET_MESSAGES } from '../../../api/graphql/queries'
import { ADD_MESSAGE } from '../../../api/graphql/mutations'

import CustomButton from '../../../components/Inputs/Button'
import CustomTextField from '../../../components/Inputs/TextField'
import Layout from '../../../components/Layout'
import MessageCard from '../../../components/Cards/MessageCard'

import { Conversation } from '../../../types/conversation'
import { Message } from '../../../types/message'

import styles from '../../../styles/Card.module.css'

import { loggedUserId } from '../../_app'


type MessagesProps = {
    conversation: Conversation
}

const ListMessages: FC<MessagesProps> = ({conversation}) => {
  
    const bottomRef = useRef(null)

    const [messages, setMessages] = useState<Message[]>()
    const [textField, setTextField] = useState<string>('')

    const [addNewMessage] = useMutation(ADD_MESSAGE)
    
    const {data, refetch} = useQuery(GET_MESSAGES, {
        variables: {func: "find", key:"conversationId", value: conversation.id.toString()}
    })
    
    const onSubmit = () => {
        if(textField) {
            const newMessage: Message = {
                conversationId: conversation.id,
                authorId: loggedUserId,
                timestamp: Math.floor(Date.now()/1000),
                body: textField
            }

            addNewMessage({variables: newMessage}).then(((resp) => setMessages([...messages, resp.data.messages]) ))
        }
    }

    useEffect( () => {
        if(data) 
            setMessages(data.messages)
    }, [data])

    useEffect( () => { 
        refetch({ func: "find", key:"conversationId", value: conversation.id.toString() })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [conversation])
    

    useEffect( () => { 
        if (textField)
            bottomRef.current?.scrollIntoView({behavior: 'smooth'});
        else
            bottomRef.current?.scrollIntoView({behavior: 'instant'});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [messages])
    
    return(
        <Layout title='Conversations - Leboncoin'>
            <div className={styles.header}>
                <div>
                     {conversation.senderNickname} and {conversation.recipientNickname}
                </div>

                <div>
                    Last time message: { messages && format(new Date(messages.at(-1).timestamp*1000), 'd MMMM yyyy HH:mm') }
                </div>
            </div>
            
            <div className={styles['list-messages']}>
                { messages && messages.map((message: Message) => 
                        <MessageCard 
                            key={message.id}
                            message={message} 
                            isRecipient={ message.authorId == conversation.recipientId}
                        /> 
                )}

                <div ref={bottomRef}></div>
            </div>

            <div className={styles['input-container']}>
                <CustomTextField onChange={setTextField} value={textField}/>
                <CustomButton onClick={onSubmit}/>
            </div>
            
        </Layout>
    )
}

export async function getServerSideProps(context : NextPageContext) {
    
    const str = context.query.conversation as string
    const conversation = JSON.parse(str) as Conversation

    return {
        props: {
            conversation: conversation
        }
    }
}

export default ListMessages