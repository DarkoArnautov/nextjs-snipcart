import Header from "../components/Header"
import ProductList from "../components/ProductList"
import { IProduct } from "../components/Product"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Head from "next/head"

import "../styles.scss"

interface IIndexProps {
  products: IProduct[]
}

const Index = (props: IIndexProps) => {
  return (
    <div className="app">
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.js"></script>

        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Header />
      <main className="main">
        <img src="/static/aquarium.svg" alt="a" className="background-image" />
        <div className="promotional-message">
          <h3>Meals</h3>
          <p> bcsajcbksbckdjkcjkbcsa <strong>exclusive selection of meal plans</strong> available for everyone.</p>
        </div>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css" />
<div hidden id="snipcart" data-api-key="ZTg0ODg3MzctZWY0ZC00YzRhLThkMmMtMjhjYmU2OWNhY2Q2NjM2NTIzMzM1ODI0MDQ0Nzkx"></div>
<ProductList products={props.products} />
        <Contact />
      </main>
      <Footer />
      
    </div>
  )
}

Index.getInitialProps = async () => {
  return {
    products: [
      {id: "nextjs_m1", name: "ASIAN CHICKEN & BROCCOLI", price: 25.00, image: "../static/m1.jpg", description: "A light adaptation of a take-out classic! Sauteed Asian-marinated chicken breast & garlicky broccoli."} as IProduct,
      {id: "nextjs_m2", name: "SHRIMP & SCALLOP                        FRA DIAVOLO", price: 35, image: "../static/m2.jpg",description: "This guilt-free, low-carb, under 400 calorie option is gonna knock your socks off! Tender scallops and juicy shrimp in our spicy fra diavolo sauce, served over fresh protein pasta."} as IProduct,
      {id: "nextjs_m3", name: "Buffalo Shrimp ", price: 7.50, image: "../static/m3.jpg", description: "Spicy buffalo shrimp served with roasted garlic cauliflower rice."} as IProduct,
      {id: "nextjs_m4", name: "EGG WHITE, SPINACH & ROASTED RED PEPPER FRITTATA", price: 25.00, image: "../static/m4.jpg", description: "This light breakfast option won’t leave you feeling foggy the rest of the day! Egg whites mixed with spinach, onions, roasted red peppers and romano cheese, then baked to perfection."} as IProduct,
      {id: "nextjs_m4", name: "EGG WHITE, SPINACH & ROASTED RED PEPPER FRITTATA", price: 25.00, image: "../static/m4.jpg", description: "This light breakfast option won’t leave you feeling foggy the rest of the day! Egg whites mixed with spinach, onions, roasted red peppers and romano cheese, then baked to perfection."} as IProduct,
    ]
  }
}

export default Index