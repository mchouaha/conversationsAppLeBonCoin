import {FC, useEffect, useState } from 'react'
import Image from 'next/image'

import { Message } from '../../../types/message'

import styles from '../../../styles/Card.module.css'
import { fetchAvatar } from '../../../api'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import { GET_USERS } from '../../../api/graphql/queries'
import { useQuery } from '@apollo/client'


interface cardProps {
    message: Message
    isRecipient: boolean
}
  
const MessageCard: FC<cardProps> = ({message, isRecipient}) => {

    const router = useRouter()

    const [nickname, setNickname] = useState('')

    const {data, error, loading} = useQuery(GET_USERS, {
        variables: {func: "find", key:"id", value: message.authorId.toString()}
    })
    
    useEffect(() => {
        if(data)
            setNickname(data.users[0].nickname)
    },[data])

    return(
        <div key={message.id} 
            className={styles.card} 
            style={{ 
                width: '400px', 
                backgroundColor: isRecipient ? 'rgb(237 110 37 / 42%)' : '#fff',
                marginRight: isRecipient ? '4em' : '1em'
            }}>

            <div className={styles['logo-container']}>
                <Image
                    layout='responsive'
                    height={512}
                    width={512}
                    alt={'avatar'}
                    src={fetchAvatar(message.authorId)}
                />
            </div>

            <div className={styles['main-container']}>

                <div className={styles['info']}>
                    <span onClick={ () => router.push('/conversation-list')}>
                        Send from: <b>{nickname}</b> 
                    </span>
                    <p>
                        Message: <i>{message && message.body}</i>
                    </p>
                </div>

                <div className={styles['date']}>
                    { message && <span> 
                        Sent the: { format(new Date(message.timestamp*1000), 'd MMMM yyyy HH:mm') } 
                    </span> }
                </div>
            </div>
        </div>
    )
}

export default MessageCard