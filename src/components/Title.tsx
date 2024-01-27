import { subtle } from 'crypto';
import React, { Children, ReactNode } from 'react'

type Props = {
    children: ReactNode;
    size?: string;
    subtitle?: string;
}
const Title = ({size, children, subtitle}: Props) => {
  return (
    <>
        <h2 className={`title ${size == "large" && "text-4xl"}`}>{children}</h2>
        <p className='text-center text-sm'>{subtitle}</p>
    </>
  )
}

export default Title