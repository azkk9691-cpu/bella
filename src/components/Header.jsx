import logo from "../assets/imgaziz.png";

const Header = () => {
  const links = ["Home", "Product", "Faq", "Contact"];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <img
          src={logo}
          alt="Bella Onojie"
          className="h-12 w-auto object-contain object-left"
        />

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className={`text-base font-semibold transition-colors ${
                link === "Home"
                  ? "text-[#FA4A0C]"
                  : "text-[#252B42] hover:text-[#FA4A0C]"
              }`}
            >
              {link}
            </a>
          ))}
          <button className="rounded-full bg-[#FA4A0C] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-orange-500/20 transition hover:brightness-95">
            Order Now
          </button>
        </nav>

        <button className="rounded-full bg-[#FA4A0C] px-5 py-2 text-sm font-semibold text-white shadow-md shadow-orange-500/20 md:hidden">
          Order
        </button>
      </div>
    </header>
  );
};

export default Header;
