import React from 'react'
import { Row } from 'react-bootstrap'
import { AdminAllOrderCard } from './AdminAllOrderCard'

export const AdminAllOrders = () => {
  return (
    <div>
        <div className='admin-content-text'>اداره جميع الطلبات</div>
        <Row className='justify-content-start'>
            <AdminAllOrderCard/>
            <AdminAllOrderCard/>
            <AdminAllOrderCard/>
            <AdminAllOrderCard/>
            <AdminAllOrderCard/>
        </Row>
    </div>
  )
}
