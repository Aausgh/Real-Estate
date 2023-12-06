import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

const ApartmentList = ({ apart }: any) => {
      const navigate = useNavigate();

      return (
            <div className="card-container w-full max-w-sm mt-4">
                  <div className="card bg-white border border-gray-300 rounded-[10rem] shadow dark:bg-gray-800 dark:border-gray-700 overflow-visible hover:shadow-2xl hover:shadow-indigo-400 transition-all duration-300 transform hover:translate-y-[-0.6rem] ">

                        <div onClick={() => navigate(`/apartments/${apart.id}`)} className="p-4 block ">
                              <img
                                    className=" rounded-[10rem] object-cover w-full h-72 "
                                    src={apart.image.mainImg}
                                    alt="product image"
                              />

                        </div>

                        <div className="px-5 pb-5 text-center">

                              <span className="text-3xl font-bold text-gray-900 dark:text-white">{apart.price}</span>

                              <div className="block mt-2">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                          {apart.name}
                                    </h5>
                              </div>

                              <div className="flex items-center justify-center mt-2">

                                    <FontAwesomeIcon icon={faLocationDot} />

                                    <span className="text-xl text-gray-900 dark:text-white ms-1">{apart.location.city}</span>

                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default ApartmentList;
