"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us & FAQs", href: "/contact" },
];

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [clientPathname, setClientPathname] = React.useState("");

  const pathname = usePathname();

  const toggleMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  React.useEffect(() => {
    setClientPathname(pathname || "");
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-center justify-between p-4 bg-background">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/LogoBlack.png" alt="Q-Line Logo" className="h-6 w-auto md:h-8" />
        </Link>
      </div>

      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex items-center justify-end flex-1">
        <nav>
          <ul className="flex items-center space-x-8">
            {NAV_ITEMS.map(({ name, href }) => (
              <li key={href} className="group">
                <Link
                  href={href}
                  className={cn(
                    "text-black text-sm font-medium transition-colors duration-500 inline-block relative",
                    pathname === href ? "font-semibold" : "hover:text-gray-800",
                    "bg-transparent hover:bg-transparent py-1"
                  )}
                >
                  <span className="relative inline-block pb-1">
                    {name}
                    <span className={cn(
                      "absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                      pathname === href ? "scale-x-100" : ""
                    )} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="z-50 ml-auto"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? "" : <Menu size={32} />}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            onClose={toggleMobileMenu}
            pathname={clientPathname}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu({ onClose, pathname }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 w-full h-screen bg-white/70 backdrop-blur-lg flex flex-col items-center justify-center z-50"
    >
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        aria-label="Close menu"
        className="absolute top-5 right-4 z-50"
      >
        <X size={32} />
      </Button>

      <ul className="flex flex-col items-center space-y-6">
        {NAV_ITEMS.map(({ name, href }) => (
          <NavItem key={href} href={href} pathname={pathname} onClick={onClose}>
            {name}
          </NavItem>
        ))}
      </ul>
    </motion.div>
  );
}

function NavItem({ href, children, pathname, onClick }) {
  const isActive = pathname === href;

  return (
    <li className="flex justify-center group">
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "text-black text-sm font-medium transition-colors duration-500 inline-block relative",
          isActive ? "font-semibold" : "hover:text-gray-800",
          "bg-transparent hover:bg-transparent py-1"
        )}
      >
        <span className="relative inline-block pb-1">
          {children}
          <span className={cn(
            "absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left",
            isActive ? "scale-x-100" : ""
          )} />
        </span>
      </Link>
    </li>
  );
}

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavBar;