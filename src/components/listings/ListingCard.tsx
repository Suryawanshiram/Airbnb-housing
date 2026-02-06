// import { Listing } from "@/types/listing";
import Image from "next/image";
import { LuHeart } from "react-icons/lu";

interface ListingCardProps {
  listing: Listing;
  currentUser?: {
    id: string;
    favoriteIds: string[];
  } | null;

  hideFavoriteButton?: boolean;
  property?: boolean;
  reservation?: {
    id: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
  };

  trip?: boolean;
  actionLabel?: string;
}

interface Listing {
  id: number;
  title: string;
  location: string;
  image: string;
  price: number;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div className="relative aspect-square rounded-xl overflow-hidden">
        <Image
          src={listing?.image}
          alt="listing-image"
          //   fill
          width={100}
          height={100}
          className="object-cover transition group-hover:scale-105 w-full h-full"
        />
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90">
          <LuHeart size={20} className="text-gray-700" />
        </button>
      </div>

      <div className="space-y-1 mt-3 text-sm">
        <p className="text-gray-500">{listing.location}</p>
        <p className="text-gray-900 truncate">{listing.title}</p>
        <p className="pt-1">
          <span className="text-gray-900 font-semibold">₹{listing.price}</span>
          <span className="text-gray-500">/night</span>
        </p>
      </div>
    </div>
  );
};

export default ListingCard;
