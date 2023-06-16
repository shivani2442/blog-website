import React from "react";

const News = () => {
  return (
    <>
      <div className="sm:text-3xl md:text-5xl lg:text-6xl font-bold mt-10 px-10 text-center">
        TRENDING NEWS
      </div>
      <div className="flex px-10 items-center my-5 justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden shadow-lg hover:scale-105 duration-300 rounded-t-xl">
            <div className="h-135 w-75">
              <img
                src="https://images.cnbctv18.com/wp-content/uploads/2023/06/Cyclone-3-1019x573.jpg?impolicy=website&width=600&height=264"
                className="w-full rounded-t-xl object-cover items-center"
              />
              <div className="flex justify-between px-2 py-2">
                <a
                  href="#"
                  className="font-bold text-black text-xl m-2 p-2 hover:text-gray-600"
                >
                  Cyclone Biparjoy LIVE Updates:'Destructive' winds uproot
                  trees,power poles as landfall hits Gujarat coast
                </a>
              </div>
              <div className=" justify-between px-2">
                <p className="font-small text-gray-900 text-sm my-4 mx-3">
                  Cyclone Biparjoy's landfall process has commenced around 7 pm
                  on Thursday evening in Saurashtra and Kutch regions of
                  Gujarat.According to the India Meteorological Department
                  (IMD), the landfall process will continue up to midnight.
                </p>
                <button className="px-3 py-2 m-4 items-center text-semibold text-black bg-blue-500 hover:text-white shadow-inner">
                  Read More!
                </button>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden shadow-lg hover:scale-105 duration-300 rounded-t-xl">
            <div className="h-135 w-75">
              <img
                src="https://images.indianexpress.com/2023/06/jairam-ramesh-2.jpeg.jpg?w=640"
                className="w=full rounded-t-xl object-cover items-center"
              />
              <div className="flex justify-between px-2 py-2">
                <a
                  href="#"
                  className="font-bold text-black text-xl m-2 p-2 hover:text-gray-600"
                >
                  Uniform Civil Code: Congress leads charge against govt plans
                </a>
              </div>
              <div className=" justify-between px-2">
                <p className="font-small text-gray-900 text-sm my-4 mx-3">
                  The Law Commission of India’s move to seek the views of the
                  public and religious organisations on the Uniform Civil Code
                  (UCC) can potentially bring divergent views in the Opposition
                  unity camp out in the open, at a time when the latter are
                  gearing up to hold a conclave.
                </p>
                <button className="px-3 py-2 m-4 items-center text-semibold text-black bg-blue-500 hover:text-white shadow-inner">
                  Read More!
                </button>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden shadow-lg hover:scale-105 duration-300 rounded-t-xl">
            <div className="h-135 w-75">
              <img
                src="https://images.indianexpress.com/2023/06/mumbai-high-tide-1200.jpg?w=750"
                className="w=full rounded-t-xl object-cover items-center"
              />
              <div className="flex justify-between px-2 py-2">
                <a
                  href="#"
                  className="font-bold text-black text-xl m-2 p-2 hover:text-gray-600"
                >
                  Mumbai News Live Updates: Rough sea waves seen at Gateway of
                  India as Cyclone likely to make landfall in Gujarat
                </a>
              </div>
              <div className=" justify-between px-2">
                <p className="font-small text-gray-900 text-sm my-4 mx-2">
                  Rough sea waves were seen at the Gateway of India as cyclone
                  Biparjoy is expected to make landfall in Gujarat on Thursday.
                  High tide is also expected in Mumbai, Regional Meteorological
                  Centre, Mumbai, said.
                </p>
                <button className="px-3 py-2 m-4 items-center text-semibold text-black bg-blue-500 hover:text-white shadow-inner">
                  Read More!
                </button>
              </div>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden shadow-lg hover:scale-105 duration-300 rounded-t-xl">
            <div className="h-135 w-75">
              <img
                src="https://www.livemint.com/lm-img/img/2023/06/13/600x338/Mumbai--India---April-12--2023--Commuters-get-off-_1686659056677_1686659068183.jpg"
                className="w=full rounded-t-xl object-cover items-center"
              />
              <div className="flex justify-between px-2 py-2">
                <a
                  href="#"
                  className="font-bold text-black text-xl m-2 p-2 hover:text-gray-600"
                >
                  Mumbai locals running late due to disruption at suburban Malad
                  station
                </a>
              </div>
              <div className=" justify-between px-2">
                <p className="font-small text-gray-900 text-sm my-4 mx-3">
                  Mumbai local trains on the Western Railway line in Mumbai,
                  Maharashtra were disrupted due to a signal failure near Malad
                  station over the Mumbai Suburban section. According to the
                  Western Railways, down slow and fast lines have been
                  rectified.
                </p>
                <button className="px-3 py-2 m-4 items-center text-semibold text-black bg-blue-500 hover:text-white shadow-inner">
                  Read More!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
