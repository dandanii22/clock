import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  console.log(time);

  useEffect(() => {
    let changeTime = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return clearInterval(changeTime);
  }, []);

  return (
    <div>
      <h2>시계 만들기</h2>
      <p>시간 : {time.toLocaleTimeString()} </p>
    </div>
  );
};

export default Clock;
