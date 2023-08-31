import React from 'react'

export default function Kitchen() {
    return (
        <div className="container">
            <div className="row">
                <section id="zone-1">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 col-lg-3">
                            <div className="product-item">
                                <div className="img">
                                    <img className="w-100" src="http://noithat142011.demo.xemwebmau.com/wp-content/uploads/2019/09/ban-ghe-an-ma-xba188_5d6f6804bb6bd-400x267.jpeg" alt="" />
                                </div>
                                <div style={{ backgroundColor: "white" }}>
                                    <span>Bàn ghế ăn mã XBA188</span>
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
                                    <img className="w-100" src="http://noithat142011.demo.xemwebmau.com/wp-content/uploads/2019/09/ban-ghe-an-ma-xba185_5d6f68175082d-400x267.jpeg" alt="bedroom" />
                                </div>
                                <div style={{ backgroundColor: "white" }}>
                                    <span>Bàn ghế ăn mã XBA185</span>
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
                                    <img className="w-100" src="http://noithat142011.demo.xemwebmau.com/wp-content/uploads/2019/09/ban-ghe-an-ma-xba186_5d6f6829d7cc7-400x267.jpeg" alt="" />
                                </div>
                                <div style={{ backgroundColor: "white" }}>
                                    <span>Bàn ghế ăn mã XBA186</span>
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
