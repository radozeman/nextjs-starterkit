import React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import { Menu } from "lucide-react";

import { NavProps } from "@/types/types";
import { NavItem } from "@/types/types";

export function NavbarMobile({ nav, ...props }: NavProps) {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="link">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col pt-10 items-center">
          {!!nav &&
            nav.map((item: NavItem, index: number) => {
              return (
                <SheetClose key={index + 1} asChild>
                  <Link
                    href={item.path}
                    className={buttonVariants({ variant: "ghost" })}
                  >
                    {item.title}
                  </Link>
                </SheetClose>
              );
            })}
        </SheetContent>
      </Sheet>
    </div>
  );
}
