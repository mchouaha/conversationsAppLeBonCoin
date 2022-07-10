import Batman from '../assets/batman.webp'
import Garcon from '../assets/garcon.webp'
import Scientifique from '../assets/scientifique.webp'
import Femme from '../assets/femme.webp'
import User from '../assets/user.webp'

import Vine from '../assets/vine.webp'
import Whatsapp from '../assets/whatsapp.webp'
import Slideshare from '../assets/slideshare.webp'
import Dribble from '../assets/dribbble.webp'
import Twitter from '../assets/twitter.webp'

export const fetchAvatar = (id: number) => {
    switch(id) {
        case 1:
            return Batman
        case 2:
            return Scientifique
        case 3:
            return Garcon
        case 4:
            return Femme
        case 5:
            return User
        default:
            return User
    }
}


export const fetchConversation = (id: number) => {
    switch(id) {
        case 1:
            return Whatsapp
        case 2:
            return Vine
        case 3:
            return Slideshare
        case 4:
            return Dribble
        case 5:
            return Twitter
        default:
            return User
    }
}

