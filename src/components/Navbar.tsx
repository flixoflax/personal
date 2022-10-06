import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <nav
        className={`bg-neutral-900 ${
          open ? "h-screen fixed" : "absolute"
        } sm:h-16 w-full z-50`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="sm:hidden flex-1">
              <button
                type="button"
                aria-label="Toggle main menu"
                className="text-white h-7 w-7 flex items-center justify-center"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </button>
            </div>
            <h1 className="text-gray-100 font-display text-4xl flex-1 text-center sm:text-left select-none">
              <a href="/">4000</a>
            </h1>
            <div className="text-gray-200 space-x-2 hidden sm:flex flex-1 justify-center">
              <a
                href="#about"
                className="hover:text-white px-4 py-1 rounded-md hover:bg-neutral-800"
              >
                About
              </a>
              <a
                href="#services"
                className="hover:text-white px-4 py-1 rounded-md hover:bg-neutral-800"
              >
                Services
              </a>
              <a
                href="#projects"
                className="hover:text-white px-4 py-1 rounded-md hover:bg-neutral-800"
              >
                Projects
              </a>
              <a
                href="#faq"
                className="hover:text-white px-4 py-1 rounded-md hover:bg-neutral-800"
              >
                FAQ
              </a>
            </div>
            <div className="flex text-gray-200 space-x-5 flex-1 justify-end">
              <a
                href="https://linkedin.com/in/niels-legolas-clormann"
                target={"_blank"}
                className="hover:text-white"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  stroke="currentColor"
                  className="h-6 w-6 sm:w-5 sm:h-5"
                  fill="currentColor"
                >
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
              </a>
              <a
                href="https://github.com/flixoflax"
                target={"_blank"}
                className="hover:text-white"
              >
                <span className="sr-only">Github</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 496 512"
                  stroke="currentColor"
                  className="h-6 w-6 sm:w-5 sm:h-5"
                  fill="currentColor"
                >
                  <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          className={`sm:hidden ${!open && "hidden"} text-white`}
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-8 p-4 text-4xl pt-10">
            <a href="#about" onClick={() => setOpen(!open)}>About</a>
            <a href="#services" onClick={() => setOpen(!open)}>Services</a>
            <a href="#projects" onClick={() => setOpen(!open)}>Projects</a>
            <a href="#faq" onClick={() => setOpen(!open)}>FAQ</a>
          </div>
        </div>
      </nav>
      <div className="pb-16"></div>
    </>
  );
};

export default Navbar;
