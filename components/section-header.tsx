interface SectionHeaderProps {
  title: string;
  description: string;
}
const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="flex flex-col items-center *:text-center gap-y-4 max-w-[669px] mx-auto">
      <p className="text-[2.5rem] lg:text-[52px] font-medium">{title}</p>
      <p className="text-gray-500 text-lg text-center">{description}</p>
    </div>
  );
};

export default SectionHeader;
