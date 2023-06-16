"use client";

import './countdown.css';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Props, Time} from '@/app/countdown/types';

const getTimeMillis = (
    date: any
): Time => {
  let now: any = new Date();
  let distance = date - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return {
    days,
    hours,
    minutes,
    seconds
  };
};

const Countdown = ({date}: Props) => {
  const [time, setTime]: Time = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getTimeMillis(date));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
      <div className={'countdown-container fluorescent-text font-mono font-extrabold'}>
        <div className={'text-3xl lg:text-5xl'}>PROXIMAMENTE</div>
        {!!time && !(time.days < 0) && !(time.hours < 0) && !(time.minutes < 0) && !(time.seconds < 0) &&
            <div className={'text-lg lg:text-xl break-normal'}>Faltan&nbsp;
              <span>{time.days} d&iacute;as </span>
              <span>{time.hours} horas </span>
              <span>{time.minutes} minutos </span>
              <span>{time.seconds} segundos </span>
            </div>
        }
      </div>
  );
};

export default Countdown;
