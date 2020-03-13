import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => (
  <div>
    <Head>
      <title>SADE</title>
      <script type="text/javascript" src="/scripts/indexScript.js"></script>
    </Head>
    {/* <!-- Navbar --> */}
    <div className="search-form" style={{ display: "none" }}>
      <div className="p-5">search form</div>
    </div>
    <Header />
    {/* <!-- Hero Slider --> */}
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img style={{ width: "100%" }} src="/images/hero-1.png" alt="" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    {/* <!-- End Hero Slider --> */}
    {/* <!-- container --> */}
    <div className="container">
      <div className="page-content p-3">
        {/* <!-- Trending --> */}
        <h4 className="baloo-font pt-3 pb-2">Trending Items</h4>
        <div className="row pt-1 px-2">
          <div className="col-sm-4">
            <div className="row md-item">
              <div className="col-sm-4">
                <img
                  style={{ width: "100%" }}
                  src="http://placehold.it/97x120"
                  alt=""
                />
              </div>
              <div className="col-sm-8 pl-0">
                <h6 className="varela_font product-name">
                  Polymer Shirt & Knickers combo
                </h6>
                <div className="varela_font">$299.99</div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="row md-item">
              <div className="col-sm-4">
                <img
                  style={{ width: "100%" }}
                  src="http://placehold.it/97x120"
                  alt=""
                />
              </div>
              <div className="col-sm-8 pl-0">
                <h6 className="varela_font product-name">
                  Polymer Shirt & Knickers combo
                </h6>
                <div className="varela_font">$299.99</div>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="row md-item">
              <div className="col-sm-4">
                <img
                  style={{ width: "100%" }}
                  src="http://placehold.it/97x120"
                  alt=""
                />
              </div>
              <div className="col-sm-8 pl-0">
                <h6 className="varela_font product-name">
                  Polymer Shirt & Knickers combo
                </h6>
                <div className="varela_font">$299.99</div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Trending --> */}
        {/* <!-- Middle Content --> */}
        <div className="row pt-5">
          {/* <!-- Top Selections --> */}
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <h5 className="baloo-font my-4">Top Selections</h5>
            <div className="row">
              <div className="col-md-4">
                <div className="sd-item p-3">
                  <img
                    className="product"
                    src="http://placehold.it/125x149"
                    alt=""
                  />
                  <h6 className="varela_font pt-2">$23.99</h6>
                </div>
              </div>

              <div className="col-md-4">
                <div className="sd-item p-3">
                  <img
                    className="product"
                    src="http://placehold.it/125x149"
                    alt=""
                  />
                  <h6 className="varela_font pt-2">$23.99</h6>
                </div>
              </div>

              <div className="col-md-4">
                <div className="sd-item p-3">
                  <img
                    className="product"
                    src="http://placehold.it/125x149"
                    alt=""
                  />
                  <h6 className="varela_font pt-2">$23.99</h6>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Top Selections --> */}

          {/* <!-- Recommendations --> */}
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <h5 className="baloo-font my-4">Recommendations</h5>
            <div className="row">
              <div className="col-md-4">
                <div className="sd-item p-3">
                  <img
                    className="product"
                    src="http://placehold.it/125x149"
                    alt=""
                  />
                  <h6 className="varela_font pt-2">$23.99</h6>
                </div>
              </div>

              <div className="col-md-4">
                <div className="sd-item p-3">
                  <img
                    className="product"
                    src="http://placehold.it/125x149"
                    alt=""
                  />
                  <h6 className="varela_font pt-2">$23.99</h6>
                </div>
              </div>

              <div className="col-md-4">
                <div className="sd-item p-3">
                  <img
                    className="product"
                    src="http://placehold.it/125x149"
                    alt=""
                  />
                  <h6 className="varela_font pt-2">$23.99</h6>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Recommendations --> */}

          <div style={{ border: "1px solid #ccc" }}></div>

          {/* <!-- Categories --> */}
          <div className="col-lg-12 pt-5">
            <h2 className="baloo-font">Categories</h2>
            <div className="row pt-3">
              <div className="col-sm-2">
                <h4 className="baloo-font">Electronics</h4>
                <p>631 Products</p>
              </div>
              <div className="col-sm-2">
                <h4 className="baloo-font">Electronics</h4>
                <p>631 Products</p>
              </div>
              <div className="col-sm-2">
                <h4 className="baloo-font">Electronics</h4>
                <p>631 Products</p>
              </div>
              <div className="col-sm-2">
                <h4 className="baloo-font">Electronics</h4>
                <p>631 Products</p>
              </div>
              <div className="col-sm-2">
                <h4 className="baloo-font">Electronics</h4>
                <p>631 Products</p>
              </div>
              <div className="col-sm-2">
                <h4 className="baloo-font">Electronics</h4>
                <p>631 Products</p>
              </div>
            </div>
          </div>
          {/* <!-- End Categories --> */}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
