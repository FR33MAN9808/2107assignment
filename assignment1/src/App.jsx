import './App.css'
import UserCard from './components/UserCard'
import data from './MOCK_DATA'

function App() {
  return (
    <div>
      <UserCard data = {data} />
    </div>
  )
}

export default App
