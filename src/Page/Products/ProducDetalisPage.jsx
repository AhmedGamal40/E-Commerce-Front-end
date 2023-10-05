import React from 'react'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import { ProductDetalis } from '../../Components/Product/ProductDetalis'
import { RateContainer } from '../../Components/Rate/RateContainer'
import { CardProductsContainer } from '../../Components/Product/CardProductsContainer'

export const ProducDetalisPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
        <CategoryHeader/>
        <Container>
            <ProductDetalis/>
            <RateContainer/>
            <CardProductsContainer title='منتجات قد تعجبك'/>
        </Container>
    </div>
  )
}
