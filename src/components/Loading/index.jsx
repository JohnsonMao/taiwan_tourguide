import React from 'react'

import { ReactComponent as Triangle } from "../../asset/icon/triangle.svg";
import { ReactComponent as Square } from "../../asset/icon/square.svg";
import { ReactComponent as Circle } from "../../asset/icon/circle.svg";
import './static/_loading.scss';

export default function Loading() {
  return (
    <div className="d-flex justify-content-center align-items-center loading">
      <Triangle />
      <Square />
      <Circle />
    </div>
  )
}
