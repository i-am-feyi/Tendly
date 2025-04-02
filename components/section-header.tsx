interface SectionHeaderProps {
  title: string;
  description: string;
}
const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center *:text-center gap-y-4">
      <p className="text-[2.5rem] lg:text-[52px] font-medium max-w-[600px] mx-auto">
        {title}
      </p>
      <p className="text-gray-500 text-lg text-center max-w-[669px] mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
