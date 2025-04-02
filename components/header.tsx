import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Customers",
    href: "/customers",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
];

const Header = () => {
  return (
    <header>
      <section className="container mx-auto px-4">
        <div className="flex gap-4 justify-between items-center h-[5.5rem]">
          <div className="flex gap-2 items-center">
            {/* <div className="relative size-[30px]"> */}
            <Image
              src="/images/logo.png"
              alt="Tendly Logo Icon"
              width={120}
              height={120}
            />
            {/* </div> */}
            {/* <span className="font-semibold text-2xl">Tendly</span> */}
          </div>

          {/* Mobile Nav */}
          <div className="flex lg:hidden justify-end items-center">
            <Menu />
          </div>

          {/* Desktop Full Nav */}
          <div className="hidden lg:flex gap-2">
            {navItems.map(({ href, label }) => (
              <div key={label}>
                <Link
                  href={href}
                  className="px-2 font-medium hover:text-primary/70 transition-all"
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>
          <div className="hidden lg:flex gap-2">
            <Button variant="outline" size="lg">
              Login
            </Button>
            <Button variant="primary" size="lg">
              Start for Free
            </Button>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
