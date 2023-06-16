import React from 'react';
import Countdown from '@/app/countdown/countdown';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="stars"></div>
      <div className="lights">
        <Countdown date={new Date("Jun 18, 2023 23:30:00")}/>
      </div>
    </main>
  )
}
