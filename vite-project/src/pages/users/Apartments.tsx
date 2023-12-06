import { useEffect, useState } from 'react';
import { getData } from '../../services/axios.service';
import ApartmentList from '../../components/ApartmentList';
import Loader from '../../components/Loader'
import Filter from '../../components/Filter';

const Apartments = () => {
      const [apartments, setApartments] = useState<any[]>([]);
      const [isLoading, setIsLoading] = useState(true);
      const [selectedBedrooms, setSelectedBedrooms] = useState<string | null>(null);
      const [bedroomOptions, setBedroomOptions] = useState<string[]>([]);
      const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
      const [searchQuery, setSearchQuery] = useState<string>('');


      const getProperty = () => {

            setTimeout(async () => {

                  const resp = await getData('/apartments');
                  const apartmentData = resp.data;
                  setApartments(apartmentData);
                  const uniqueBedrooms = Array.from(
                        new Set(apartmentData.map((apartment: any) => apartment.bedrooms))
                  );
                  setBedroomOptions(['', ...uniqueBedrooms]);
                  setIsLoading(false);

            }, 1000);
      };

      useEffect(() => {
            getProperty()
      }, [])


      const handleFilterChange = (bedrooms: string | null) => {
            setSelectedBedrooms(bedrooms);

      };

      const toggleFilterModal = () => {
            setIsFilterModalOpen(!isFilterModalOpen);
      };

      const handleSearchChange = (query: string) => {
            setSearchQuery(query);
      };

      const filteredApartments = apartments
            .filter((apartment) => !selectedBedrooms || apartment.bedrooms === selectedBedrooms)
            .filter((apartment) =>
                  searchQuery ? apartment.name.toLowerCase().includes(searchQuery.toLowerCase()) : true
            );




      return (
            <>
                  {isLoading ? (
                        <Loader />
                  ) : (
                        <>
                              <div className='container w-4/5 m-auto mt-24'>
                                    <div className='w-4/5 m-auto flex justify-between items-center'>

                                          <button
                                                className="inline-block w-auto min-w-[4rem] mb-5 px-6 py-4 text-white transition-all rounded-full shadow-xl sm:w-auto bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-b dark:shadow-indigo-900 shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-400 hover:-translate-y-px "
                                                onClick={toggleFilterModal}
                                          >

                                                Filter

                                          </button>

                                          {/* Filter Modal */}
                                          {isFilterModalOpen && (
                                                <Filter
                                                      options={bedroomOptions}
                                                      selectedValue={selectedBedrooms}
                                                      onChange={handleFilterChange}
                                                />
                                          )}

                                          <div className='w-1/3'>
                                                <input
                                                      type="text"
                                                      placeholder="Search by name"
                                                      value={searchQuery}
                                                      onChange={(e) => handleSearchChange(e.target.value)}
                                                      className="p-4 rounded-full w-full h-12 border-2 border-blue-600 bg-white shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-400 hover:-translate-y-px  "
                                                />

                                          </div>
                                    </div>

                                    <div className='m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2'>
                                          {filteredApartments.map((apart) => (
                                                <ApartmentList key={apart.id} apart={apart} />
                                          ))}
                                    </div>
                              </div>
                        </>
                  )}
            </>
      );
};

export default Apartments;
