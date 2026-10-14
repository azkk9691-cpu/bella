import logo from "../assets/imgaziz.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-7 sm:flex-row sm:gap-6">
        <img
          src={logo}
          alt="Bella Onojie"
          className="h-11 w-auto object-contain object-left"
        />

        <div className="flex items-center gap-6 text-[#737373]">
          <a href="#" aria-label="Facebook" className="transition hover:text-[#FA4A0C]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M14 8.5V6.8c0-.75.5-.92.86-.92H17V3.1l-2.3-.01c-2.6 0-3.2 1.94-3.2 3.19V8.5H9v3h2.5V21H14v-9.5h2.6l.34-3H14z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="transition hover:text-[#FA4A0C]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 5.9c-.7.32-1.5.54-2.3.64.83-.5 1.46-1.28 1.76-2.22-.78.46-1.63.79-2.54.97A4 4 0 0 0 12 8.9c0 .31.03.62.1.9A11.36 11.36 0 0 1 3.9 4.6a4 4 0 0 0 1.24 5.33 4 4 0 0 1-1.8-.5v.05a4 4 0 0 0 3.2 3.92 4 4 0 0 1-1.8.07 4 4 0 0 0 3.73 2.77A8 8 0 0 1 2 17.9a11.3 11.3 0 0 0 6.13 1.8c7.35 0 11.37-6.1 11.37-11.38v-.52A8 8 0 0 0 22 5.9z" />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="transition hover:text-[#FA4A0C]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>

        <p className="text-sm font-semibold text-[#737373] sm:text-right">
          Copy Right 2022 Bella Onojie
        </p>
      </div>
    </footer>
  );
};

export default Footer;
