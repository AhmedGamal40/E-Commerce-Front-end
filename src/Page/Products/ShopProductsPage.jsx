import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { SearchDropDown } from '../../Components/Utils/SearchDropDown'
import { Col, Container, Row } from 'react-bootstrap'
import { Pagination } from '../../Components/Utils/Pagination'
import { SideFilture } from '../../Components/Utils/SideFilture'
import { CardProductsContainer } from '../../Components/Product/CardProductsContainer'

export const ShopProductsPage = () => {
  return (
        <div style={{minHeight:'670px'}}>
            <CategoryHeader/>
            <Container>
                <SearchDropDown title='400 منتج متاح .........'/>
                <Row className='d-flex flex-row'>
                    <Col sm='2' xs='3' md='2' className='d-flex'>
                        <SideFilture/>
                    </Col>
                    <Col  sm='10' xs='9' md='10'>
                        <CardProductsContainer/>
                    </Col>
                </Row>
            </Container>
            <Pagination/>
        </div>
  )
}
