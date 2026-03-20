import logo from "../../assets/images/logo2.png";

interface ILogoProps {
  className?: string;
}

export default function Logo({ className }: ILogoProps) {
  return (
    <img src={logo} alt="" className={`rounded-full size-50 ${className}`} />
  );
}
