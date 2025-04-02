import { Button } from "@/components/ui/button";
import CardOutline from "@/components/ui/card-outline";
import Sandbox from "@/public/icons/codesandbox.svg";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto max-h-[900px] lg:max-h-screen">
      <CardOutline className="bg-[#F8FAFB] pt-10 lg:pt-[72px] gap-y-4 w-full">
        <div className="px-6 grid justify-center gap-y-4">
          {/* Eyebrow */}
          <div className="inline-flex justify-self-center">
            <CardOutline className="p-2 rounded-full text-sm font-medium flex items-center">
              <div className="flex items-center gap-2">
                {/* <Sandbox /> */}
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
            src="/images/illustration.png"
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
