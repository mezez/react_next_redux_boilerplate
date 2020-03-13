import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Shipping = () => (
  <div>
    <Head>
      <title>SADE Shipping</title>
      {/* <script type="text/javascript" src="/scripts/indexScript.js"></script> */}
    </Head>
    {/* <!-- Navbar --> */}
    <div className="search-form" style={{ display: "none" }}>
      <div className="p-5">search form</div>
    </div>
    <Header />
    <div class="container pt-5">
        <div class="row">
            <div class="col-sm-12 py-3">
                <h3 class="baloo-font">Shipping</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8 py-2">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="py-2 px-3 shipping">
                            <div class="address p-4 my-3 varela_font">
                                1473 Ranchview Dr undefined San Jose, Maryland 48301 United States
                            </div>
                            <div class="address p-4 my-3 varela_font">
                                1473 Ranchview Dr undefined San Jose, Maryland 48301 United States
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 py-2">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="py-2 px-3 shipping">
                            <h6 class="baloo-font pt-2">Add Address</h6>
                            <form>
                                <div class="form-group mb-1">
                                  <label class="varela_font m-0" for="exampleInputEmail1">Email address</label>
                                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div class="form-group mb-1">
                                  <label class="varela_font m-0" for="exampleInputPassword1">Password</label>
                                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div class="form-check mb-3">
                                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                  <label class="form-check-label" for="exampleCheck1">Set as default</label>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                              </form>
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

export default Shipping;
