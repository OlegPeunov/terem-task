import React from 'react';
import closePath from '../images/close.svg'


function HelloPopUp(props) {
  const className=`popup ${props.isOpen ? 'popup_is-open' : ''}`  


  return (
    <section className={className} onClick={props.onClose}>
      <div className="popup__content">
        <h2>Привет мир!</h2>
        <img alt="" src={closePath} className="popup__close"/>
      </div>
    </section>
  );
}

export default HelloPopUp;
