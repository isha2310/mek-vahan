import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd'
import Login from './Components/Login'
import HomeCover from './assets/Homepage.png'
import './Home.css'

const Home = () => {
    return (
        <div >
            
            <Row>
                <Col sm={24} xs={24}  md={12} lg={12} xl={12}>
                    <div >
                        <img src={HomeCover} alt="" className="homecover" />
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <Login />
                </Col>
            </Row> 

        </div>       
    )
}

export default Home