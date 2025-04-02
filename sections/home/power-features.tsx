import Image from "next/image";
import EyebrowBanner from "@/components/eyebrow-banner";
import CardOutline from "@/components/ui/card-outline";

import featureImage1 from "@/public/images/feature-1.png";
import featureImage2 from "@/public/images/feature-2.png";
import featureImage3 from "@/public/images/feature-3.png";
import featureImage4 from "@/public/images/feature-4.png";
import SectionHeader from "@/components/section-header";

const Zap = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.09998 2L3.09998 9.2H8.49998L7.89998 14L13.9 6.8H8.49998L9.09998 2Z"
      stroke="#0080FF"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const featureContent = [
  {
    image: featureImage1,
    title: "Content Management",
    description:
      "Be more organized with your customer, easily track conversations, know the history and deliver more personal experiences",
  },
  {
    image: featureImage2,
    title: "Sales Pipeline",
    description:
      "Be more organized with your customer, easily track conversations, know the history and deliver more personal experiences",
  },
  {
    image: featureImage3,
    title: "Sales Analytics",
    description:
      "Be more organized with your customer, easily track conversations, know the history and deliver more personal experiences",
  },
  {
    image: featureImage4,
    title: "Task Management",
    description:
      "Be more organized with your customer, easily track conversations, know the history and deliver more personal experiences",
  },
];

const PowerFeatures = () => {
  return (
    <section className="py-8 lg:py-16 container mx-auto">
      <CardOutline className="py-10 lg:py-[4.5rem]">
        <div className="flex flex-col items-center gap-y-4">
          <EyebrowBanner text="Power Features" leftIcon={<Zap />} />
          <SectionHeader
            title="Features That’s Up Close and Personal"
            description="Strong relationships start with strong interactions. Our feature lets you
              personalize customer experiences, building loyalty and revenue."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-16 px-4 lg:px-10 mt-10 lg:mt-[72px]">
          {featureContent.map(({ description, image, title }) => (
            <div key={title} className="group">
              <div className="relative border rounded-md overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="font-medium text-xl mt-5">{title}</p>
              <p className="text-gray-500 mt-1">{description}</p>
            </div>
          ))}
        </div>
      </CardOutline>
    </section>
  );
};

export default PowerFeatures;
