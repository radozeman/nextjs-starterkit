"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import LogoutButton from "@/components/auth/LogoutButton";
import { ThemeToggle } from "@/components/ThemeToggle";

import { NavProps } from "@/types/types";
import { NavItem } from "@/types/types";

export function NavbarDesktop({ nav }: NavProps) {
  return (
    <NavigationMenu className="hidden max-w-screen-lg md:flex justify-between">
      <NavigationMenuList className="flex min-w-full gap-2">
        {!!nav &&
          nav.map((item: NavItem, index: number) => {
            return (
              <NavigationMenuItem key={index + 1}>
                <Link href={item.path} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          })}
      </NavigationMenuList>
      <NavigationMenuList className="flex min-w-full gap-2">
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>

        <NavigationMenuItem>
          <LogoutButton />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
