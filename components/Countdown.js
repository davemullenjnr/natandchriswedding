import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem 0rem;
`;

export default function Countdown() {
  const targetDate = new Date('2025-08-30T00:00:00'); // set your target date here
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
      setDaysRemaining(days);
    };

    updateCountdown(); // initial call
    const interval = setInterval(updateCountdown, 1000 * 60); // update every minute

    return () => clearInterval(interval); // cleanup on unmount
  }, [targetDate]);

  return (
    <Wrapper>
      <p>
        {daysRemaining} {daysRemaining === 1 ? 'day' : 'days'} to go!
      </p>
    </Wrapper>
  );
}
