import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Complete = () => (
  <div>
    <Head>
      <title>SADE Complete</title>
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
                {/* <!-- <h3 className="baloo-font">Shipping</h3> --> */}
            </div>
        </div>
        <div className="row">
            <div className="col-md-8 offset-md-2 py-2">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="p-5 shipping">
                            <h1 className="baloo-font pos-relative">Thank you! <ion-icon className="thankyou-icon" name="checkmark-circle"></ion-icon></h1>
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="varela_font pt-5">Your order is complete. Be expecting emails/updates as we process your order</p>
                                </div>
                            </div>
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

export default Complete;
