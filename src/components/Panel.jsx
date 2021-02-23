import React from 'react';
import RadioButton from './subcomponents/RadioButton'

const colorsList = [
  {
    id: 0,
    color: 'Red',
  },
  {
    id: 1,
    color: 'Green',
  },
  {
    id: 2,
    color: 'Blue',
  },
];

const Panel = ({change, colors}) => {

  const radioButtons = colorsList.map(color => 
    <RadioButton 
      key={color.id} 
      id={color.id} 
      color={color.color} 
      change={change} 
      colors={colors} 
    />
  )

  return ( 
    <>
      <aside>
        <p>Panel</p>
        {radioButtons}
      </aside>
    </>
   );
}
 
export default Panel;