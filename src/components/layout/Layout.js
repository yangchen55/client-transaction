import React from 'react'
import Header from './Header'
import Container from "react-bootstrap/esm/Container"

const Layout = ({children}) => {
  return (
    <div className='layout'>
        <Header/>
        <Container className='mt-5' style={{minHeight:"73vh"}}> 
        {children}
        </Container>

<footer className='text-center bg-dark text-light p-5 mt-5'>
  &copy; all right reserved 2022
</footer>
    </div>
  )
}

export default Layout;