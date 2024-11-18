import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-8 py-3">
    <Link href={"/"}>
    <Image
      src="/logoID.png"
      alt="Sistema de Gestion de Estudiantes"
      width={50}
      height={17}
      priority
    />
    </Link>
    <Link
    href={"/create"}
    className="inline-flex items-center px-4 py-2 font-medium text-center text-white bg-green-500 hover:bg-green-700 rounded-lg"
  >
    Agregar
  </Link>
  </nav>
  );
};

export default Navbar;
