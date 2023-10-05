import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminSideBar } from '../../Components/Admin/AdminSideBar'
import { AdminAllProducts } from '../../Components/Admin/AdminAllProducts'
import { Pagination } from '../../Components/Utils/Pagination'

export const AdminAllProductPage = () => {
  return (
    <Container style={{minHeight:'610px'}}>
        <Row className='py-3'>
            <Col sm='3' xs='12' md='3'>
                <AdminSideBar/>
            </Col>

            <Col sm='9' xs='12'  md='9'>
                <AdminAllProducts/>
            </Col>
        </Row>
        <Row>
            <Pagination/>
        </Row>
    </Container>
  )
}
