import React from "react";

function UpperLine(props) {

  const className=`card ${props.isOpen ? 'card_type_hidden' : ''}`  

  return (
    <section className="row">
      <div className={className}>
        <h1 className="card__title">Заголовок H1</h1>
      </div>
    </section>
      
    
  );
}

export default UpperLine;