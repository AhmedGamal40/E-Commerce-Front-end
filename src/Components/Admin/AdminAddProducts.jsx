import React from 'react'
import Multiselect from 'multiselect-react-dropdown';
import { Col, Row, ToastContainer } from 'react-bootstrap'
import avatar from '../../Image/avatar.png'
import add from '../../Image/add.png'

export const AdminAddProducts = () => {
    const onSelect = () => {

    };
    const onRemove = () => {
        
    }

    const  options = [
        {name: 'التصنيف الاول', id: 1},
        {name: 'التصنيف الثاني', id: 2},
        {name: 'التصنيف الثالث', id: 3},
        {name: 'التصنيف الرابع', id: 4}
    ]
  return (
    <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4"> اضافه منتج جديد</div>
                <Col sm="8">
                    <div className="text-form pb-2"> صور للمنتج</div>
                    <div>
                <label for="upload-photo">
                    <img
                        src={avatar}
                        alt="fzx"
                        height="100px"
                        width="120px"
                        style={{ cursor: "pointer" }}
                    />
                </label>
                <div>
                    <input
                        type="file"
                        name="photo"
                        id="upload-photo"
                    />
                </div>
            </div>
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم المنتج"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder="وصف المنتج"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر قبل الخصم"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="السعر بعد الخصم"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="الكمية المتاحة"
                    />
                    <select
                        name="cat"
                        className="select input-form-area mt-3 px-2 ">
                            <option value="val">التصنيف الرئيسي</option>
                            <option value="val">التصنيف الاول</option>
                            <option value="val2">التصنيف الثاني</option>
                            <option value="val2">التصنيف الثالث</option>
                            <option value="val2">التصنيف الرابع</option>
                            <option value="val2">التصنيف الخامس</option>
                    </select>

                    <Multiselect
                        className="mt-2 text-end"
                        placeholder="التصنيف الفرعي"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">اختر ماركة</option>
                            <option value="va2">التصنيف الاول</option>
                            <option value="val2">التصنيف الثاني</option>
                            <option value="val2">التصنيف الثالث</option>
                            <option value="val2">التصنيف الرابع</option>
                            <option value="val2">التصنيف الخامس</option>
                    </select>
                    <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                            <div 
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: 'black' }}></div>
                             <div 
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: 'red' }}></div>
                             <div 
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: 'green' }}></div>
                        <img src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
  )
}
