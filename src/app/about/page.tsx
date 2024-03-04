"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ImageUrls {
  imageURL: string;
  imageURL2: string;
  imageURL3: string;
  imageURL4: string;
  imageURL5: string;
  imageURL6: string;
}

const About: React.FC = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [ref5, inView5] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [ref6, inView6] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [ref7, inView7] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const [imageUrls, setImageUrls] = useState<ImageUrls>({
    imageURL: "",
    imageURL2: "",
    imageURL3: "",
    imageURL4: "",
    imageURL5: "",
    imageURL6: "",
  } as ImageUrls);

  async function getImageURL(): Promise<ImageUrls> {
    try {
      const res = await fetch(
        "https://api.unsplash.com/search/photos?page=1&query=coffeeshop&client_id=iQqxDws2cffxFhuj31_rEqCyFhV0TtVcdpvxEHQqny8"
      );

      const data = await res.json();

      return {
        imageURL: data.results[1].urls.regular,

        imageURL2: data.results[2].urls.regular,

        imageURL3: data.results[3].urls.regular,

        imageURL4: data.results[4].urls.regular,

        imageURL5: data.results[5].urls.regular,

        imageURL6: data.results[6].urls.regular,
      };
    } catch (error) {
      console.error("Error retrieving imageURL:", error);
      throw error;
    }
  }

  useEffect(() => {
    console.log("useEffect triggered");
    async function fetchImageUrls() {
      try {
        const data = await getImageURL();
        setImageUrls(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching image URLs:", error);
      }
    }
    fetchImageUrls();
  }, []);

  return (
    <>
      <Header />

      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 20 }}
        className="flex flex-col items-center justify-center py-8 px-4 h-screen bg-rose-50"
      >
        <h1 className="text-6xl font-light">
          Welcome to Nitro! Where Coffee Meets Elevation
        </h1>
        <p className="w-6/12 pt-4 text-center">
          {`At Nitro, we believe that coffee is more than just a beverage; it's an
          experience. Nestled in the heart of Toronto, Nitro is not just a
          coffee shop — it's a haven for coffee enthusiasts, a place where the
          rich aroma of freshly brewed coffee blends seamlessly with the warm
          ambiance to create an inviting space for all.`}
        </p>
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 20 }}
        className="flex items-center justify-around py-8 px-4 h-screen bg-rose-50"
      >
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="text-3xl pb-4 font-light pl-8">Our Story</h1>
          <p className=" pl-8 pr-2">
            {`Nitro was born out of a passion for exceptional coffee and a desire
            to create a community hub where people could gather, connect, and
            savor the simple pleasures of life. Founded in 2013, our journey
            began with a commitment to quality, sustainability, and a dedication
            to the craft of coffee brewing.`}
          </p>
        </div>
        <div>
          <Image
            src={imageUrls.imageURL}
            width={1600}
            height={800}
            style={{ objectFit: "cover" }}
            className="max-w-[600px]"
            alt="Coffee Beans"
          />
        </div>
      </motion.div>

      <motion.div
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 20 }}
        className="flex items-center justify-around py-8 px-4 h-screen bg-rose-50"
      >
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="text-3xl pb-4 font-light">The Nitro Difference</h1>
          <p>
            {`What sets Nitro apart is our dedication to serving nitrogen-infused
            coffee, a game-changer that transforms your coffee experience.
            Imagine a velvety-smooth, cascading pour that tantalizes your taste
            buds with every sip. Nitro coffee isn't just a drink; it's an
            elevation of your coffee experience to new heights.`}
          </p>
        </div>
        <Image
          src={imageUrls.imageURL2}
          width={1600}
          height={800}
          style={{ objectFit: "cover" }}
          className="max-w-[600px]"
          alt="Coffee Beans"
        />
      </motion.div>
      <motion.div
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView4 ? 1 : 0, y: inView4 ? 0 : 20 }}
        className="flex items-center justify-around py-8 px-4 h-screen bg-rose-50"
      >
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="text-3xl pb-4 font-light">
            Craftsmanship in Every Cup
          </h1>
          <p>
            {`We source only the finest beans from sustainable and ethical coffee
            farms around the world. Our skilled baristas meticulously roast and
            grind these beans in-house to ensure that every cup of Nitro coffee
            is a masterpiece. Whether you prefer a classic espresso, a creamy
            latte, or the signature Nitro cold brew, each sip is a celebration
            of craftsmanship and dedication.`}
          </p>
        </div>
        <Image
          src={imageUrls.imageURL4}
          width={1600}
          height={800}
          style={{ objectFit: "cover" }}
          className="max-w-[600px] max-h-[400px]"
          alt="Coffee Beans"
        />
      </motion.div>
      <motion.div
        ref={ref5}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 20 }}
        className="flex items-center justify-around py-8 px-4 h-screen bg-rose-50"
      >
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="text-3xl pb-4 font-light">Community and Connection</h1>
          <p>
            {`At Nitro, we believe that a coffee shop is more than just a place to
            grab a cup on the go; it's a gathering spot for the community. Our
            cozy seating, free Wi-Fi, and warm ambiance make Nitro the perfect
            place for work meetings, study sessions, or catching up with
            friends. We're not just a coffee shop; we're a home away from home.`}
          </p>
        </div>
        <Image
          src={imageUrls.imageURL3}
          width={1600}
          height={800}
          style={{ objectFit: "cover" }}
          className="max-w-[600px]"
          alt="Coffee Beans"
        />
      </motion.div>
      <motion.div
        ref={ref6}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 20 }}
        className="flex items-center justify-around py-8 px-4 h-screen bg-rose-50"
      >
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="text-3xl pb-4 font-light">Sustainability Matters</h1>
          <p>
            {`We are committed to sustainability and minimizing our environmental
            footprint. From using compostable cups to sourcing coffee beans from
            eco-friendly farms, Nitro is dedicated to making a positive impact
            on both your coffee experience and the planet.`}
          </p>
        </div>
        <Image
          src={imageUrls.imageURL5}
          width={1600}
          height={800}
          style={{ objectFit: "cover" }}
          className="max-w-[600px]"
          alt="Coffee Beans"
        />
      </motion.div>
      <motion.div
        ref={ref7}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView7 ? 1 : 0, y: inView7 ? 0 : 20 }}
        className="flex items-center justify-around py-8 px-4 h-screen bg-rose-50"
      >
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="text-3xl pb-4 font-light">
            Join Us on the Nitro Journey
          </h1>
          <p>
            {`Whether you're a coffee connoisseur or just looking for a welcoming
            place to unwind, Nitro invites you to join us on a journey of
            flavor, community, and connection. Experience the difference that
            Nitro-infused coffee can make and become a part of our growing
            community of coffee lovers.`}
          </p>
        </div>
        {!imageUrls.imageURL6 || imageUrls.imageURL6 === "" ? (
          <div>Loading...</div>
        ) : (
          <Image
            src={imageUrls.imageURL6!}
            width={1600}
            height={800}
            style={{ objectFit: "cover" }}
            className="max-w-[600px]"
            alt="Coffee Beans"
          />
        )}
      </motion.div>
      <Footer />
    </>
  );
};

export default About;
