import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminSideBar } from '../../Components/Admin/AdminSideBar'
import { Pagination } from '../../Components/Utils/Pagination'
import { AdminAllOrders } from '../../Components/Admin/AdminAllOrders'

export const AdminAllOrderPage = () => {
  return (
    <Container style={{minHeight:'610px'}}>
        <Row className='py-3'>
            <Col  sm='3' xs='12'>
                <AdminSideBar/>
            </Col>

            <Col  sm='9' xs='12' >
                <AdminAllOrders/>
            </Col>
        </Row>
        <Row >
            <Pagination/>
        </Row>
    </Container>
  )
}
