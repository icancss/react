import React, { useState } from 'react'

function Clock() {

  const [clockState, setClockState] = useState()

    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString('de-DE'));
    }, 1000);
 

  return (
    <div className='clock'>{clockState}</div>
  )
}

export default Clock;