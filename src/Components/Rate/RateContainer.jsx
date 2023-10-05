import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rate from '../../Image/rate.png'
import { RateItem } from './RateItem'
import { RatePost } from './RatePost'
import { Pagination } from '../Utils/Pagination'

export const RateContainer = () => {
  return (
    <Container className='rate-container'>
        <Row>
        <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">4.5</div>
                    <div className="rate-count d-inline p-1 pt-2">({`160  تقيم`})</div>
        </Col>
        </Row>
        
        <RatePost/>

        <RateItem/>
        <RateItem/>
        <RateItem/>
        <RateItem/>
         <Pagination/>
    </Container>
  )
}
