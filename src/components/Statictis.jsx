import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import MonthBarChart from "./Chart/MonthBarChart";
import WeekBarChart from "./Chart/WeekBarChart";
import Switch from "./GeneralSwitch";
import SwitchInChart from "./SwitchInChart";
import Amount from "./Amount";
import { AiOutlineArrowDown } from "react-icons/ai";
import Filter from "./Dropdown";

Statictis.propTypes = {};

function Statictis(props) {
  const [option, setOption] = useState("Monthly");
  const [checkedArray, setCheckedArray] = useState([]);

  const handleOption = (option) => {
    setOption(option);
  };

  const handleFilterChange = (checkedArray) => {
    setCheckedArray(checkedArray);
  };

  return (
    <div className="my-5 mx-28 select-none">
      <h1 className="inline-block text-5xl text-center bg-gradient-to-r from-[#005072] to-[#AEBD38] bg-clip-text text-transparent ">Statistic</h1>
      <div className="flex justify-end">
        <Switch handleOption={handleOption}/>  
      </div>
      <div className="py-[20px]">
          <SwitchInChart option={option} /> 
      </div>
      <div className="mb-[100px] flex justify-end">
        <Filter handleFilterChange={handleFilterChange} />
      </div>
      <div className="relative"> 
        <h2 className="text-2xl text-left text-[#005072] mb-[10px]">Prototype statistic</h2>
        <div className="bg-[#F3F3F3]/[.4] w-full rounded">
          <div className="w-[800px] m-auto ">
            {option === 'Monthly' ? <MonthBarChart checkedArray={checkedArray} /> : <WeekBarChart/>}
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl text-left text-[#005072] my-[20px] ">Interactions statistic</h2>
        <div className="flex justify-between mt-[10px] text-center">     
          {/* if more than 4 components => flex : nowarp */}
          <Amount />
          <Amount />
          <Amount />
          <div className="bg-[#F3F3F3]/[.7] w-[300px] h-[150px] flex justify-center items-center rounded py-[10px]">
            <div>
              <p className="text-lg text-[#005072]">Visit Amount</p>
              <div className="text-5xl font-semibold text-[#005072] ">10,000</div>
              <div className="text-small text-[red] mt-[7px] opacity-60 relative">
                <div className='inline-block absolute top-[3px] left-[41px]'>
                  <AiOutlineArrowDown />
                </div>
                20%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statictis;
