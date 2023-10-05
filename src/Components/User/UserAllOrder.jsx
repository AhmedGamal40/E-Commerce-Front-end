import React from 'react'
import { Row } from 'react-bootstrap'
import { UserOrderItem } from './UserAllOrderItem'

export const UserAllOrder = () => {
  return (
    <div>
        <div className='admin-content-text'>أهلا أحمد جمال</div>
        <Row className='justify-content-between'>
            <UserOrderItem/>
            <UserOrderItem/>
        </Row>
    </div>
  )
}
