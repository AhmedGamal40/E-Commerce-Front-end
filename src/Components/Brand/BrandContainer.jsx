import React from 'react'
import { Container, Row } from 'react-bootstrap'
import BrandCard from './Brandcard'
import brand1 from '../../Image/brand1.png'
import brand2 from '../../Image/brand2.png'
import brand3 from '../../Image/brand3.png'

export const BrandContainer = () => {
  return (
    <Container>
        <div className="admin-content-text mt-2 ">أشهر الماركات</div>
    <Row className='my-1 d-flex justify-content-between'>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand3}/>
        <BrandCard img={brand2}/>
        <BrandCard img={brand1}/>
        <BrandCard img={brand3}/>
    </Row>
</Container>
  )
}
