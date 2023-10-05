import React from 'react'
import { Container } from 'react-bootstrap'
import { CheckoutPayment } from '../../Components/CheckOut/CheckoutPayment'

export const CheckOutPage = () => {
  return (
    <Container style={{minHeight:'670px'}}>
        <CheckoutPayment/>
    </Container>
  )
}
