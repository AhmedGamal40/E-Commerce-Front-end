import React from 'react'
import { Row } from 'react-bootstrap'
import { ProductCard } from '../Product/ProductCard'
import { Pagination } from '../Utils/Pagination'

export const UserFavoriteProducts = () => {
  return (
    <div>
        <div className='admin-content-text'>المنتجات المفضله</div>
        <Row className='justify-content-between'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </Row>
        <Row>
            <Pagination/>
        </Row>
    </div>
  )
}
