import { faArrowLeft, faBath, faBed, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, } from 'react-router-dom'
import { getData } from '../services/axios.service'
import Loader from './Loader'
import ApartmentFeatures from './ApartmentFeatures'
import AgentList from './AgentList'


const ApartmentDetails = () => {

      const [house, setHouse] = useState<any>({});
      const [isLoading, setIsLoading] = useState(true);
      const navigate = useNavigate();
      const { id } = useParams();

      const getApartById = () => {

            setTimeout(async () => {

                  const resp = await getData(`/apartments/${id}`);
                  setHouse(resp.data);
                  console.log(resp.data)
                  setIsLoading(false);

            }, 1000);

      }

      useEffect(() => {
            getApartById();
      }, []);


      const handleGoBack = () => {
            navigate(-1);
      };



      return (
            <>
                  <div className='container w-11/12 m-auto mt-20'>

                        <div
                              className='container w-4/5 m-auto mt-28 items-center gap-3 mb-6 '

                        >
                              <button className='w-auto flex items-center gap-3 p-2 text-white transition-all rounded-full shadow-xl sm:w-auto bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-b dark:shadow-indigo-900 shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-400 hover:-translate-y-px '
                                    onClick={handleGoBack}
                              >
                                    <FontAwesomeIcon icon={faArrowLeft} size="xl" />
                              </button>

                        </div>

                        {isLoading ? (
                              <Loader />
                        ) : (
                              <>

                                    <div className="w-4/5 m-auto mt-2 grid grid-cols-6 md:grid-cols-12 gap-3">
                                          <div className="grid md:col-span-9 col-span-4 gap-4">

                                                <div className="grid gap-4">

                                                      <div>
                                                            <img className="h-[32rem] w-full rounded-lg" src={house.image.mainImg} alt="main img" />
                                                      </div>

                                                      <div className="grid grid-cols-5 gap-4">
                                                            <div>
                                                                  <img className="h-auto max-w-full rounded-lg" src={house.image.img2} alt="img" />
                                                            </div>

                                                            <div>
                                                                  <img className="h-auto max-w-full rounded-lg" src={house.image.img3} alt="img" />
                                                            </div>

                                                            <div>
                                                                  <img className="h-auto max-w-full rounded-lg" src={house.image.img4} alt="img" />
                                                            </div>

                                                            <div>
                                                                  <img className="h-auto max-w-full rounded-lg" src={house.image.img7} alt="img" />
                                                            </div>

                                                            <div>
                                                                  <img className="h-auto max-w-full rounded-lg" src={house.image.img6} alt="img" />
                                                            </div>

                                                      </div>
                                                </div>

                                                <div className="w-full p-2 bg-white rounded-lg sm:p-8 dark:bg-gray-800 ">

                                                      <div className="w-4/5 px-2 py-2 bg-white  rounded-lg dark:bg-gray-800  mb-4">

                                                            <h5 className="mb-2 text-5xl font-extrabold text-gray-900 dark:text-white">

                                                                  {house.name}

                                                            </h5>

                                                            <p className=" font-medium text-gray-700 dark:text-gray-400">

                                                                  <FontAwesomeIcon icon={faLocationDot} /> {house.location.streetName}, {house.location.city}, {house.location.state}

                                                            </p>

                                                      </div>

                                                      <div className="w-2/3 px-2 py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 flex divide-x divide-gray-700">

                                                            <div className='w-1/3 flex flex-col justify-center gap-3'>
                                                                  <h1 className='text-xl font-bold text-center'> Monthly Rent</h1>

                                                                  <h1 className='text-2xl font-bold text-center'> {house.price}</h1>
                                                            </div>

                                                            <div className='w-1/3 flex flex-col justify-center gap-3'>

                                                                  <FontAwesomeIcon icon={faBed} size="xl" />

                                                                  <h1 className='text-2xl font-bold text-center'> {house.bedrooms}</h1>
                                                            </div>

                                                            <div className='w-1/3 flex flex-col justify-center gap-3'>

                                                                  <FontAwesomeIcon icon={faBath} size="xl" />
                                                                  <h1 className='text-2xl font-bold text-center'> {house.bathrooms}</h1>
                                                            </div>

                                                      </div>


                                                      <div className="w-full px-2 py-2 bg-white  rounded-lg dark:bg-gray-800 ">

                                                            <h1 className='text-2xl font-bold mb-2'> About This Apartment</h1>

                                                            <p className=" text-base text-gray-500 sm:text-lg dark:text-gray-400">
                                                                  {house.description}
                                                            </p>

                                                      </div>
                                                </div>

                                                <ApartmentFeatures />

                                          </div>

                                          <div className="grid col-span-2 md:col-span-3 gap-2">

                                                <div className="p-4 w-1/4 h-[27rem] fixed top-0 mt-40">

                                                      <AgentList />

                                                </div>

                                          </div>
                                    </div>
                              </>
                        )}

                  </div>
            </>
      )
}

export default ApartmentDetails