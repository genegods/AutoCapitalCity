import React, {useState} from "react";
import CountryData from "./CountryData.json";
import { v4 as uuidv4 } from "uuid";

const CapitalApp = () => {

const [countries,setCountries] = useState(CountryData);
  console.log("countries", countries);

  const [searchCountry, setSearchCountry] = useState();
  console.log("searchCountry", searchCountry);

  const [city, setCity] = useState()


  const capital = countries.find((obj) => {
    if (obj.country === searchCountry) {
      return true;
    }
    return false;
  });

  console.log("capital", capital);

  return (
    <React.Fragment>
      <section>
        <div className="bg-white w-auto h-96 mx-5 mt-40 rounded-lg sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
          {/* header section */}
          <div className="h-28 flex justify-center items-center shadow">
            <p className="uppercase font-bold text-4xl text-center">
              {" "}
              Select Country / <br />
              auto capital City
            </p>
          </div>

          {/* body section */}
          <div className="grid justify-center mt-14 mx-5">
            <div className="space-y-10">
              <select
               value={searchCountry}
               onChange={(e) => setSearchCountry(e.target.value)}
               className=" w-full h-14 text-xl rounded-lg">
                <option value="" hidden>
                  --Select Country--
                </option>
                {
                countries.map((item) => {
                  return (
                    <option key={uuidv4()} value={item.country}>
                      {item.country}
                    </option>
                  );
                })}
              </select>

              <input
                type="text"
                placeholder="Capital"
                className="w-full h-14 text-xl rounded-lg"
                value={ capital && capital.city || ""}
                onChange={e =>setCity(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CapitalApp;
