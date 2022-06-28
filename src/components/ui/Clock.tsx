import React, { useEffect, useState } from 'react';

function Clock() {
  const [today, updateToday] = useState<Date>(new Date());
  let intervalId: NodeJS.Timeout;

  useEffect(() => {
    intervalId = setInterval(() => {
      updateToday(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <h1>
          {today.toLocaleDateString('en-US', {
            day: '2-digit',
            year: 'numeric',
            month: '2-digit',
          })}{' '}
          {today.toLocaleTimeString()}
        </h1>
      </div>
    </>
  );
}

export default Clock;
