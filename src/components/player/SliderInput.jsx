
import React, { useState } from "react";



export default function SliderInput() {
    const [value, setValue] = React.useState(50); 

    const handleSliderChange = (e) => {
      setValue(e.target.value);
    };
  
    return (
      <div className="w-full">
        <input
          type="range"
          value={value}
          onChange={handleSliderChange}
          className="custom-slider"
          min="0"
          max="100"
          step="1"
        />
        <p className="text-center text-gray-600 mt-2">Value: {value}</p>
      </div>
    );
}
