import React from 'react'
import { AdminAllProductCard } from './AdminAllProductCard'
import { Row } from 'react-bootstrap'

export const AdminAllProducts = () => {
  return (
    <div>
        <div className='admin-content-text'>اداره جميع المنتجات</div>
        <Row className='justify-content-start'>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
            <AdminAllProductCard/>
        </Row>
    </div>
  )
}
