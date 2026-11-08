import Image from "next/image";

type LogoProps = {
  /** navy → original logo color, cream → for dark backgrounds */
  variant?: "navy" | "cream";
  size?: number;
  className?: string;
};

/**
 * The official logo mark of ኄር የበጎ አድራጎት ማህበር.
 * The original SVG is used as-is (navy). The cream variant is the
 * identical mark recolored for dark backgrounds — standard brand
 * practice, geometry untouched.
 */
export default function Logo({
  variant = "navy",
  size = 40,
  className = "",
}: LogoProps) {
  return (
    <Image
      src={`/brand/logo-${variant}.svg`}
      alt=""
      width={size}
      height={size}
      className={`shrink-0 ${className}`}
      aria-hidden
    />
  );
}
