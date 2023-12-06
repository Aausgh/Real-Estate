import React from 'react'
import Logo from '../../src/assets/images/logo.png';

const Footer = () => {
      return (


            <>
                  {/* <footer className=" sticky bg-transparent dark:bg-gray-900 m-2">

                        <div className="w-full max-w-screen-lg mx-auto px-4 md:py-8 backdrop-blur-sm rounded-lg shadow border border-gray-200 dark:border-gray-600">

                              <div className="sm:flex sm:items-center sm:justify-between">

                                    <a href="/" className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
                                          <img src={Logo} className="h-14" alt="Logo" />

                                    </a>

                                    <ul className="flex flex-wrap items-center mb-2 text-xl font-medium text-[#0d1321] sm:mb-0 dark:text-gray-400">
                                          <li>
                                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                                          </li>
                                          <li>
                                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                                          </li>
                                          <li>
                                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                                          </li>
                                          <li>
                                                <a href="#" className="hover:underline">Contact</a>
                                          </li>
                                    </ul>
                              </div>

                              <hr className="my-2 border-[#0d1321] sm:mx-auto dark:border-gray-700 lg:my-8" />

                              <span className="block text-lg text-[#0d1321] sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">dreamHouse™</a>. All Rights Reserved.</span>
                        </div>
                  </footer> */}



                  <footer className="max-w-screen-lg mx-auto px-4 md:py-8 backdrop-blur-sm rounded-lg shadow border border-gray-200 dark:border-gray-600 md:flex md:items-center md:justify-between m-3 mt-16">

                        <a href="/" className="flex items-center mb-2 sm:mb-0 space-x-3 rtl:space-x-reverse">
                              <img src={Logo} className="h-10" alt="Logo" />

                        </a>

                        <span className="text-sm text-[#0d1321] sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">dreamHouse™</a>. All Rights Reserved.
                        </span>

                        <ul className="flex flex-wrap items-center mt-3 text-lg font-medium text-[#0d1321] dark:text-gray-400 sm:mt-0">
                              <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                              </li>
                              <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                              </li>
                              <li>
                                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                              </li>
                              <li>
                                    <a href="#" className="hover:underline">Contact</a>
                              </li>
                        </ul>
                  </footer>

            </>




      )
}

export default Footer