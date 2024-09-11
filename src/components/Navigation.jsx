import React from 'react'
import Avatar from './Avatar'

const Navigation = ({user, changeAvatar}) => {
    return (
        <div className='nav'>
            <Avatar changeAvatar={changeAvatar} user={user} size='small' />
        </div>
    )
}

export default Navigation