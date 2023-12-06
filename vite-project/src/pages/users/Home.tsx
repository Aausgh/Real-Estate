
import hero from '../../assets/images/hero-image.webp'
import { useEffect, useRef, useState } from 'react';
import { getData } from '../../services/axios.service';
import HomeApartList from '../../components/HomeApartList';
import { motion, useInView, } from "framer-motion"
import ContactForm from '../../components/ContactForm';

const Home = () => {

      const [apartment, setApartment] = useState<any[]>([]);

      const getProperty = () => {

            setTimeout(async () => {

                  const resp = await getData('/apartments');
                  setApartment(resp.data);


            }, 1000);
      };

      useEffect(() => {
            getProperty()
      }, [])


      const ref = useRef(null);
      const isInView = useInView(ref, { once: true });

      const cardVariants = {
            initial: { y: 60, opacity: 0 },
            animate: { y: 0, opacity: 1 },
      };


      return (
            <>

                  <div className='container mt-24'>

                        <div className='w-11/12 mt-28 m-auto'>

                              <motion.div
                                    initial={{ opacity: 0.5, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeIn" }}

                                    className=" flex flex-col items-center justify-center  bg-white md:flex-row md:w-3/5 m-auto mb-16 dark:border-gray-700 dark:bg-gray-800 ">

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-[60%]  max-w-screen-lg mx-auto">
                                          <div className="grid gap-2">
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://plus.unsplash.com/premium_photo-1672252617602-e5de5c6aba9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXBhcnRtZW50fGVufDB8fDB8fHww" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1483970533241-d4fff564ed3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ3fHxhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1524549207884-e7d1130ae2f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUxfHxhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                                                </div>
                                          </div>
                                          <div className="grid gap-2">
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1542285902-ed0cf6c8d617?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQ2fHxhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1617624974272-20df684d44fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjUwfHxhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1603920424053-a66f6788ba8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                                </div>
                                          </div>
                                          <div className="grid gap-2">
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1573987116136-8161883a27f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1457377491689-0381aa8d90d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMxfHxhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1555400082-1a2152f840b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjc4fHxhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                                                </div>
                                          </div>
                                          <div className="grid gap-2">
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1476240089339-1d4426572a99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzA0fHxhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1567449303144-b28544478260?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg3fHxhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1516003276715-4702ae06c970?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI4fHxhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                                                </div>
                                                <div>
                                                      <img className="h-auto max-w-full rounded-lg" src="https://images.unsplash.com/photo-1557834005-1d3bf9141826?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjk4fHxhcGFydG1lbnR8ZW58MHx8MHx8fDA%3D" alt="" />
                                                </div>

                                          </div>
                                    </div>



                                    <div className="flex flex-col justify-between p-8 leading-normal w-[40%]">

                                          <h5 className="mb-2 text-6xl font-bold tracking-tight text-gray-900 dark:text-white">Helping People to Find their home</h5>

                                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                dreamHouse can help you easily find a apartment for rent that you'll love.
                                          </p>

                                    </div>
                              </motion.div>
                        </div>

                        <div className='container w-11/12 m-auto'>

                              <figure className="relative max-w-6xl m-auto isolate overflow-hidden rounded-2xl">

                                    <a href="">
                                          <img src={hero} alt=" hero image" />
                                    </a>

                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                    <figcaption className="absolute px-4 text-white bottom-9 ">

                                          <h1 className='z-10 text-5xl font-bold'>Find Your Perfect Future Home</h1>

                                          <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 ">
                                                Search confidently with your trusted source of apartments for rent
                                          </div>

                                    </figcaption>

                              </figure>



                        </div>


                        <div className='w-11/12 mt-20 m-auto '>

                              <div className='w-3/4 m-auto'>
                                    <h5 className='text-3xl font-semibold'>Newly Listed Apartments</h5>
                                    <p>With over 1 million+ apartments for rent on the dreamHouse  </p>
                              </div>


                              <div className='w-11/12 m-auto'>

                                    <div className='w-5/6 m-auto'>
                                          <ul ref={ref} className='grid grid-cols-2 md:grid-cols-4 gap-8 p-2' >


                                                {apartment.slice(0, 4).map((apart, index) => (

                                                      <motion.li
                                                            key={index}
                                                            variants={cardVariants}
                                                            initial="initial"
                                                            animate={isInView ? "animate" : "initial"}
                                                            transition={{ duration: 0.3, delay: index * 0.4 }}
                                                      >

                                                            <HomeApartList apart={apart} />

                                                      </motion.li>
                                                ))}

                                          </ul>
                                    </div>

                              </div>

                        </div>

                        <ContactForm />



                  </div >

            </>
      )
}

export default Home