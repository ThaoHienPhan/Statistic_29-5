import React, { useState } from 'react';

function SwitchInChart({option}) {

  const monthArray = ["1/2023", "2/2023", "3/2023", "4/2023", "5/2023","6/2023","This Month"];
  const weekArray = ['01/5 - 07/5', '08/5 - 14/5', '15/5 - 21/5', '22/5 - 29/5', '22/5 - 29/5','22/5 - 29/5',  'This Week'];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const [activeIndex, setActiveIndex] = useState((option==="Monthly" ? monthArray : weekArray).length - 1);
  const startIndex = Math.max(activeIndex - 5, 0);
  const endIndex = Math.min(activeIndex + 1, (option==="Monthly" ? monthArray : weekArray).length - 1);
  const visibleDates = (option==="Monthly" ? monthArray : weekArray).slice(startIndex, endIndex + 5);

  return (
    <div className='flex justify-around overflow-x-auto whitespace-nowrap'>
      {visibleDates.map((item, index) => (
        <div
          key={index + startIndex}
          className={`w-[100px] text-[#005072] cursor-pointer ${
            activeIndex === startIndex + index ? 'border-gradient font-bold opacity-1' : 'opacity-60'
          }`}
          onClick={() => handleItemClick(startIndex + index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default SwitchInChart;