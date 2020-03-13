import React from "react";
import Head from "next/head";
import "typeface-roboto";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/header.css";
import "../components/styles/footer.css";
import "../components/styles/side-menu.css";
import "../pages/styles/complete.css";
import "../pages/styles/shipping.css";

import "../pages/styles/cart.css";
import "../pages/styles/search.css";
import "../pages/styles/product.css";
import "../pages/styles/index.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/ionicons@5.0.0/dist/ionicons.js"></script>
        <script
          src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
          integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
