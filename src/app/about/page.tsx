"use client";
import Header from "@/components/Header";
import Footer from "@/components/footer";
import Image from "next/image";
import beans from "../../../public/assets/coffeebeans-hero.png";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
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

  const [ref8, inView8] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

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
          At Nitro, we believe that coffee is more than just a beverage; it's an
          experience. Nestled in the heart of Toronto, Nitro is not just a
          coffee shop — it's a haven for coffee enthusiasts, a place where the
          rich aroma of freshly brewed coffee blends seamlessly with the warm
          ambiance to create an inviting space for all.
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
            Nitro was born out of a passion for exceptional coffee and a desire
            to create a community hub where people could gather, connect, and
            savor the simple pleasures of life. Founded in 2013, our journey
            began with a commitment to quality, sustainability, and a dedication
            to the craft of coffee brewing.
          </p>
        </div>
        <Image src={beans} alt="Coffee Beans" />
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
            What sets Nitro apart is our dedication to serving nitrogen-infused
            coffee, a game-changer that transforms your coffee experience.
            Imagine a velvety-smooth, cascading pour that tantalizes your taste
            buds with every sip. Nitro coffee isn't just a drink; it's an
            elevation of your coffee experience to new heights.
          </p>
        </div>
        <Image src={beans} alt="Coffee Beans" />
      </motion.div>
      <motion.div
        ref={ref5}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView5 ? 1 : 0, y: inView5 ? 0 : 20 }}
        className="flex items-center justify-around py-8 px-4 h-screen bg-rose-50"
      >
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="text-3xl pb-4 font-light">
            Craftsmanship in Every Cup
          </h1>
          <p>
            We source only the finest beans from sustainable and ethical coffee
            farms around the world. Our skilled baristas meticulously roast and
            grind these beans in-house to ensure that every cup of Nitro coffee
            is a masterpiece. Whether you prefer a classic espresso, a creamy
            latte, or the signature Nitro cold brew, each sip is a celebration
            of craftsmanship and dedication.
          </p>
        </div>
        <Image src={beans} alt="Coffee Beans" />
      </motion.div>
      <motion.div
        ref={ref6}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView6 ? 1 : 0, y: inView6 ? 0 : 20 }}
        className="flex items-center justify-around py-8 px-4 h-screen bg-rose-50"
      >
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="text-3xl pb-4 font-light">Community and Connection</h1>
          <p>
            At Nitro, we believe that a coffee shop is more than just a place to
            grab a cup on the go; it's a gathering spot for the community. Our
            cozy seating, free Wi-Fi, and warm ambiance make Nitro the perfect
            place for work meetings, study sessions, or catching up with
            friends. We're not just a coffee shop; we're a home away from home.
          </p>
        </div>
        <Image src={beans} alt="Coffee Beans" />
      </motion.div>
      <motion.div
        ref={ref7}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView7 ? 1 : 0, y: inView7 ? 0 : 20 }}
        className="flex items-center justify-around py-8 px-4 h-screen bg-rose-50"
      >
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="text-3xl pb-4 font-light">Sustainability Matters</h1>
          <p>
            We are committed to sustainability and minimizing our environmental
            footprint. From using compostable cups to sourcing coffee beans from
            eco-friendly farms, Nitro is dedicated to making a positive impact
            on both your coffee experience and the planet.
          </p>
        </div>
        <Image src={beans} alt="Coffee Beans" />
      </motion.div>
      <motion.div
        ref={ref8}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView8 ? 1 : 0, y: inView8 ? 0 : 20 }}
        className="flex items-center justify-around py-8 px-4 h-screen bg-rose-50"
      >
        <div className="flex flex-col justify-center w-4/12">
          <h1 className="text-3xl pb-4 font-light">
            Join Us on the Nitro Journey
          </h1>
          <p>
            Whether you're a coffee connoisseur or just looking for a welcoming
            place to unwind, Nitro invites you to join us on a journey of
            flavor, community, and connection. Experience the difference that
            Nitro-infused coffee can make and become a part of our growing
            community of coffee lovers.
          </p>
        </div>
        <Image src={beans} alt="Coffee Beans" />
      </motion.div>
      <Footer />
    </>
  );
};

export default About;