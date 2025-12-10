import Image from "next/image";
import logo from "@/assets/images/logo.webp";

const Header = () => {
  return (
    <header className="mb-10 text-center">
      <Image
        src={logo}
        alt="Junior IT Academy Logo"
        className="block mx-auto"
        width={200}
        height={200}
      />
      <h1 className="text-3xl font-bold primary-color">
        Junior IT Academy Archive
      </h1>
      <p className="text-accent mt-2">
        A collection of projects and resources from Junior IT Academy
      </p>
    </header>
  );
};

export default Header;
