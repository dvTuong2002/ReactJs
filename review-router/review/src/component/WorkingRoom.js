import React from 'react'

export default function WorkingRoom() {
    return (
        <div className="container">
            <div className="row">
                <section id="zone-1">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="product-item">
                                <div className="img">
                                    <img className="w-100" src="http://noithat142011.demo.xemwebmau.com/wp-content/uploads/2019/09/phong-lam-viec-b4_5d6f687c7d04a-400x267.jpeg" alt="" />
                                </div>
                                <div style={{ backgroundColor: "white" }}>
                                    <span>Phòng làm việc B4</span>
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
                                    <img className="w-100" src="http://noithat142011.demo.xemwebmau.com/wp-content/uploads/2019/09/ban-lam-viecca3c-hoa-phat-hp120hl3cpo_5d6f6898347e1-400x267.jpeg" alt="bedroom" />
                                </div>
                                <div style={{ backgroundColor: "white" }}>
                                    <span>Bàn làm việc hòa phát HP120HL3CPO</span>
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
                                    <img className="w-100" src="http://noithat142011.demo.xemwebmau.com/wp-content/uploads/2019/09/ban-lam-viecca3c-hoa-phat-hp120hl9c_5d6f689f62f2b-400x267.jpeg" alt="" />
                                </div>
                                <div style={{ backgroundColor: "white" }}>
                                    <span>Bàn làm việc hòa phát HP120HL9C</span>
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
    )
}
