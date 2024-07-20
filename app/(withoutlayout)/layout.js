import Header from "../Component/Header";

export default function RootLayout({ children }) {
  return (
    <div className=" w-screen box-border h-screen bg-white ">
      <section className="  ">
        <Header />
        {children}
      </section>
    </div>
  );
}
