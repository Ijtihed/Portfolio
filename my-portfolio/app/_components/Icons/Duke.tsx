import { ComponentPropsWithoutRef } from "react";

export const Duke = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <svg
      height={props.size}
      {...props}
      viewBox="0 0 150 175"
      fill="currentColor"
      style={{ display: "inline" }} // Added inline style for display
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor" // #00539B
        d="m82.428 1.0965 19.722 32.553v75.279l-19.722 32.651h41.314c15.872-0.0368 28.732-12.768 28.732-29.434v-81.002c0-16.665-12.858-30.049-28.732-30.049h-41.314zm-87.848 0.0028 19.742 32.55v75.279l-19.742 32.632h83.503l-19.75-32.632v-75.279l19.75-32.55h-83.503z"
      />
    </svg>
  );
};
