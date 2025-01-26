import React from 'react'

export type SpacingProps = {
    height: number;
};

export const Spacing = (props: SpacingProps) => {
    return (
        <div style={{height: props.height}}/>
    )
};
