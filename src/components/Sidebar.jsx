function Sidebar({activeArt, onSelect}) {
  return (
    <>
      <aside className="overflow-y-auto [&::-webkit-scrollbar]:hidden flex flex-1 flex-col mt-1 mb-1 border-l-2 border-dashed h-150 border-gray-400 text-black px-2">
        <div className="hover:bg-black hover:text-white hover:border-2 hover:border-white mb-2 border-b w-full p-2 text-left hover:border border-dashed border-gray-400 font-normal font-bold ">
          <button className="cursor-pointer" onClick={() => onSelect("Sketch")}>sketch</button>
        </div>
        <div className="hover:bg-black hover:text-white hover:border-2 hover:border-white mb-2 border-b w-full p-2 text-left hover:border border-dashed border-gray-400 font-normal font-bold ">
          <button className="cursor-pointer" onClick={() => onSelect("AnotherArt")}>another art</button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
