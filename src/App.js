import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/ScrollTo Top/ScrollToTop";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import About from './component/About/About';
import Contact from "./component/contact/Contact";
import Products from './component/products/Products';
import Career from './component/Career/Career';
import Store from './component/Store/Store';
import Tpds from "./component/TPDS/Tpds";
import Subscription from "./component/Subscription/SubscriptionForm";
import Services from './component/Services/Service';
import ESG from './component/ESG/ESG';
import GoodFoot from "./component/Goodfoot/Goodfoot";
import BlogList from './component/Blog/BogList';
import SubscriptionPage from "./component/Pricing/Pricing";
import PartnerPage from "./component/Partner/PartnerPage";
import BlogContent1 from "./component/Blog/BlogContent1";
import BlogContent2 from "./component/Blog/BlogContent2";
import BlogContent3 from "./component/Blog/BlogContent3";
import BlogContent4 from "./component/Blog/BlogContent4";
import BlogContent5 from "./component/Blog/BlogContent5";
import BlogContent6 from "./component/Blog/BlogContent6";
import BlogContent7 from "./component/Blog/BlogContent7";
import BlogContent8 from "./component/Blog/BlogContent8";
import BlogContent9 from "./component/Blog/BlogContent9";
import BlogContent10 from "./component/Blog/BlogContent10";
import BlogContent11 from "./component/Blog/BlogContent11";
import BlogContent12 from "./component/Blog/BlogContent12";
import BlogContent13 from "./component/Blog/BlogContent13";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000,once:true, });
  }, []);
  return (
    <>
    
    <div className="App flex flex-col min-h-screen">
      <Header />
      <div className="content flex-grow   ">
      <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/store" element={<Store />} />
          <Route path="/tpds" element={<Tpds />} />
          <Route path="/subscriptionform" element={<Subscription />} />
          <Route path="/services" element={<Services />} />
          <Route path="/esg" element={<ESG />} />
          {/* <Route path="/goodfoot" element={<GoodFoot />} /> */}
          <Route path="/pricing" element={<SubscriptionPage />} />
          <Route path="/partner" element={<PartnerPage />} />


          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/understandingOCEMS" element={<BlogContent1 />} />
          <Route path="/blog/periyar-river" element={<BlogContent2 />} />
          <Route path="/blog/water-crisis-banglore" element={<BlogContent3 />} />
          <Route path="/blog/kakkanad-lessons" element={<BlogContent4 />} />
          <Route path="/blog/waste-management" element={<BlogContent5 />} />
          <Route path="/blog/couple-recycles-10000-tonnes-of-waste" element={<BlogContent6 />} />
          <Route path="/blog/ocems" element={<BlogContent7 />} />
          <Route path="/blog/carbon-tracking" element={<BlogContent8 />} />
          <Route path="/blog/carbon-footprint" element={<BlogContent9 />} />
          <Route path="/blog/esg" element={<BlogContent10 />} />
          <Route path="/blog/carbon-emission" element={<BlogContent11 />} />
          <Route path="/blog/esg-blueprint" element={<BlogContent12 />} />
          <Route path="/blog/esg-leader-playbook" element={<BlogContent13 />} />
        </Routes>
      </div>
      <Footer />
    </div>
    </>
    
  );
}



export default App;
