import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import DiscountSection from "../../Components/Home/DiscountSection";
import { BrandFeatured } from "../../Components/Brand/BrandFeatured";
import { CardProductsContainer } from "../../Components/Product/CardProductsContainer";

function HomePage() {
    return(
        <div className="font" style={{minHeight:'670px'}}>
            
            <Slider/>
            <HomeCategory/>
            <CardProductsContainer title={"الاكثر مبيعا"}  btntitle={"المزيد"} pathText='/products'/>
            <DiscountSection/>
            <CardProductsContainer title={"احدث الازياء"}  btntitle={"المزيد"} pathText='/products'/>
            <BrandFeatured title={"أشهر الماركات"}  btntitle={"المزيد"}/>
            
        </div>
    )
}

export default HomePage;