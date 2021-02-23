import React from 'react';

const RadioButton = ( { change, color, colors } ) => {

  return ( 
    <div>
      <input 
        value={colors}
        checked={colors === color}
        onChange={()=> change(color)} 
        type="radio"
      />
      <span>{color}</span>
    </div>
   );
}
 
export default RadioButton;