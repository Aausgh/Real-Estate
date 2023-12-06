import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useNavigate } from 'react-router-dom';



const HomeApartList = ({ apart }: any) => {

      const navigate = useNavigate();



      return (



            <div className="card-container w-full max-w-sm transform transition-transform hover:scale-105">
                  <div className="card  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        <a onClick={() => navigate(`/apartments/${apart.id}`)} >

                              <img className="h-52 w-11/12 m-auto mt-2  rounded-lg" src={apart.image.mainImg} alt="main Img" />
                        </a>

                        <div className="px-5 pb-5">

                              <span className="text-2xl font-bold text-gray-900 dark:text-white">{apart.price}</span>

                              <a href={'/apartmentDetails'}>
                                    <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                                          {apart.name.length > 20
                                                ? apart.name.slice(0, 20) + "..."
                                                : apart.name}
                                    </h5>
                              </a>

                              <div className='flex items-center align-middle'>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <span className="text-md text-gray-900 dark:text-white ms-1">{apart.location.city}</span>
                              </div>
                        </div>
                  </div>
            </div>


      )
}

export default HomeApartList;