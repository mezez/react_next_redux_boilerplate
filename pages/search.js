import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

const Search = () => (
  <div>
    <Head>
      <title>SADE Search</title>
      {/* <script type="text/javascript" src="/scripts/indexScript.js"></script> */}
    </Head>
    {/* <!-- Navbar --> */}
    <div className="search-form" style={{ display: "none" }}>
      <div className="p-5">search form</div>
    </div>
    <Header />
    <div className="category_header py-5">
        <div className="container">
            <h3 className="baloo-font">
                Search Category Name
            </h3>
        </div>
    </div>

    {/* <!-- container --> */}
    <div className="container">
        <div className="page-content p-3">
            <div className="row">
                <div className="col-sm-2 pt-3">
                    <h4 className="baloo-font">Filter</h4>
                    <ul className="filter_options py-3">
                        <li>
                            Men's Clothing
                            <ul>
                                <li>
                                    <a href="#">Hoodies & Sweatshirts</a>
                                </li>
                                <li><a href="#">Tops & Tees</a></li>
                                <li><a href="#">Jackets & Coats</a></li>
                                <li><a href="#">Pants</a></li>
                                <li><a href="#">Shirts</a></li>
                                <li><a href="#">Jeans</a></li>
                                <li><a href="#">Sweaters</a></li>
                                <li><a href="#">Casual Shorts</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="filter_options py-3">
                        <li>
                            Colors
                            <ul>
                                <li>
                                    <a href="#"><input type="checkbox" /> Hoodies & Sweatshirts</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-10">
                    {/* <!-- Results --> */}
                    <h4 className="baloo-font pt-3 pb-2">Search Results</h4>
                    <div className="row pt-1 px-2">
                        <div className="col-sm-4">
                            <div className="row md-item">
                                <div className="col-sm-4">
                                    <img style={{width:'100%'}} src="http://placehold.it/97x120" alt="" />
                                </div>
                                <div className="col-sm-8 pl-0">
                                    <h6 className="varela_font product-name">
                                        Polymer Shirt & Knickers combo
                                    </h6>
                                    <div className="varela_font">
                                        $299.99
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="row md-item">
                                <div className="col-sm-4">
                                    <img style={{width:'100%'}} src="http://placehold.it/97x120" alt="" />
                                </div>
                                <div className="col-sm-8 pl-0">
                                    <h6 className="varela_font product-name">
                                        Polymer Shirt & Knickers combo
                                    </h6>
                                    <div className="varela_font">
                                        $299.99
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div className="row md-item">
                                <div className="col-sm-4">
                                    <img style={{width:'100%'}} src="http://placehold.it/97x120" alt="" />
                                </div>
                                <div className="col-sm-8 pl-0">
                                    <h6 className="varela_font product-name">
                                        Polymer Shirt & Knickers combo
                                    </h6>
                                    <div className="varela_font">
                                        $299.99
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination py-4">
                        <a href="#" className="item mx-1">1</a>
                        <a href="#" className="item mx-1">2</a>
                        <a href="#" className="item mx-1">Next</a>
                    </div>
                    {/* <!-- Trending --> */}
                </div>
            </div>
        </div>
    </div>
    <Footer />
  </div>
);

export default Search;
