import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Product = () => (
  <div>
    <Head>
      <title>SADE Products</title>
      {/* <script type="text/javascript" src="/scripts/indexScript.js"></script> */}
    </Head>
    {/* <!-- Navbar --> */}
    <div className="search-form" style={{ display: "none" }}>
      <div className="p-5">search form</div>
    </div>
    <Header />
    {/* <!-- Product Details --> */}
    <div className="container pt-5">
        <div className="row">
            <div className="col-sm-4">

                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="product-image" src="http://placehold.it/328x352/ff0000" alt="" />
                        </div>
                        <div className="carousel-item">
                            <img className="product-image" src="http://placehold.it/328x352/336699" alt="" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-sm-8">
                <h4 className="baloo-font">
                    <img style={{width: 50}} src="/images/new.png" alt="" />
                    <br />
                    New led wall light 3W acrylic wall sconce Embedded
                    footlight Indoor Stair step decorative night
                    lights Modern led wall lamp
                </h4>
                <small className="varela_font">631 In Stock</small>
                <div className="row">
                    {/* <!-- Color --> */}
                    <div className="col-sm-3 mt-3">
                        <div className="selector py-2 px-3">
                            <small className="varela_font">COLOR</small>
                            <a href="#" style={{backgroundColor: "blue"}} className="color"></a>
                            <a href="#" style={{backgroundColor: '#A3BDC0'}} className="color"></a>
                            <a href="#" style={{backgroundColor: '#607D98'}} className="color"></a>
                        </div>
                    </div>

                    {/* <!-- Qty --> */}
                    <div className="col-sm-3 mt-3">
                        <div className="selector py-2 px-3">
                            <small className="varela_font">Quantity</small>
                            <div className="row">
                                <div className="col-sm-4"><button className="btn btn-link">-</button></div>
                                <div className="col-sm-4 pt-1 qty">
                                    <span>1</span>
                                </div>
                                <div className="col-sm-4"><button className="btn btn-link">+</button></div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Shipping --> */}
                    <div className="col-sm-5 mt-3">
                        <div className="selector py-2 px-3">
                            <small className="varela_font p-0">Shipping</small>
                            <h3 className="baloo-font my-0">
                                $42.00
                            </h3>
                            <small className="p-0">Ships typically in 7 Days</small>
                        </div>
                    </div>

                </div>
                <div className="row pt-4">
                    <div className="col-sm-6">
                        <small className="varela_font">PRICE</small>
                        <h3 className="baloo-font">$42.00</h3>
                    </div>
                    <div className="col-sm-6">
                        <button className="baloo-font btn-round btn-icon-left btn btn-lg btn-primary mt-3">
                            <ion-icon name="heart-outline"></ion-icon>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- End Product Details --> */}
    {/* <!-- Tabs --> */}
    <div className="container pt-5">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link baloo-font active" id="product-tab" data-toggle="tab" href="#product" role="tab"
                    aria-controls="product" aria-selected="true">Product</a>
            </li>
            <li className="nav-item">
                <a className="nav-link baloo-font" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review"
                    aria-selected="false">Review</a>
            </li>
            <li className="nav-item">
                <a className="nav-link baloo-font" id="feature-tab" data-toggle="tab" href="#feature" role="tab"
                    aria-controls="feature" aria-selected="false">Feature</a>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="product" role="tabpanel" aria-labelledby="product-tab">...</div>
            <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                {/* <!-- Reviews --> */}
                <div className="row p-3">
                    <div className="col-sm-6">
                        <div className="review my-4 p-4 varela_font">
                            <h6 className="varela-font person">Bertie Fernandez</h6>
                            Excellent seller, order came quickly. Excellent product,
                            very beautiful jacket good quality but very small size,
                            take at least 2 above size!
                            <div className="row pt-4 px-0">
                                <div className="col-sm-6 varela-font">
                                    18 Nov. 2017, 07:26
                                </div>
                                <div className="col-sm-6 text-right">
                                    <img src="/images/star.png" alt=""/>
                                    <img src="/images/star.png" alt=""/>
                                    <img src="/images/dull-star.png" alt=""/>
                                    <img src="/images/dull-star.png" alt=""/>
                                    <img src="/images/dull-star.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="review my-4 p-4 varela_font">
                            <h6 className="varela-font person">Bertie Fernandez</h6>
                            Excellent seller, order came quickly. Excellent product,
                            very beautiful jacket good quality but very small size,
                            take at least 2 above size!
                            <div className="row pt-4 px-0">
                                <div className="col-sm-6 varela-font">
                                    18 Nov. 2017, 07:26
                                </div>
                                <div className="col-sm-6 text-right">
                                    <img src="/images/star.png" alt=""/>
                                    <img src="/images/star.png" alt=""/>
                                    <img src="/images/dull-star.png" alt=""/>
                                    <img src="/images/dull-star.png" alt=""/>
                                    <img src="/images/dull-star.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="review my-4 p-4 varela_font">
                            <h6 className="varela-font person">Bertie Fernandez</h6>
                            Excellent seller, order came quickly. Excellent product,
                            very beautiful jacket good quality but very small size,
                            take at least 2 above size!
                            <div className="row pt-4 px-0">
                                <div className="col-sm-6 varela-font">
                                    18 Nov. 2017, 07:26
                                </div>
                                <div className="col-sm-6 text-right">
                                    <img src="/images/star.png" alt=""/>
                                    <img src="/images/star.png" alt=""/>
                                    <img src="/images/dull-star.png" alt=""/>
                                    <img src="/images/dull-star.png" alt=""/>
                                    <img src="/images/dull-star.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Reviews --> */}
            </div>
            <div className="tab-pane fade" id="feature" role="tabpanel" aria-labelledby="feature-tab">...</div>
        </div>
    </div>
    {/* <!-- End Tabs --> */}
    <Footer />
    <style global jsx>{`
        body {
          background: white;
        }
      `}</style>
  </div>
);

export default Product;
