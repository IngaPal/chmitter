import { createContext } from 'react'

export const TwitterContext = createContext({
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    stats: {
        followers: 0,
        following: 0
    },
    changeAvatar: () => {},
    changeName: () => {},
    updateStats: () => {}
});