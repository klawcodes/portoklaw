import React from 'react'
import './Footer.css'
import * as moment from 'moment';
import 'moment/locale/id';

const Footer = () => {

  const moment = require('moment');

  let now = moment().locale('id').format('LT');

  console.log(now)

  return (
    <div>
      <div className="footer">
        <div className="f-line"></div>
        <div className="credit">
          <h2 className="h-1">Ⓒ 2022 KLAW, ALL RIGHT RESERVED</h2>
          <h2 className="time">{now} GMT+7</h2>
          <h2 className="h-2">0.7893° S, 113.9213° E</h2>
        </div> 
      </div>
    </div>
  )
}

export default Footer
