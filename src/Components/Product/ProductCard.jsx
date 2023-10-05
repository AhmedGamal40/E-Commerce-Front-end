import React from 'react'
import rate from '../../Image/rate.png'
import favoff from '../../Image/fav-off.png'
import { Card, Col, ToastContainer } from 'react-bootstrap'
import prod1 from '../../Image/prod1.png'
import { Link } from 'react-router-dom'

export const ProductCard = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">

            {/* <Card
                className="my-2"
                style={{
                    width: "100%",
                    height: "345px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
                }}>
                    <Link to="/detalis/:id">
                        <Card.Img style={{ height: "228px", width: "100%" }} src={prod1} />
                    </Link>
                <div className="d-flex justify-content-end mx-2">
                        <img
                            src={favoff}
                            alt=""
                            className="text-center"
                            style={{
                                height: "24px",
                                width: "26px",
                                cursor: 'pointer'
                            }}
                        />
                </div>
                <Card.Body>
                    <Card.Title>
                        <div className="card-title">
                            لابتوب 
                        </div>
                    </Card.Title>
                    <Card.Text>
                        <div className="d-flex justify-content-between ">
                            <div className="d-flex">
                                <img
                                    className=""
                                    src={rate}
                                    alt=""
                                    height="16px"
                                    width="16px"
                                />
                                <div className="card-rate mx-2">4</div>
                            </div>
                            <div className="d-flex">
                                <div className="card-price">50</div>
                                <div className="card-currency mx-1">جنيه</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card> */}

            <div className="card my-1" style={{width: "18rem"}}>
                    <div className="d-flex justify-content-start mx-2">
                        <img
                            src={favoff}
                            alt=""
                            className="text-center"
                            style={{
                                height: "24px",
                                width: "26px",
                                cursor: 'pointer'
                            }}
                        />
                </div>
                    <Link to="/detalis/:id">
                        <Card.Img className="card-img-top" src={prod1} alt="Card image cap"/>
                    </Link>
                <div className="card-body">
                    <h5 className="card-title">لابتوب</h5>
                    <p className="card-text">Some quick example text to build on the card title</p>
                </div>
                <div className="d-flex justify-content-between m-2">
                    <div className="d-flex">
                        <img
                            className=""
                            src={rate}
                            alt=""
                            height="16px"
                            width="16px"
                        />
                        <div className="card-rate mx-2">4</div>
                    </div>
                    <div className="d-flex">
                        <div className="card-price">50</div>
                        <div className="card-currency mx-1">جنيه</div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </Col>
  )
}
