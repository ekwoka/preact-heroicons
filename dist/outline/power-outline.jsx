import { forwardRef } from "preact/compat";
export const PowerOutline = forwardRef((props, ref) => {
    return (<svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"/>
    </svg>);
});
