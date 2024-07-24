import Footer from "../Component/Footer";
import Header from "../Component/Header";

export default function RootLayout({ children }) {
  return (
    <div className=" w-screen box-border  h-screen">
      <section className=" w-screen bg-custom-gradient ">
        <Header />
        {children}
      </section>
      <Footer />
    </div>
  );
}
