import React, { useEffect, useState } from 'react'
import { getData } from '../services/axios.service'

const AgentList = () => {

      const [agent, setAgent] = useState<any[]>([])

      const agentData = async () => {
            const resp = await getData('/agents')
            setAgent(resp.data)
      }

      useEffect(() => {
            agentData();
      }, [])

      return (


            <div className="w-full bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

                  <div className="w-full items-center justify-between mb-2">

                        <h5 className="text-4xl font-bold leading-none text-gray-900 dark:text-white">Agents</h5>


                  </div>

                  <div className="flow-root">
                        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                              {
                                    agent.map((data: any) => {
                                          return (
                                                <li className="py-2 sm:py-2">

                                                      <div className="flex items-center ">

                                                            <div className="flex-shrink-0">
                                                                  <img className="w-16 h-16 rounded-lg" src={data.image} alt="image" />
                                                            </div>

                                                            <div className="flex-1 min-w-0 ms-2">

                                                                  <p className="text-lg font-bold text-gray-900 truncate dark:text-white">
                                                                        {data.name}
                                                                  </p>

                                                                  <p className="text-lg text-indigo-500 truncate dark:text-gray-400">
                                                                        {data.email}
                                                                  </p>

                                                            </div>

                                                      </div>
                                                </li>
                                          )
                                    })
                              }

                        </ul>
                  </div>
            </div>

      )
}

export default AgentList