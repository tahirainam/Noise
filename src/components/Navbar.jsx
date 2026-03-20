import "../css/Navbar.css";
function Navbar() {
  return (
    <>
      <nav className="mt-2 overflow-hidden border-t-2 border-b-2 border-dashed border-gray-400 py-3">
        <span className="marquee inline-block whitespace-nowrap text-2xl font-medium tracking-widest">
          NOISE
        </span>
      </nav>
    </>
  );
}

export default Navbar;