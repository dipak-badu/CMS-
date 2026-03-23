import Logo from "../../component/logo/Logo";
import { LuCircleUserRound } from "react-icons/lu";
import { Outlet } from "react-router";
export default function AminLayout() {
  return (
    <>
      <section className="w-full  h-screen bg-gray-100">
        <header className=" py-2 px-5 w-full shadow bg-gray-300  dark:bg-gray-900 dark:text-emerald-50 flex justify-between text-emerald-900 ">
          <div className="flex items-center gap-4">
            <Logo className=" h-10 w-10    "></Logo>
            <span className="text-2xl font-semibold  text-shadow-lg">
              PeaGo
            </span>
          </div>
          <div className="flex item-center gap-2 ">
            <div className="relative inline-flex">
              <span className="inline-flex  overflow-hidden rounded  shadow-sm">
                <button
                  type="button"
                  className=" flex items-center gap-3 text-sm font-medium transition-colors focus:relative cursor-pointer"
                >
                  <LuCircleUserRound className="size-8" />
                  <span>Dipak Badu</span>
                </button>
              </span>

              <div
                role="menu"
                className=" hidden absolute enset-end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
              >
                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                >
                  Storefront
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                >
                  Warehouse
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                >
                  Stock
                </a>

                <button
                  type="button"
                  className="block w-full px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50 ltr:text-left rtl:text-right"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex w-full gap-5">
          <aside className="w-64">
            <div className="flex h-[90vh] flex-col justify-between border-e border-gray-100 bg-white dark:bg-gray-800 dark:text-emerald-50">
              <div className="p-4">
                <ul className=" space-y-1">
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                    >
                      General
                    </a>
                  </li>

                  <li>
                    <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <span className="text-sm font-medium"> Teams </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </summary>

                      <ul className="mt-2 space-y-1 px-4">
                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Banned Users
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Calendar
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Billing
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Invoices
                    </a>
                  </li>

                  <li>
                    <details className="group [&amp;_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                        <span className="text-sm font-medium"> Account </span>

                        <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </summary>

                      <ul className="mt-2 space-y-1 px-4">
                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Details
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Security
                          </a>
                        </li>

                        <li>
                          <a
                            href="#"
                            className="w-full rounded-lg px-4 py-2 [text-align:inherit] text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                          >
                            Logout
                          </a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>

              <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 ">
                <a
                  href="#"
                  className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
                >
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
                    className="size-10 rounded-full object-cover"
                  />

                  <div className=" dark:text-black">
                    <p className="text-xs">
                      <strong className="block font-medium">
                        Eric Frusciante
                      </strong>

                      <span> eric@frusciante.com </span>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </aside>
          <section>
            <Outlet />
          </section>
        </main>
      </section>
    </>
  );
}
