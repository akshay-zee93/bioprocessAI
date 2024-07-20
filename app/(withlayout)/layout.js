import Footer from "../Component/Footer";
import Header from "../Component/Header";
import BackgroundImg from "../../public/Background.svg";

export default function RootLayout({ children }) {
  return (
    <div className=" w-screen box-border  h-screen">
      <section
        style={{ backgroundImage: `url(${BackgroundImg.src})` }}
        className=" w-screen bg-cover bg-no-repeat bg-top "
      >
        <Header />
        {children}
      </section>
      <Footer />
    </div>
  );
}
