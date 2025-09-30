import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

const SkillBadge = ({
  src,
  alt,
  className,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) => {
  return (
    <figure>
      <Image
        className={cn(
          "h-10 w-max md:h-12 lg:h-16 dark:drop-shadow-[0_0_0.3rem_#ffffff70]",
          className
        )}
        width={100}
        height={100}
        src={src}
        alt={alt}
        priority
      />
    </figure>
  );
};

export default SkillBadge;
