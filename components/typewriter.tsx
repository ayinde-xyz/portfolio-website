"use client";
import { Typewriter as Typewrite } from "react-simple-typewriter";

type TypewriterProps = {
  role: string[];
};

const Typewriter = ({ role }: TypewriterProps) => {
  return (
    <Typewrite
      words={role}
      loop={false}
      cursor
      cursorStyle="_"
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      // onLoopDone={handleDone}
      // onType={handleType}
    />
  );
};

export default Typewriter;
