import * as React from "react";
import Link from "next/link";

const routes = [
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Shows",
    route: "/shows",
  },
  {
    title: "Episodes",
    route: "/episodes",
  },
  {
    title: "People",
    route: "/people",
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="bg-gray-900">
      <nav className="container mx-auto">
        <div className="px-2 sm:px-8 py-0 sm:py-1">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                onClick={() => setMobileOpen((prev) => !prev)}
              >
                <svg
                  className={`${mobileOpen ? "hidden" : "block"} block h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`${mobileOpen ? "block" : "hidden"} block h-6 w-6`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <div className="block">
                      <div className="flex items-center">
                        <img
                          className="block h-10 w-auto"
                          src="http://thenexus.tv/wp-content/themes/coprime/resources/images/nx-logo-grayscale.png"
                          alt=""
                        />
                        <span className="block leading-none tracking-wide text-5xl text-shadow text-white font-league-gothic uppercase mt-1 ml-3">
                          The Nexus
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex justify-end items-center h-full">
                  <ul className="list-none flex">
                    {routes.map((route) => (
                      <li key={route.route}>
                        <Link href={route.route}>
                          <a className="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-100 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                            {route.title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${mobileOpen ? "block" : "hidden"} sm:hidden`}>
          <div className="px-2 pt-2 pb-3">
            <ul className="list-none">
              {routes.map((route) => (
                <li key={route.route}>
                  <Link href={route.route}>
                    <a className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out">
                      {route.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
