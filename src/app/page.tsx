import ListingCard from "@/components/listings/ListingCard";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const listings = [
  {
    id: 1,
    title: "Cozy studio Apartment",
    location: "New York, NY",
    image: "/images/image1.jpeg",
    price: 100,
  },
  {
    id: 2,
    title: "Desert Sea view Apartment",
    location: "Morocco, MA",
    image: "/images/image2.jpeg",
    price: 150,
  },
  {
    id: 3,
    title: "Modern Apartment CBD area",
    location: "New Delhi, India",
    image: "/images/image3.jpeg",
    price: 200,
  },
  {
    id: 4,
    title: "Marina Beach Sea point View",
    location: "Singapore, Singapore",
    image: "/images/image4.jpeg",
    price: 250,
  },
  {
    id: 5,
    title: "Cozy studio Apartment",
    location: "New York, NY",
    image: "/images/image5.jpeg",
    price: 300,
  },
  {
    id: 6,
    title: "Desert Sea view Apartment",
    location: "Morocco, MA",
    image: "/images/image6.jpeg",
    price: 350,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {listings.map((listing) => {
        return <ListingCard key={listing.id} listing={listing} />;
      })}
    </div>
  );
}
