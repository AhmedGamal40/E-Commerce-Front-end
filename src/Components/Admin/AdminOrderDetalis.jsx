import React from 'react'
import { CartItem } from '../Cart/CartItem'
import { Col, Row } from 'react-bootstrap'
import { AdminDetalisUserOrder } from './AdminDetalisUserOrder'

export const AdminOrderDetalis = () => {
  return (
    <div>
    <div className='admin-content-text'> تفاصيل المنتج #550569</div>
    <Row className='d-flex justify-content-center'>
            <Col xs='12' md='12'>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </Col>
            <Col xs='12' md='12'>
                <AdminDetalisUserOrder/>
            </Col>
        </Row>

</div>
  )
}
