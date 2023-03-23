import React from "react";

export default function Modal({ children, isOpen }) {
  return (
    <div
      class={`fixed ${isOpen?"":"hidden"} inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full`}
      id="my-modal"
    >
        <div
	class="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white"
>
        {children}
        </div>
    </div>
  );
}
