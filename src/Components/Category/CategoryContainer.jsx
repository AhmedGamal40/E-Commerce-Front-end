import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import clothe from '../../Image/clothe.png'
import labtop from '../../Image/labtop.png'
import sale from '../../Image/sale.png'
import pic from '../../Image/pic.png'
import cat2 from '../../Image/cat2.png'

export const CategoryContainer = () => {
  return (
    <Container>
        <div className="admin-content-text mt-2 ">كل التصنيفات</div>
        <Row className='my-2 d-flex justify-content-between'>
            <CategoryCard title="ملابس" img={clothe} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={labtop} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={sale} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={pic} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={cat2} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={clothe} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={clothe} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={labtop} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={sale} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={pic} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={cat2} background="#F4DBA4" />
            <CategoryCard title="ملابس" img={clothe} background="#F4DBA4" />
        </Row>
    </Container>
  )
}
