import React from "react";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
import { siteConfig } from "@/siteConfig";
export function Navbar() {
  return (
    <div className="w-full md:max-w-screen-lg m-auto p-2">
      <NavbarDesktop nav={siteConfig[0].nav} />
      <NavbarMobile nav={siteConfig[0].nav} />
    </div>
  );
}
