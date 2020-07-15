import React, {useState} from 'react'
import { navigate } from '@reach/router'
import 'antd/dist/antd.css'
import { Row, Col} from 'antd'
import LoginAPI from '../apiCalls'
import Logo from '../assets/Home-logo.png'
import Cross from '../assets/cross.png'
import GoogleIcon from '../assets/google.svg'
import FbIcon from '../assets/fb.svg'

const Login = () => {
    const [user, setUser] = useState({
        mobile: ' ',
        password: ' '
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const value = e.target.value 
        if(!value){
            setUser({
                ...user,
                [e.target.name]:''
            })
        }
        setUser({
            ...user,
            [e.target.name]: value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault()
        console.log(user)
        LoginAPI(user).then((res) =>{
            console.log(res)
            if(res.status===true){
                navigate('/manageAddress')
            }
            else{
                setError('Phone number and password do not match.')
            }
        } ).catch((e) => {
            setError('Phone number and password do not match.')
        } )
    }
    return (
        <div className="login-card">
            <img src={Cross} alt="" align="right"/>
            <Row >
                <Col span={12} offset={4}>
                  <div className="logo-header">
                    <img src={Logo} alt="" className="logo" align="left"/>
                    <h1 className="title">MEKVAHAN</h1>
                    </div>
                </Col>
            </Row>
            <form className="login-form" >
                  <input type="text" onChange={ handleChange } name="mobile" placeholder="10 digit phone number" /><br/><br/>
                  <input type="password" onChange={ handleChange } name="password" placeholder= "Password"/><br/><br/>
                  <a className="forget-password" href="/"> Forgot password? </a><br/><br/><br/>
                  <button type="submit" className="login-button" onClick={ handleLogin }> Login </button><br/><br/>
                  <p>&emsp; &emsp; Don't have an account? <a className="signup" href="/">Sign Up now!</a></p>
                  {error && <p className="error-msg">{error}</p> }<br/>            
                  <span className="spanTag">&nbsp; Or &nbsp;  </span><br/>
                  <p className="options">&emsp;&emsp;&emsp;&emsp; continue with</p>

                  <div className="options" >
                    <img className="logo" src={FbIcon} alt=""/> <img className="logo" src={GoogleIcon} alt="" />
                  </div>
            </form>
        </div>
    )
}

export default Login