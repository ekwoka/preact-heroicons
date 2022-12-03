/** @jsx h */
import { h } from "preact";
import { forwardRef } from "preact/compat";
export const CheckOutline = forwardRef((props, ref) => {
    return (<svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
    </svg>);
});
