import "../css/Navbar.css";
function Navbar() {
  let heading = "noise • ";
  let repeated = heading.repeat(20);
  return (
    <>
      <nav className="bg-black text-white overflow-hidden border-t-4 border-b-4 border-dashed border-white py-1">
        <span className="marquee inline-block whitespace-nowrap text-md font-medium tracking-widest">
          {repeated + repeated}
        </span>
      </nav>
    </>
  );
}

export default Navbar;