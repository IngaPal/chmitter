import React, { useContext } from 'react'
import Avatar from './Avatar'
import { TwitterContext } from '../utils/context'

const Stats = () => {
    const { user, stats, updateStats } = useContext(TwitterContext)

    const handleStatsClick = (statType, isIncrement) => (e) => {
        e.preventDefault() 
        updateStats(statType, isIncrement)
    }

    return (
        <div className='user-stats'>
            <div>
                <Avatar />
                {user.name}
            </div>
            <div className='stats'>
                <div
                    onClick={handleStatsClick('followers', true)}
                    onContextMenu={handleStatsClick('followers', false)}
                    style={{cursor: 'pointer'}}
                >
                    Followers: {stats.followers}
                </div>
                <div
                    onClick={handleStatsClick('following', true)}
                    onContextMenu={handleStatsClick('following', false)}
                    style={{cursor: 'pointer'}}
                >
                    Following: {stats.following}
                </div>
            </div>
        </div>
    )
}

export default Stats