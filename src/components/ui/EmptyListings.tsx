"use client";

import { useRouter } from "next/navigation";
import Button from "./Button";

interface EmptyListingsProps {
  title: string;
  subtitle: string;
  filter?: boolean;
}

const EmptyListings = ({ title, subtitle, filter }: EmptyListingsProps) => {
  const router = useRouter();
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      {filter && (
        <Button onClick={() => router.push("/")}>Clear Filters</Button>
      )}
    </div>
  );
};

export default EmptyListings;
