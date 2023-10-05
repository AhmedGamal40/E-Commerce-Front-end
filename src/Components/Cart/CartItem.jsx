import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import mobile from '../../Image/mobile.png'
import deleteicon from '../../Image/delete.png'

export const CartItem = () => {
  return (
    <Col sm="12" className="mt-2">
      <div
      className="cart-item-body my-2 px-1 d-flex"
      >

        <img width="160px" height="197px" src={mobile} alt="" />
        <div className="w-100">
          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 cat-text">موبايلات</div>
              <div  className="d-flex pt-2 " style={{ cursor: "pointer" }}>
                <img src={deleteicon} alt="" width="20px" height="24px" />
                <div className="cat-text d-inline me-2">ازاله</div>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-start">
              <div className="d-inline pt-2 cat-title">
              PHONE

              </div>
              <div className="d-inline pt-2 cat-rate me-2">4.5</div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="cat-text d-inline">الماركة :</div>
              <div className="barnd-text d-inline mx-1">ابل </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1 d-flex"><div
                  className="color ms-2 border"
                  style={{ backgroundColor: 'red' }}></div>
            </Col>
          </Row>

          <Row className="justify-content-between">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="d-inline pt-2 d-flex">
                <div className="cat-text mt-2  d-inline">الكميه</div>
                <FormCheckInput
                  className="mx-2 text-center"
                  type="number"
                  style={{ width: "60px", height: "40px" }}
                />
                <Button  className='btn btn-dark' >تطبيق</Button>
              </div>
              <div className="d-inline pt-2 barnd-text">5000 جنية</div>
            </Col>
          </Row>
        </div>
      </div>
  </Col>
  )
}
