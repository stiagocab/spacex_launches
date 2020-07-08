import React from "react";

export default function Loading() {
  return (
    <div className="h-64 w-full flex justify-center items-center">
      <div className="lds-spinner mb-10 w-10 h-10">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
