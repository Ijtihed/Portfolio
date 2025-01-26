import { ComponentPropsWithoutRef } from "react"

export const Medtech = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
    return (
        <svg width={props.size} height={props.size} preserveAspectRatio="xMidYMid" {...props} viewBox="0 0 24 24" fill="none">
<path d="M4 11.9998H8L9.5 8.99976L11.5 13.9998L13 11.9998H15M12 6.42958C12.4844 5.46436 13.4683 4.72543 14.2187 4.35927C16.1094 3.43671 17.9832 3.91202 19.5355 5.46436C21.4881 7.41698 21.4881 10.5828 19.5355 12.5354L12.7071 19.3639C12.3166 19.7544 11.6834 19.7544 11.2929 19.3639L4.46447 12.5354C2.51184 10.5828 2.51184 7.41698 4.46447 5.46436C6.0168 3.91202 7.89056 3.43671 9.78125 4.35927C10.5317 4.72543 11.5156 5.46436 12 6.42958Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    )
}