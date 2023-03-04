import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../../../components/molecules/Nav/Navbar';
import { AppContext } from '../../../context/AppContext';
import fetchData from '../../../helpers/fetchHelpers';

const Login = () => {

  const { setUser } = useContext(AppContext);

  const [ userInfo, setUserInfo] = useState({
    'username': 'cramirez',
    'clave': 'PrismaD2022'
  });

  const  {username, clave} = userInfo;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const sendSubmit = async (e) => {
    e.preventDefault();  
    const res = await fetchData( 'login', userInfo, 'post' )
    setUser(res.data);
  }
  
  return (
    <section className='h-100vh d-flex flex-column'>
      <Navbar/>
      <section className='d-flex align-items-center h-100vh'>
        <Form className='w-50 m-auto sm-w-90' onSubmit={sendSubmit}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-600">User</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter user"  
              name="username" 
              value={username}
              onChange={handleInputChange}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font-600">Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password"  
              onChange={handleInputChange}
              name="clave" 
              value={clave}
            />
            </Form.Group>
            <Button className="font-600 bg-primary" type="submit">
              Login
            </Button>
        </Form>
      </section>
    </section>
  )
}

export default Login