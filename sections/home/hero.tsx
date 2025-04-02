import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import CardOutline from "@/components/ui/card-outline";
import dashboardImage from "@/public/images/Illustration.png";

const Hero = () => {
  return (
    <section className="container mx-auto max-h-[900px] lg:max-h-screen">
      <CardOutline className="bg-[#F8FAFB] pt-10 lg:pt-[72px] gap-y-4 w-full">
        <div className="px-6 grid justify-center gap-y-4">
          {/* Eyebrow */}
          <div className="inline-flex justify-self-center">
            <CardOutline className="p-2 rounded-full text-sm font-medium flex items-center">
              <div className="flex items-center gap-2">
                {/* SVG CodeSandBox */}
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9 10.4V5.60002C13.8998 5.38959 13.8442 5.18291 13.7389 5.00072C13.6336 4.81853 13.4822 4.66724 13.3 4.56202L9.09998 2.16202C8.91755 2.0567 8.71062 2.00125 8.49998 2.00125C8.28933 2.00125 8.0824 2.0567 7.89998 2.16202L3.69998 4.56202C3.51773 4.66724 3.36636 4.81853 3.26105 5.00072C3.15574 5.18291 3.10019 5.38959 3.09998 5.60002V10.4C3.10019 10.6105 3.15574 10.8171 3.26105 10.9993C3.36636 11.1815 3.51773 11.3328 3.69998 11.438L7.89998 13.838C8.0824 13.9433 8.28933 13.9988 8.49998 13.9988C8.71062 13.9988 8.91755 13.9433 9.09998 13.838L13.3 11.438C13.4822 11.3328 13.6336 11.1815 13.7389 10.9993C13.8442 10.8171 13.8998 10.6105 13.9 10.4Z"
                    stroke="#0080FF"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M13.9 8L11.2 9.56V12.674"
                    stroke="#0080FF"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.79998 12.674V9.56L3.09998 8"
                    stroke="#0080FF"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.26196 4.97601L8.49996 8.00601L13.738 4.97601"
                    stroke="#0080FF"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 14.048V8"
                    stroke="#0080FF"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5.80005 3.32602L8.50005 4.88602L11.2 3.32602"
                    stroke="#0080FF"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Tendly Automation is now live
                <ArrowRight className="size-4 -ml-1" />
              </div>
            </CardOutline>
          </div>

          {/* Heading and Description */}
          <div className="*:text-center grid gap-y-4">
            <p className="text-5xl lg:text-[4.125rem] font-medium leading-snug max-w-[854px] mx-auto">
              Unlock Growth Potential of Customer Experiences
            </p>
            <p className="text-gray-500 text-lg leading-normal md:max-w-xl lg:max-w-[672px] mx-auto">
              Build stronger customer relationships, make more sales and save time. Tendly
              makes it easy to build the exact CRM your business needs.
            </p>
          </div>

          {/* Buttons */}
          <div className="grid gap-4 mt-6 md:flex md:justify-center">
            <Button variant="primary" size="xl">
              Start for Free
            </Button>
            <Button variant="outline" size="xl">
              Talk to Sales
            </Button>
          </div>
        </div>

        {/* Image and Play Button */}
        <div className="relative mt-9 flex justify-center px-2 w-full">
          <Image
            src={dashboardImage}
            alt="Dashboard"
            className="w-full"
            width={4480}
            height={3188}
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#F8FAFB] to-transparent" />
          <div className="absolute inset-0 flex justify-center items-center">
            <Button variant="ghost" className="size-auto p-0" asChild>
              <div className=" bg-[#0080FF]/10 rounded-full border border-[#0080FF]/16 p-[7px] lg:p-3">
                <div className="rounded-full bg-[#003366] p-3 lg:p-5">
                  <Play className="text-white lg:size-8" />
                </div>
              </div>
            </Button>
          </div>
        </div>
      </CardOutline>
    </section>
  );
};

export default Hero;
