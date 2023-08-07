/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Color } from './components/Color';
const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">{
        <>
        <Color color="red" setSelectedColor={setSelectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor}/>
         </>
  }</div>
    </div>
  );
};

export default App;
