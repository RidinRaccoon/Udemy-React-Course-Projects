import * as React from 'react';
import infoIcon from '../../../assets/info-icon.svg';
import classes from './InfoIcon.module.css';

export function InfoIcon() {
  return (
    <div
      className={classes['info-icon']}
      style={{
        maskImage: `url(${infoIcon})`,
        WebkitMaskImage: `url(${infoIcon})`,
      }}
    />
  );
}
