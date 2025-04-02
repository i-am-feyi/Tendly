import {
  ChartNoAxesColumn,
  Chrome,
  Funnel,
  MousePointer,
  Shuffle,
  Workflow,
} from "lucide-react";

import EyebrowBanner from "@/components/eyebrow-banner";
import SectionHeader from "@/components/section-header";

const HelpIcon = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.5 14C11.8137 14 14.5 11.3137 14.5 8C14.5 4.68629 11.8137 2 8.5 2C5.18629 2 2.5 4.68629 2.5 8C2.5 11.3137 5.18629 14 8.5 14Z"
      stroke="#0080FF"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 11H8.50533"
      stroke="#0080FF"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.75403 6.2C6.89509 5.799 7.17352 5.46086 7.54 5.24548C7.90648 5.0301 8.33737 4.95136 8.75633 5.02323C9.1753 5.09509 9.55532 5.31291 9.82907 5.63812C10.1028 5.96332 10.2527 6.37491 10.252 6.8C10.252 8 8.45203 8.6 8.45203 8.6"
      stroke="#0080FF"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const list = [
  { title: "Quick Actions", description: "", Icon: MousePointer },
  { title: "Automatic Enrichment", description: "", Icon: Workflow },
  { title: "Chrome Extension", description: "", Icon: Chrome },
  { title: "Contact Analysis", description: "", Icon: ChartNoAxesColumn },
  { title: "Filters", description: "", Icon: Funnel },
  { title: "Tiered Sorting", description: "", Icon: Shuffle },
];

const WhyUsSection = () => {
  return (
    <section className="container mx-auto">
      <div className="py-10 lg:py-[88px]">
        {/* Section Header */}
        <div className="flex flex-col gap-4 items-center">
          <EyebrowBanner text="Why Tendly?" leftIcon={<HelpIcon />} />
          <SectionHeader
            title="Why Should Your CRM be Any Different?"
            description="Ullamcorper diam elit eu eu mauris. Ac eget magna nunc gravida. Fames morbi vitae pharetra pharetra ac ullamcorper ornares ed erat est sem luctus"
          />
        </div>

        {/* Why List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-[72px]">
          {list.map(({ title, Icon }) => (
            <div
              key={title}
              className="border rounded-md p-6 flex flex-col gap-6 h-full shadow-sm"
            >
              <div className="size-12 bg-[#0066CC] rounded-md flex items-center justify-center">
                <Icon className="text-white" />
              </div>
              <div>
                <p className="font-medium text-xl">{title}</p>
                <p className="mt-1 text-gray-500">
                  Netus aliquam integer sodales nisi porttitor fringilla ongue diam enim
                  gravida
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
