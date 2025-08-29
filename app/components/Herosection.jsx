import SearchBar from "./Searchbar";

export default function Herosection() {
  return (
    <div className="relative bg-[url('/Heroimage.jpg')] bg-cover bg-center h-[500px] w-full">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-semibold mb-0 sm:mb-6">
          SecondMart — Quality Pre-Owned Bikes
        </h1>
        <SearchBar />
      </div>
    </div>
  );
}
