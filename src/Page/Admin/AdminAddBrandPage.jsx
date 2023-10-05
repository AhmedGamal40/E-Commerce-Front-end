import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { AdminSideBar } from '../../Components/Admin/AdminSideBar'
import { AdminAddBrand } from '../../Components/Admin/AdminAddBrands'

export const AdminAddBrandPage = () => {
  return (
    <Container style={{minHeight:'610px'}}>
        <Row className='py-3'>
            <Col  sm='3' xs='12'>
                <AdminSideBar/>
            </Col>

            <Col   sm='9' xs='12' >
              <AdminAddBrand/>
            </Col>
        </Row>
    </Container>
  )
}
