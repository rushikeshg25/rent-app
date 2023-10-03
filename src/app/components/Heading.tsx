"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 dark:text-[#8E9DB2]  mt-2">
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
