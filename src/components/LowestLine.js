import React from 'react';

function LowestLine(props) {
  return (
    <section bg = "dark" className="row">
      <div className="card">
        <button className="card__button card__button_color_yellow" onClick={props.firstButtonClick}>Кнопка 1</button>
      </div>
      <div className="card card_type_2to1">
        <button className="card__button card__button_color_green" onClick={props.secondButtonClick}>Кнопка 2</button>
      </div>
    </section>
  );
}

export default LowestLine;