import * as React from 'react'

function FlagEn(props) {
  return (
    <svg width={20} height={20} viewBox='0 0 20 20' fill='none' {...props}>
      <rect x={-1} width={28} height={20} rx={3} fill='#fff' />
      <mask
        id='prefix__a'
        maskUnits='userSpaceOnUse'
        x={-1}
        y={0}
        width={28}
        height={20}>
        <rect x={-1} width={28} height={20} rx={3} fill='#fff' />
      </mask>
      <g mask='url(#prefix__a)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M27 0H-1v1.333h28V0zm0 2.667H-1V4h28V2.667zM-1 5.333h28v1.334H-1V5.333zM27 8H-1v1.333h28V8zm-28 2.667h28V12H-1v-1.333zm28 2.666H-1v1.334h28v-1.334zM-1 16h28v1.333H-1V16zm28 2.667H-1V20h28v-1.333z'
          fill='#D02F44'
        />
        <path fill='#46467F' d='M-1 0h12v9.333H-1z' />
        <g filter='url(#prefix__filter0_d)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M4.333 2A.667.667 0 113 2a.667.667 0 011.333 0zM1.667 2A.667.667 0 11.333 2a.667.667 0 011.334 0zm4.666.667a.667.667 0 100-1.334.667.667 0 000 1.334zM9.667 2a.667.667 0 11-1.334 0 .667.667 0 011.334 0zM2.333 4a.667.667 0 100-1.333.667.667 0 000 1.333zm3.334-.667a.667.667 0 11-1.334 0 .667.667 0 011.334 0zm2 .667a.667.667 0 100-1.333.667.667 0 000 1.333zm2 .667a.667.667 0 11-1.334 0 .667.667 0 011.334 0zm-3.334.666a.667.667 0 100-1.333.667.667 0 000 1.333zm-2-.666a.667.667 0 11-1.333 0 .667.667 0 011.333 0zM1 5.333A.667.667 0 101 4a.667.667 0 000 1.333zM3 6a.667.667 0 11-1.333 0A.667.667 0 013 6zm2 .667a.667.667 0 100-1.334.667.667 0 000 1.334zM8.333 6A.667.667 0 117 6a.667.667 0 011.333 0zM9 8a.667.667 0 100-1.333A.667.667 0 009 8zm-2-.667a.667.667 0 11-1.333 0 .667.667 0 011.333 0zM3.667 8a.667.667 0 100-1.333.667.667 0 000 1.333zm-2-.667a.667.667 0 11-1.334 0 .667.667 0 011.334 0z'
            fill='url(#prefix__paint0_linear)'
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id='prefix__paint0_linear'
          x1={0.333}
          y1={1.333}
          x2={0.333}
          y2={8}
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#fff' />
          <stop offset={1} stopColor='#F0F0F0' />
        </linearGradient>
        <filter
          id='prefix__filter0_d'
          x={0.333}
          y={1.333}
          width={9.333}
          height={8.667}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy={2} />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}

export default FlagEn;
