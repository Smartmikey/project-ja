'use client'

import React, { useState, useRef, ReactNode } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline"
type AccordionProps = {
  title: string
  content: string | ReactNode
}
const Accordion = ({ title, content }: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(false)
  const [height, setHeight] = useState<string>("0px")
  const contentElement = useRef<HTMLDivElement>(document.createElement("div"))

  const HandleOpening = () => {
    setOpened(!isOpened)
    setHeight(!isOpened ? `${contentElement.current.scrollHeight}px` : "0px")
  }
  return (
    <div onClick={HandleOpening} className="border-b border-gray-400 w-full md:hidden">
      <div className={"bg-gray-50 p-2 flex items-center justify-between text-gray-800"}>
        <h4 className="font-semibold">{title}</h4>
        {isOpened ? <ChevronDownIcon className="h-4" /> : <ChevronUpIcon className="h-4" />}
      </div>
      <div
        ref={contentElement}
        style={{ height: height }}
        className="bg-gray-200 overflow-hidden transition-all duration-200"
      >
        <p className="p-4">{content}</p>
      </div>
    </div>
  )
}

export default Accordion
