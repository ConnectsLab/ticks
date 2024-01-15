import Link from "next/link";
import MobileNav from "./MobileNav";

const links = [
  {
    href: "/see-events",
    title: "see events ",
  },
  {
    href: "/sign-up",
    title: "become a vendor",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="bg-slate-900 rounded-full backdrop-blur-sm px-6 py-4 w-[90%] md:w-[80%] mx-auto ">
        {/* container */}
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-head font-bold text-3xl text-violet-50"
          >
            TICKS
          </Link>
          <div className="font-body capitalize text-violet-50 font-light space-x-6">
            {links.map((link) => (
              <Link href={link.href} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <MobileNav />
    </>
  );
};

export default Navbar;
