import React from 'react'
import { useEffect, useState } from 'react';

export const useStatus = () => {
    const locale = 'en';
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update
  
    useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, 60 * 1000);
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
  
    // const day = today.toLocaleDateString(locale, { weekday: 'long' });
    // const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
  
    // const hour = today.getHours();
    // const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;
    
    const timeOriginal = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });
    const time = today.getHours()*60 + today.getMinutes();

    const position= `${((time <= (9*60 +30) && time>=(6*60+30)) && "open") || ((time >= (17*60+30) && time<=(19*60+30)) && "open") || ("close")}`;
    console.log("position", position, timeOriginal, time);

    const morning=(time <= (9*60 +30) && time>=(6*60+30)) ? true:false;
    const evening=(time >= (17*60+30) && time<=(19*60+30)) ? true:false;

    return {
    //   date,
      time,
      timeOriginal,
      morning,
      evening,
    };
  };