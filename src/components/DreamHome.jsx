import FormInput from "./forms/FormInput";
import FormSelect from "./forms/FormSelect";

export default function DreamHome() {
  const locations = [
    "Las Vegas",
    "Reno",
    "Henderson",
    "Carson City",
    "North Las Vegas",
    "Sparks",
  ];

  const types = ["House", "Condo", "Townhouse", "Apartment", "Land"];

  const sortBy = [
    "Newest",
    "Oldest",
    "Least Expensive to Most",
    "Most Expensive to Least",
    "Bedrooms (Low to High)",
    "Bedrooms (High to Low)",
    "Bathrooms (Low to High)",
    "Bathrooms (High to Low)",
  ];

  const bedrooms = ["Any Number", "Studio", "1+", "2+", "3+", "4+", "5+", "6+"];

  const baths = ["Any Number", "1+", "2+", "3+", "4+", "5+", "6+"];

  return (
    <div className="relative py-16 w-full items-stretch">
      <img
        src="/assets/section-banner.webp"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 mx-auto w-[80%] space-y-4">
        <h1 className="font-cinzel text-4xl my-14 text-white text-center">
          Find Your Dream Home
        </h1>

        <div className="bg-[#FAF9F6] h-auto flex flex-col p-10 md:p-12 space-y-3 rounded-lg shadow-md shadow-black/40">
          <h1 className="font-cinzel text-3xl text-dark mb-3">
            Search Listings
          </h1>
          <div className="md:grid md:grid-cols-3 gap-5 flex flex-col ">
            <FormSelect label="Location" options={locations} name="locations" />
            <FormSelect label="Type" options={types} name="types" />
            <FormSelect label="Sort By" options={sortBy} name="sortby" />
          </div>
          <div className="md:grid md:grid-cols-5 md:items-center gap-5 flex flex-col justify-center">
            <div className="flex flex-col  md:grid md:grid-cols-4 md:col-span-4 md:gap-4">
              <FormSelect label="Bedrooms" options={bedrooms} name="bedrooms" />
              <FormSelect label="Baths" options={baths} name="baths" />
              <FormInput
                label="Min Price"
                placeholder="$ Min"
                name="minprice"
              />
              <FormInput
                label="Max Price"
                placeholder="$ Max"
                name="maxprice"
              />
            </div>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition transition-transform duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 md:col-span-1 h-auto items-center mt-2">
              SEARCH NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
