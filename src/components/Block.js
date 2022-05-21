import React from 'react'

export default function Block(props) {
  const { left, top, isDragging, children } = props;
  const width = left + '%';
  const height = top + '%';
  return (
    <div className={`border-l border-b p-3 ${isDragging ? 'border-indigo-800 border-dashed' : 'border-slate-700'}`} style={{ width, height }}>{children}</div>
  )
}
