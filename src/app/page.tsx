import { Metadata } from "next";
import HomePageFour from "./(homes)/home-3/page";

export const metadata: Metadata = {
  title: "Claudia - Portfolio",
};

export default function Home() {
  return (
    <>
      <HomePageFour />
    </>
  );
}
