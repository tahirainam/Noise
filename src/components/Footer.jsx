import "../css/Navbar.css";
function Footer() {
  let heading = "built-and-designed-by-tahayrah-enaam • ";
  let repeated = heading.repeat(10);
  return (
    <>
      <Footer className="fixed bg-black text-white overflow-hidden border-t-2 border-b-2 border-dashed border-white">
        <span className="marquee inline-block whitespace-nowrap text-sm font-medium tracking-widest">
          {repeated + repeated}
        </span>
      </Footer>
    </>
  );
}

export default Footer;