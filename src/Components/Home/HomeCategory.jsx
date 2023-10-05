import { Container, Row } from 'react-bootstrap'
import SubTiltle from '../Utils/SubTitle'
import CategoryCard from '../Category/CategoryCard'
import clothe from '../../Image/clothe.png'
import labtop from '../../Image/labtop.png'
import sale from '../../Image/sale.png'
import pic from '../../Image/pic.png'
import cat2 from '../../Image/cat2.png'

export default function  HomeCategory() {
  return (
    <Container>
        <Row className='my-2 d-flex justify-content-between'>
            <SubTiltle title="التصنيفات" btntitle="المزيد" pathText='/allcategory'/>
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
