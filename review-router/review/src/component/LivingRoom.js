import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function LivingRoom() {
    // const activeClass = ({isActive})=>{
    //     return isActive? 'group-item selected':'group-item';
    // }
    // const activeStyle = ({isActive})=>{
    //     return{
    //         backgroundColor:isActive?'yellow':'red',
    //         color:isActive?'blue':'yellow'
    //     }
    // }
    return (
        <div>
            <h2>Danh mục: Phòng khách</h2>
            <ul>
                <li>
                    <NavLink to={'WorkingTable'}  >
                        Bàn làm việc
                        <div className="container">
                            <div className="row">
                                <section id="zone-1">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <div className="product-item">
                                                <div className="img">
                                                    <img className="w-100" src="https://noithatihouse.com/wp-content/uploads/2023/05/z4205200783233_4318d9fe2988b9886455fce3aa016937.jpg" alt="" />
                                                </div>
                                                <div style={{ backgroundColor: "white" }}>
                                                    <span>Giường ngủ người lớn Harvey</span>
                                                    <p>
                                                        <del>1.000.000 vnd</del>
                                                        <br />
                                                        <span style={{ color: "red", fontSize: "larger" }}>
                                                            990.000 vnd
                                                        </span>
                                                        <button type="button" className="btn btn-danger">
                                                            Mua ngay
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <div className="product-item">
                                                <div className="img">
                                                    <img className="w-100" src="https://noithatihouse.com/wp-content/uploads/2023/05/z4205200783233_4318d9fe2988b9886455fce3aa016937.jpg" alt="bedroom" />
                                                </div>
                                                <div style={{ backgroundColor: "white" }}>
                                                    <span>Giường Bianca</span>
                                                    <p>
                                                        <del>1.000.000 vnd</del>
                                                        <br />
                                                        <span style={{ color: "red", fontSize: "larger" }}>
                                                            990.000 vnd
                                                        </span>
                                                        <button type="button" className="btn btn-danger">
                                                            Mua ngay
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3 col-lg-3">
                                            <div className="product-item">
                                                <div className="img">
                                                    <img className="w-100" src="https://noithatihouse.com/wp-content/uploads/2023/05/z4205200783233_4318d9fe2988b9886455fce3aa016937.jpg" alt="" />
                                                </div>
                                                <div style={{ backgroundColor: "white" }}>
                                                    <span>Giường ngủ mã XGN03</span>
                                                    <p>
                                                        <del>1.000.000 vnd</del>
                                                        <br />
                                                        <span style={{ color: "red", fontSize: "larger" }}>
                                                            990.000 vnd
                                                        </span>
                                                        <button type="button" className="btn btn-danger">
                                                            Mua ngay
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </NavLink>
                </li>

            </ul>
            <div className=''>
                <Outlet></Outlet>
            </div>
        </div>
    )
}
