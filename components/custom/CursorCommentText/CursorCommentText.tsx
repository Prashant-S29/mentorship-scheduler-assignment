interface CursorCommentTextProps {
  text: string;
  cursorPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  textColor?: string;
  backgroundColor?: string;
}

export const CursorCommentText: React.FC<CursorCommentTextProps> = ({
  text,
  cursorPosition,
  backgroundColor,
  textColor,
}) => {
  return (
    <div
      className='py-3 px-4 rounded-lg h-fit relative min-w-fit w-fit whitespace-nowrap'
      style={{
        backgroundColor: backgroundColor || '#22a274',
      }}
    >
      <p
        className='text-xs  font-medium'
        style={{
          color: textColor || '#fff',
        }}
      >
        {text}
      </p>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 28 29'
        className={`w-6 h-6 absolute ${
          cursorPosition === 'top-left'
            ? '-top-4 -left-4'
            : cursorPosition === 'top-right'
            ? '-top-4 -right-4  rotate-90'
            : cursorPosition === 'bottom-left'
            ? '-bottom-4 -left-4 -rotate-90'
            : '-bottom-4 -right-4 rotate-180'
        }`}
        fill={backgroundColor || '#22a274'}
      >
        <g filter='url(#Cursor_svg__a)'>
          <path d='M11.892 23.711 7.334 7.72c-.236-.826.622-1.539 1.402-1.166l15.103 7.225a.992.992 0 0 1-.096 1.834l-6.212 2.2a1 1 0 0 0-.533.444l-3.266 5.68c-.441.766-1.597.625-1.84-.226'></path>
          <path d='m6.85 7.854 4.56 15.992c.363 1.275 2.097 1.487 2.758.337l3.266-5.679a.5.5 0 0 1 .267-.221l6.211-2.201c1.258-.446 1.349-2.175.144-2.751L8.954 6.106c-1.17-.56-2.457.51-2.104 1.748'></path>
        </g>
        <defs>
          <filter
            id='Cursor_svg__a'
            width='23.124'
            height='23.979'
            x='4.288'
            y='4.454'
            color-interpolation-filters='sRGB'
            filterUnits='userSpaceOnUse'
          >
            <feFlood flood-opacity='0' result='BackgroundImageFix'></feFlood>
            <feColorMatrix
              in='SourceAlpha'
              result='hardAlpha'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            ></feColorMatrix>
            <feOffset dy='1'></feOffset>
            <feGaussianBlur stdDeviation='1'></feGaussianBlur>
            <feComposite in2='hardAlpha' operator='out'></feComposite>
            <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'></feColorMatrix>
            <feBlend
              in2='BackgroundImageFix'
              result='effect1_dropShadow_230_15038'
            ></feBlend>
            <feBlend
              in='SourceGraphic'
              in2='effect1_dropShadow_230_15038'
              result='shape'
            ></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
