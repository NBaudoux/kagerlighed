import React, { useState } from "react";

export enum Direction {
  Left = -1,
  Right = 1
}

type SlideDivProps = {
  className?: string;
  onSlide: (direction: Direction) => void
  title?: string;
}

const SlideDiv: React.FC<SlideDivProps> = (props) => {
  const { className, onSlide, title } = props;

  const [touchStart, setTouchStart] = useState<number | undefined >(undefined);
  const [touchEnd, setTouchEnd] = useState<number | undefined>(undefined);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const MIN_SWIPE_DISTANCE = 50; 

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(undefined); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = (): Direction | undefined => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > MIN_SWIPE_DISTANCE) {
      onSlide(Direction.Left);
    }
    else if (distance < -MIN_SWIPE_DISTANCE) {
      onSlide(Direction.Right);
    }
  };

  return(
    <div
      className={className}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      title={title}
    >
      {props.children}
    </div>
  );
};

export default SlideDiv;
