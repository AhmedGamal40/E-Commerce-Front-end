import React from 'react'
import { BrandContainer } from '../../Components/Brand/BrandContainer'
import { Pagination } from '../../Components/Utils/Pagination'

export const AllBrandPage = () => {
  return (
    <div style={{minHeight:"670px"}}>
        <BrandContainer/>
        <Pagination/>
    </div>
  )
}
