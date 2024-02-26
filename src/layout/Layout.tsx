import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function Layout() {
  return (
      <div className="container flex flex-col">
        <Header />
        <Content />
        <Footer />
      </div>
  )
}
export default Layout;
