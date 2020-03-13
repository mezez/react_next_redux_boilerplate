import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Cart = () => (
  <div>
    <Head>
      <title>SADE Cart</title>
      {/* <script type="text/javascript" src="/scripts/indexScript.js"></script> */}
    </Head>
    {/* <!-- Navbar --> */}
    <div className="search-form" style={{ display: "none" }}>
      <div className="p-5">search form</div>
    </div>
    <Header />
    <div className="container pt-5">
        <div className="row">
            <div className="col-sm-12 py-3">
                <h3 className="baloo-font">Shopping Cart</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-9">
                <div className="cart p-3">
                    {/* <!-- Item --> */}
                    <div className="row item mx-1 py-3 my-3">
                        <div className="col-sm-2 col-md-2">
                            <img className="product" src="http://placehold.it/69x69" alt="" />
                        </div>
                        <div className="col-sm-4 col-md-6">
                            <h6 className="varela_font mt-1 mb-0">Withings Home Wireless Camera</h6>
                            <h4 className="baloo-font mt-1">$358.75</h4>
                        </div>
                        <div className="col-sm-3 col-md-2">
                            <div className="selector pt-2 px-3 text-center">
                                <small className="varela_font p-0">QTY</small>
                                <h3 className="baloo-font m-0">1</h3>
                            </div>
                        </div>
                        <div className="col-sm-3 col-md-2">
                            <div className="selector pt-2 px-3 text-center">
                                <small className="varela_font p-0">ACTION</small>
                                <button className="btn btn-link">
                                    <ion-icon className="trash" name="trash-outline"></ion-icon>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End item --> */}
                </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-3">
                <div className="cart p-3">
                    <div className="row">
                        <div className="col-md-6 col-lg-12">
                            <h6 className="baloo-font">Payment Method</h6>
                            <img className="payment-method my-3" src="/images/placeholder-pay.png" alt="" />
                        </div>
                        <div className="col-md-6 col-lg-12">
                            <h6 className="baloo-font">Order Summary</h6>
                            <table className="varela_font my-3">
                                <tr>
                                    <td>Subtotal</td>
                                    <td className="text-right">0.00</td>
                                </tr>
                                <tr>
                                    <td>Shipping</td>
                                    <td className="text-right">0.00</td>
                                </tr>
                            </table>
                            <button className="baloo-font btn-round btn-icon-left btn btn-primary mt-3">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <Footer />
    <style global jsx>{`
        body {
          background: white;
        }
      `}</style>
  </div>
);

export default Cart;
