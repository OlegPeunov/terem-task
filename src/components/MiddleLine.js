import React from 'react';

function MiddleLine(props) {

  const className=`card card_type_dashed ${props.isSwitched ? 'card_type_switched' : ''}`  

  return (
    <section className="row">
      <div className="card card_color_red">
      
      </div>
      <div className={className}>
      
      </div>
      <div className="card card_color_yellow">
      
      </div>
    </section>
  );
}

export default MiddleLine;