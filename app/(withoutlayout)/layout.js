import Header from "../Component/Header";

export default function RootLayout({ children }) {
  return (
    <div className=" w-screen box-border  h-screen">
      <section className=" w-screen bg-cover bg-no-repeat bg-top bg-white ">
        <Header />
        {children}
      </section>
    </div>
  );
}
