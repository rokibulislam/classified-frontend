import * as React from 'react'

function FlagNor(props) {
  return (
    <svg width={20} height={20} viewBox='0 0 20 20' fill='none' {...props}>
      <mask
        id='prefix__a'
        maskUnits='userSpaceOnUse'
        x={0}
        y={0}
        width={20}
        height={20}>
        <rect width={20} height={20} rx={10} fill='#C4C4C4' />
      </mask>
      <g mask='url(#prefix__a)'>
        <rect
          x={-1.5}
          y={0.5}
          width={27}
          height={19}
          rx={2.5}
          fill='#fff'
          stroke='#F5F5F5'
        />
        <mask
          id='prefix__b'
          maskUnits='userSpaceOnUse'
          x={-2}
          y={0}
          width={28}
          height={20}>
          <rect
            x={-1.5}
            y={0.5}
            width={27}
            height={19}
            rx={2.5}
            fill='#fff'
            stroke='#fff'
          />
        </mask>
        <g mask='url(#prefix__b)' fillRule='evenodd' clipRule='evenodd'>
          <path
            d='M6 0h-8v8h8V0zm4 0v8h16V0H10zm16 12H10v8h16v-8zM6 20v-8h-8v8h8z'
            fill='#F14247'
          />
          <path
            d='M-2 10.667h9.333V20h1.334v-9.333H26V9.333H8.667V0H7.333v9.333H-2v1.334z'
            fill='#0A3A85'
          />
        </g>
      </g>
    </svg>
  )
}

export default FlagNor;
