import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Cob = () => {


      return (
            <div className="w-3/4 mt-20 m-auto">

                  <div className="max-w-screen-lg mx-auto p-5">

                        <div className="grid grid-cols-1 md:grid-cols-12 border rounded-xl shadow-xl shadow-indigo-300">

                              <figure className="relative isolate overflow-hidden bg-gray-900 md:col-span-4 text-white rounded-l-xl">

                                    <a href="">
                                          <img src="https://images.unsplash.com/photo-1521510893357-e9e2da98a99b?q=80&w=1893&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=" hero image" />
                                    </a>

                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>

                                    <figcaption className='absolute p-10 bottom-9'>

                                          <p className="z-10 mt-4 text-sm leading-7 font-regular uppercase">
                                                Contact
                                          </p>

                                          <h3 className="z-10 text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                                                Get In <span className="text-indigo-600">Touch</span>
                                          </h3>

                                          <p className="mt-4 leading-7 text-white">
                                                We're here to assist you if you have any questions or need assistance, please feel free to reach out to us.
                                          </p>

                                          <div className="flex items-center mt-5 gap-3">
                                                <FontAwesomeIcon icon={faMapLocationDot} size="lg" style={{ color: "#5850ec", }} />
                                                <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
                                          </div>

                                          <div className="flex items-center mt-5 gap-3">
                                                <FontAwesomeIcon icon={faPhone} size="lg" style={{ color: "#5850ec", }} />
                                                <span className="text-sm">+93 749 99 65 50</span>
                                          </div>

                                          <div className="flex items-center mt-5 gap-3">
                                                <FontAwesomeIcon icon={faClock} size="lg" style={{ color: "#5850ec", }} />
                                                <span className="text-sm">24/7</span>
                                          </div>
                                    </figcaption>

                              </figure>

                              <form className="md:col-span-8 p-10">

                                    <div className="flex flex-wrap -mx-3 mb-6">

                                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">

                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                      htmlFor="grid-first-name">
                                                      First Name
                                                </label>

                                                <input
                                                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                      id="grid-first-name" type="text" placeholder="Jane"
                                                />


                                          </div>

                                          <div className="w-full md:w-1/2 px-3">

                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                      htmlFor="grid-last-name">
                                                      Last Name
                                                </label>

                                                <input
                                                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                      id="grid-last-name" type="text" placeholder="Doe"
                                                />

                                          </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                          <div className="w-full px-3">

                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                      htmlFor="grid-password">
                                                      Email Address
                                                </label>

                                                <input
                                                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                      id="grid-email" type="email" placeholder="********@*****.**"
                                                />

                                          </div>
                                    </div>

                                    <div className="flex flex-wrap -mx-3 mb-6">
                                          <div className="w-full px-3">

                                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                      htmlFor="grid-password">
                                                      Your Message
                                                </label>

                                                <textarea
                                                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                                </textarea>

                                          </div>

                                          <div className="flex justify-between w-full px-3">

                                                <button
                                                      className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                                                      type="submit">
                                                      Send Message
                                                </button>

                                          </div>

                                    </div>

                              </form>

                        </div>
                  </div>
            </div>
      );
};

export default Cob;
