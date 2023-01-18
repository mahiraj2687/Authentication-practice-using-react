// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="button_container">
      <Link to="/login">
        <button className="button" type="button" onClick={onClickLogOut}>
          Logout
        </button>
      </Link>
    </div>
  )
}
export default withRouter(LogoutButton)
