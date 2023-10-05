import React from 'react'
import { AdminAddProducts } from '../../Components/Admin/AdminAddProducts'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminSideBar } from '../../Components/Admin/AdminSideBar'

export const AdminAddProductsPage = () => {
  return (
    <Container style={{minHeight:'610px'}}>
        <Row className='py-3'>
            <Col  sm='3' xs='12'>
                <AdminSideBar/>
            </Col>

            <Col   sm='9' xs='12' >
            <AdminAddProducts/>
            </Col>
        </Row>
    </Container>
  )
}
