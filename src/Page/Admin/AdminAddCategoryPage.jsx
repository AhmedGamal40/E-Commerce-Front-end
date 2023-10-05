import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminSideBar } from '../../Components/Admin/AdminSideBar'
import { AdminAddCategory } from '../../Components/Admin/AdminAddCategory'

export const AdminAddCategoryPage = () => {
  return (
    <Container style={{minHeight:'610px'}}>
    <Row className='py-3'>
        <Col  sm='3' xs='12'>
            <AdminSideBar/>
        </Col>

        <Col   sm='9' xs='12' >
            <AdminAddCategory/>
        </Col>
    </Row>
</Container>
  )
}
