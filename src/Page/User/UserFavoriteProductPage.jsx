import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { UserSideBar } from '../../Components/User/UserSideBar'
import { UserFavoriteProducts } from '../../Components/User/UserFavoriteProducts'

export const UserFavoriteProductPage = () => {
  return (
    <Container style={{minHeight:'610px'}}>
        <Row className='py-3'>
            <Col  sm='3' xs='12'>
                <UserSideBar/>
            </Col>

            <Col  sm='9' xs='12' >
              <UserFavoriteProducts/>
            </Col>
        </Row>
    </Container>
  )
}
