import React, { useRef } from 'react'
import { BiSolidWasher, BiCloset } from "react-icons/bi";
import { TbAirConditioning, TbMicrowave } from "react-icons/tb";
import { SiSpeedtest } from "react-icons/si";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { motion, useInView } from "framer-motion"

const features = [
      {
            icon: <BiSolidWasher size="lg" />,
            name: "Washer/Dryer"
      },
      {
            icon: <TbAirConditioning size="lg" />,
            name: "Air Conditioning"
      },
      {
            icon: "",
            name: "Dishwasher"
      },
      {
            icon: <SiSpeedtest size="sm" />,
            name: "High Speed Internet Access"
      },
      {
            icon: "",
            name: "Hardwood Floors"
      },
      {
            icon: <BiCloset size="lg" />,
            name: "Walk-In Closets"
      },
      {
            icon: <TbMicrowave size="lg" />,
            name: "Microwave"
      },
      {
            icon: <CgSmartHomeRefrigerator size="lg" />,
            name: "Refrigerator"
      }
]

const ApartmentFeatures = () => {

      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });

      const cardVariants = {
            initial: { y: 50, opacity: 0 },
            animate: { y: 0, opacity: 1 },
      };

      return (
            // <div className='w-full p-2 bg-white rounded-lg sm:p-8 dark:bg-gray-800'>

            //       <h1 className='text-2xl font-bold mb-2'> Apartment Features </h1>

            //       <div className="w-full px-2 py-2 bg-white rounded-lg dark:bg-gray-800  mb-4 flex flex-wrap gap-3">

            //             {
            //                   features.map((feature: any) => {
            //                         return (
            //                               <div className="w-[23%] px-2 py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4 flex flex-col justify-center gap-2">

            //                                     {feature.icon}

            //                                     <h1 className='text-lg font-semibold text-center'> {feature.name}</h1>

            //                               </div>
            //                         )
            //                   })
            //             }

            //       </div>

            // </div>



            <div className='w-full p-2 bg-white rounded-lg sm:p-8 dark:bg-gray-800'>

                  <h1 className='text-3xl font-bold mb-2'> Apartment Features </h1>

                  <ul ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {
                              features.map((feature, index) => {

                                    return (
                                          <motion.li
                                                key={index}
                                                variants={cardVariants}
                                                initial="initial"
                                                animate={isInView ? "animate" : "initial"}
                                                transition={{ duration: 0.2, delay: index * 0.3 }}
                                                className="px-2 py-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center gap-2">

                                                {feature.icon}

                                                <h1 className='text-lg font-semibold text-center mb-2'> {feature.name}</h1>

                                          </motion.li>
                                    )
                              })
                        }


                  </ul>
            </div>

      )
}

export default ApartmentFeatures;