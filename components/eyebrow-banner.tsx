import CardOutline from "./ui/card-outline";

interface EyebrowBannerProps {
  text: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const EyebrowBanner = ({ leftIcon, rightIcon, text }: EyebrowBannerProps) => {
  return (
    <div className="inline-flex justify-self-center">
      <CardOutline className="p-2 rounded-full text-sm font-medium flex items-center">
        <div className="flex items-center gap-2">
          {/* SVG */}
          {leftIcon}
          {text}
          {rightIcon}
        </div>
      </CardOutline>
    </div>
  );
};

export default EyebrowBanner;
