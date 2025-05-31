import { Spinner } from "./Spinner";

export function Button({ isLoading, disabled, children, ...props }) {
  return (
    <button
      disabled={isLoading || disabled}
      className="w-full bg-black-700 rounded-lg border border-white-300 px-3 h-[52px]
      placeholder:text-black-300 text-white-300 focus-visible:outline-none hover:bg-black-600
      disabled:bg-black-600"
      {...props}
    >
      {!isLoading && children}
      {isLoading && (
        <Spinner className="h-6 w-6 mx-auto my-0 text-black-300 animate-spin fill-white-300" />
      )}
    </button>
  );
}