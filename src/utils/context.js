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
    changeAvatar: function(url){
        console.log(url);
    },
    changeName: function(name){
        console.log(name);
    },
});