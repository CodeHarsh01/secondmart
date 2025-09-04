import React from "react";

export default function Loader() {
  return (
    <div className="w-full ">
      <video
        src="car.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="h-56"
      />
    </div>
  );
}
