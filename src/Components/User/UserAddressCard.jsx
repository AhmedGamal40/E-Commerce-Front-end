import React from 'react'
import { Col, Row } from 'react-bootstrap'
import deleteicon from '../../Image/delete.png'
import { Link } from 'react-router-dom'

export const UserAddressCard = () => {
  return (
    <div className="user-address-card my-3 px-2">

    <Row className="d-flex justify-content-between  ">
        <Col xs="6">
            <div className="p-2"> المنزل</div>
        </Col>
        <Col xs="6" className="d-flex d-flex justify-content-end">
            <div className="d-flex p-2">
                <Link to='/user/edit-address' style={{ textDecoration: 'none' }}>
                    <div className="d-flex mx-2">
                        <img
                            alt=""
                            className="ms-1 mt-2"
                            src={deleteicon}
                            height="17px"
                            width="15px"
                        />
                        <p className="item-delete-edit"> تعديل</p>

                    </div>
                </Link>
                <div  className="d-flex ">
                    <img
                        alt=""
                        className="ms-1 mt-2"
                        src={deleteicon}
                        height="17px"
                        width="15px"
                    />
                    <p className="item-delete-edit"> حذف</p>
                </div>
            </div>
        </Col>
    </Row>

    <Row>
        <Col xs="12">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "14px",
                }}>
                    الزقازيق , شرقيه
            </div>
        </Col>
    </Row>

    <Row className="mt-3">
        <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}>
                رقم الهاتف:
            </div>

            <div
                style={{
                    color: "#979797",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}
                className="mx-2">
                    01092947045
            </div>
        </Col>
    </Row>
</div>
  )
}
