import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="container mx-auto py-24">
      <div className="bg-[#0080FF] rounded-lg py-10 px-6 text-white flex flex-col lg:flex-row lg:items-center lg:p-20">
        <div className="">
          <p className="text-[2.5rem] lg:text-[52px] font-medium lg:max-w-[642px]">
            All-in-one CRM, One Tool for All Your Relationships
          </p>
          <p className="text-white/80 mt-4 lg:text-lg">
            Build stronger customer relationships, make more sales and save time
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:justify-end flex-1">
          <Button variant="primary" className="bg-white text-primary h-16 px-10">
            Get Started
          </Button>
          <Button variant="outline" className="bg-transparent border-white h-16 px-10">
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
