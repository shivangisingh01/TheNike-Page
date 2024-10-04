import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SuperQuality from "./sections/SuperQuality";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";
import Nav from "./components/Nav";
// import CustomerReviews from './sections/CustomerReviews.jsx';

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        {" "}
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <Subscribe />{" "}
      </section>
      <section className="padding-x py-10">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding-x py-10">
        <Subscribe />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
