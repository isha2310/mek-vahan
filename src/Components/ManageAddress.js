import React,{ useState } from 'react'
import './manageAddress.css'
import 'antd/dist/antd.css'
import { Row, Col, Modal} from 'antd'
import UserLogo from '../assets/user.svg'
import Background from '../assets/background.png'
import Cards from './card'

const ManageAddress = () => {
    const [visible, setVisible] = useState(false)
    const [location, setLocation] = useState({
        venue: ' ',
        address: ' '  
    })
    const [addresses, setAddresses] = useState([])
    const [error, setError] = useState(false)

    const showModal = () => {
        setError(false)
        setVisible(true)
        setLocation({
            venue: '',
            address: ''
        })
    }
    
    const handleOk = e => {
        console.log(e);
        setVisible(false)
    }
    
    const handleCancel = e => {
        console.log(e);
        setVisible(false)
    }

    const handleChange = (e) => {
        setError(false)
        const value = e.target.value
        if(value.trim()===''){
            setLocation({
                ...location,
                [e.target.name]:''
            })
            return
        }
        setLocation({
            ...location,
            [e.target.name]: value
        })
    }
    
    const handleAdd = (e) => {
        if(location.address ==='' || location.venue ===''){
            setError(true)
            return
        }
        if(!error){
            e.preventDefault()
            setError(false)
            setAddresses(address => [...address, location])
            setVisible(false)
        }
    }

    return (
        <div className="user-page" >
        <Row >
                <Col span={4} className="user"  >
                    <div className="user-block">
                    <img src={UserLogo} alt="" className="user-logo" align="left"/>
                    Hi
                    <p>Mekvahan!</p>
                    </div>
                </Col>
                <Col span={19}  >
                   <Row className="addressBar">
                       <h1>&emsp; My Addresses</h1>
                       <button className="addAddress" align="right" onClick={showModal} >+Add Address</button>
                   </Row>
                </Col>
            </Row>
            <Modal
                title="Address"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={<button className="add-button" onClick={handleAdd} disabled={error} >Add</button>}
            >
                <label>Venue:  </label><input onChange={handleChange} value={location.venue} name="venue" autoFocus/><br/>
                <label>Address: </label><input onChange={handleChange} value={location.address} name="address"/><br/>
                {error && <p className="error-msg">Please add complete address!</p>}
            </Modal>
            <Row>
                <Col span={4} className="sidebar">
                    <div className="linkbox"><a className="links" href="/manageAddress">My Profile</a><br/></div>
                    <div className="linkbox"><a className="links" href="/manageAddress">Manage Address</a><br/></div>
                    <div className="linkbox"><a className="links" href="/manageAddress">Change Password</a><br/></div>
                </Col>
                <Col span={19} >
                    <Row className="content-area">
                        {addresses.length===0 && <img className="background" src={Background} alt=""></img>}
                        {addresses.length!==0 && 
                            addresses.map((add) => {
                                return <Cards key={addresses.indexOf(add)} venue={add.venue} address={add.address} />
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default ManageAddress