import { ComponentPropsWithoutRef } from "react"

export const Polymer = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
    return ( <svg width={props.size} height={props.size} preserveAspectRatio="xMidYMid" {...props} viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11 7l2 3l-2 3H8l-2-3l2-3z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16 4l2 3l-2 3h-3l-2-3l2-3zm0 12l2 3M5 4l3 3m0 6l-2 2m7 1l-2 2m-5-8H4m14 3h3m-5-3l2 3l-2 3h-3l-2-3l2-3z"></path><circle cx={9} cy={20} r={1} fill="currentColor"></circle><circle cx={4} cy={17} r={1} fill="currentColor"></circle><circle cx={21} cy={7} r={1} fill="currentColor"></circle></g></svg>)
}