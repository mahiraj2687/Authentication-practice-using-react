// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => {
  let n
  console.log(n)
  return (
    <div className="home_container">
      <Header />
      <h1 className="heading">Home Route</h1>
      <LogoutButton />
    </div>
  )
}

export default Home
