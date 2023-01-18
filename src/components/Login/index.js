// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter, Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const jwtToken = Cookies.get('jwt_token')

  const setJwtToken = token => {
    const {history} = props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }
  const onClickLogIn = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    console.log(data)

    if (response.ok === true) {
      setJwtToken(data.jwt_token)
    }
  }

  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login_container">
      <h1 className="heading">Please Login</h1>
      <div className="button_container">
        <button className="button" type="button" onClick={onClickLogIn}>
          Login with Sample Creds
        </button>
      </div>
    </div>
  )
}

export default withRouter(Login)
