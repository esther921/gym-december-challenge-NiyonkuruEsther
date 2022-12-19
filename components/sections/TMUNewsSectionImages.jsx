import Image from "next/image";

export const TMUNewsCard = ({
  src,
  caption,
  heading,
  paragraph,
  date,
  time,
}) => {
  return (
    <div className="flex flex-col w-80  text-primary hover:text-skyBlue cursor-pointer gap-y-3 text-darkestBlue">
      <Image
        src={src}
        alt="image"
        width={300}
        height={400}
        className="w-full flex flex-col"
      />
      <h3 className="font-bold">{caption}</h3>
      <h3 className="font-bold text-xl">{heading}</h3>
      <p className="text-sm">{paragraph}</p>
      <div className="text-sm flex justify-between">
        <span>{date}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};
