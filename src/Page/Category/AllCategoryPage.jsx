import React from 'react'
import { CategoryContainer } from '../../Components/Category/CategoryContainer'
import { Container } from 'react-bootstrap'
import { Pagination } from '../../Components/Utils/Pagination'

export const AllCategoryPage = () => {
  return (
    <Container style={{minHeight:"670px"}}>
        <CategoryContainer/>
        <Pagination/>
    </Container>
  )
}
