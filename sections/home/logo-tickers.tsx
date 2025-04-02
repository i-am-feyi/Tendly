"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import companyLogo1 from "@/public/images/company_logo-1.png";
import companyLogo2 from "@/public/images/company_logo-2.png";
import companyLogo3 from "@/public/images/company_logo-3.png";
import companyLogo5 from "@/public/images/company_logo-5.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Logos = () => {
  const height = "h-10 lg:h-12";
  return (
    <>
      <Image
        src={companyLogo1}
        alt="companyLogo1"
        className={cn("flex-none w-auto", height)}
      />
      <Image
        src={companyLogo2}
        alt="companyLogo2"
        className={cn("flex-none w-auto", height)}
      />
      <Image
        src={companyLogo3}
        alt="companyLogo3"
        className={cn("flex-none w-auto", height)}
      />
      {/* <Image src={companyLogo4} alt="companyLogo4" className="flex-none w-auto h-8" /> */}
      <Image
        src={companyLogo5}
        alt="companyLogo5"
        className={cn("flex-none w-auto", height)}
      />
    </>
  );
};

const LogoTickerSection = () => {
  return (
    <section className="container mx-auto py-8 lg:py-16 mt-8">
      <div className="flex flex-col gap-6 lg:gap-12">
        {/* Section Text */}
        <div>
          <p className="text-center text-gray-500 text-sm px-6 font-medium">
            Powering CRM for today's startups and tomorrow's leaders
          </p>
        </div>

        {/* Logo Tickers */}
        <div className="flex justify-center">
          <div className="flex overflow-hidden-9 [mask-image:linear-gradient(to_right,transparent_1%,#f7f7f7,#f7f7f7,#f7f7f7,transparent_99%)]">
            <motion.div
              className="flex flex-none gap-16 pr-16"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              <Logos />
              <Logos />
              <Logos />
              <Logos />
              <Logos />
            </motion.div>
          </div>
        </div>

        {/* Customer Review Button */}
        <div className="flex justify-center">
          <Button variant="outline" size="lg">
            See Customer Reviews
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LogoTickerSection;
