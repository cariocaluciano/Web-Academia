import { forwardRef } from "react";

export const Input = forwardRef(function Input(props, ref) {
  return (
    <div>
      <label className="text-sm mb-2">
        {props.label}
      </label>
      <input
        {...props}
        ref={ref}
        className="w-full border-b border-black-600 h-[52px] placeholder:text-black-300 focus-visible:outline-none hover:border-black-800"
      />
    </div>

  );
});