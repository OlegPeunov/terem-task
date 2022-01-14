import React from 'react';
import UpperLine from './UpperLine';
import MiddleLine from './MiddleLine';
import LowestLine from './LowestLine';
import HelloPopUp from './HelloPopUp';

function App() {

  const [isFirstBlockVisible, setIsFirstBlockVisible] = React.useState(false);
  const [isMiddleBlockSwitched, setIsMiddleBlockSwitched] = React.useState(false);
  const [isHelloPopupOpen, setIsHelloPopupOpen] = React.useState(true);

  function showFirstBlock(){
    setIsFirstBlockVisible(!isFirstBlockVisible)
  }

  function switchMiddleBlock(){
    setIsMiddleBlockSwitched(!isMiddleBlockSwitched)
  }

  function closePopup(){
    console.log(isHelloPopupOpen)
    setIsHelloPopupOpen(!isHelloPopupOpen)
  }



  return (
    <div className="app">
      <UpperLine isOpen={isFirstBlockVisible}/>
      <MiddleLine isSwitched={isMiddleBlockSwitched}/>
      <LowestLine firstButtonClick={showFirstBlock} secondButtonClick={switchMiddleBlock}/>
      <HelloPopUp isOpen={isHelloPopupOpen} onClose={closePopup}/>
    </div>
  );
}

export default App;
