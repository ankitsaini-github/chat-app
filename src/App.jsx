import './App.css'

import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'

function App() {
  
  return (
      <ChatEngine
        height='100vh'
        projectID='4ee0b371-9c6a-4199-9721-09a2a3f29dad'
        userName='test@test'
        userSecret='123123'
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
  )
}

export default App
