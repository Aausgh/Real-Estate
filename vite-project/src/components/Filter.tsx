// Filter.tsx

import React from 'react';

interface FilterProps {
      options: string[];
      selectedValue: string | null;
      onChange: (value: string | null) => void;

}

const Filter: React.FC<FilterProps> = ({ options, selectedValue, onChange }) => {
      return (
            <div className="filter-modal justify-center items-center w-2/3 h-full">
                  <div className="relative p-4 w-full max-w-sm h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 h-56 w-2/3 text-center">


                              <div className="p-4 md:p-5">

                                    <select
                                          id="bedroomsFilter"
                                          onChange={(e) => onChange(e.target.value)}
                                          value={selectedValue || ''}
                                          className="w-36 h-10 border-2 border-black focus:outline-none focus:border-black text-black rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">

                                          {options.map((option, index) => (
                                                <option key={index} value={option}>
                                                      {option === '' ? 'Bedrooms' : `${option}`}
                                                </option>
                                          ))}
                                    </select>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Filter;
