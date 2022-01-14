import React from 'react';
import Controls from '../Controls/Controls';
import Options from '../Options/Options';
import Timer from '../Timer/Timer';

import './Board.css';

export default function Board() {
  return (
  <div className='board'>
      <Options/>
      <Timer />
      <Controls />
  </div>
  );
}
