import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from '../../Image/mobile.png'
import mobile1 from '../../Image/mobile1.png'
import mobile2 from '../../Image/mobile2.png'
import { RightButton } from './RightButton';
import { LeftButton } from './LeftButton';


export const ProductGallery = () => {
    const images = [
        {
          original: `${mobile}`
        },
        {
          original:  `${mobile1}`
        },
        {
          original:  `${mobile2}`
        }
      ];
      
  return (
    <div className="product-gallary-card d-flex justfiy-content-center  align-items-center pt-2">
        <ImageGallery items={images} 
            defaultImage={mobile}
            showFullscreenButton={false}
            showPlayButton={false}
            isRTL={true}
            showThumbnails={false}
            renderRightNav={RightButton}
            renderLeftNav={LeftButton}
        />
    </div>
  )
}
