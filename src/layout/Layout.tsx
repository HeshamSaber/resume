import Content from "./Content";
import Header from "./Header";

function Layout() {
  window.addEventListener("resize", () => {
    window.location.reload();
  });
  return (
    <>
      <section className="flex-1 flex absolute p-1 top-0 left-0 right-0 bg-[#56777c] md:h-12 justify-between items-center z-50">
        <Header />
      </section>
      <section className="fixed flex top-14 left-5 right-5 bottom-2 overflow-y-auto overscroll-y-contain scrollbar-hide items-center justify-center">
        <Content />
      </section>
    </>
  );
}
export default Layout;
