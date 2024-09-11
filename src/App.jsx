import { useState } from 'react'
import './App.css'
import Body from './components/Body'
import Navigation from './components/Navigation'

function App() {
  const [user, setUser] = useState({
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
  })

  const [stats, setStats] = useState({
    followers: 10,
    following: 100
  })

  const changeAvatar = url => {
    setUser(prevState => ({...prevState, avatar: url || prevState.avatar}))
  }


  return (
    <div className='app'>
      <Navigation changeAvatar={changeAvatar} user={user} />
      <Body changeAvatar={changeAvatar} user={user} stats={stats} />
    </div>
  )
}

export default App
