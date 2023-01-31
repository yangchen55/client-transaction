import React from 'react'
import Header from './Header'
import Container from "react-bootstrap/esm/Container"

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <Container className='mt-5' style={{ minHeight: "73vh" }}>
        {children}
      </Container>

      <footer className='text-center footer text-light p-5 mt-5'>
        &copy; copyright: All right reserved 2022
      </footer>
    </div>
  )
}

export default Layout;