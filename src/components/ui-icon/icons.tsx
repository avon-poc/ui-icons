import { h } from '@stencil/core';

export const icons = {
  search: {
    viewBox: "0 0 21 21",
    content: <g>
      <path fill="currentColor"
          d="M 14.191406 11.591797 C 13.485557 12.733817 12.481665 13.665817 11.28125 14.28125 L 17.099609 20.099609 C 17.499609 20.499609 18 20.699219 18.5 20.699219 C 19 20.699219 19.500391 20.499609 19.900391 20.099609 C 20.700391 19.299609 20.700391 18.100781 19.900391 17.300781 L 14.191406 11.591797 z "/>
    <path fill="currentColor"
          d="M7.9,3.3c2.4,0,4.4,2,4.4,4.4s-2,4.4-4.4,4.4s-4.4-2-4.4-4.4S5.5,3.3,7.9,3.3 M7.9,0.3   c-4.1,0-7.4,3.3-7.4,7.4l0,0c0,4.1,3.3,7.4,7.4,7.4s7.4-3.3,7.4-7.4l0,0C15.3,3.6,12,0.3,7.9,0.3L7.9,0.3z"/>
    </g>
  },
  bag: {
    viewBox: "0 0 21 21",
    content: <g>
      <path fill="currentColor"
          d="m 1.573013,0.95981479 17.995268,0 0,2.45390021 1.289871,0.7865065 -0.03146,14.4087985 c -0.214975,0.747788 -0.472995,1.289367 -1.761774,1.541553 l -16.9885398,0 C 1.0964915,20.037816 0.37578471,19.618757 0.31460259,18.420259 l 0,-14.282958 1.22695011,-0.6292052 z"/>
    <circle r="1.2898706" cy="7.3147874" cx="6.04037" fill="#fff"/>
    <circle cx="14.975083" cy="7.3147874" r="1.2898706" fill="#fff"/>
    <path
      d="m 6.6381147,8.4473566 c -0.029178,3.6032694 2.146418,4.6204984 4.0326393,4.6375324 1.86741,0.01686 3.659503,-1.470167 3.769505,-4.700453 l 1.25841,-0.125841 c -0.09959,4.565509 -2.467711,6.106906 -5.128022,6.10329 C 6.8231278,14.320164 5.3929038,11.946652 5.4111646,8.2271347 Z"
      fill="#fff"/>
    <path
      d="m 2.9258041,2.1867649 15.2267659,0 -1.22695,1.2584104 0.471903,0.5977449 -13.7481329,0 0.5033641,-0.5977449 z"
      fill="#fff"/>
    </g>
  },
  heart: {
    viewBox: '0 0 24 24',
    content: <path fill="currentColor"
      d="M12 20.273a.85.85 0 01-.52-.177l-.442-.341c-4.064-3.13-6.517-5.018-7.945-7.539-1.369-2.409-1.204-4.31-.827-5.482.46-1.423 1.496-2.569 2.918-3.225A5.605 5.605 0 017.544 3c1.764 0 3.394.748 4.456 1.98C13.06 3.748 14.69 3 16.455 3c.834 0 1.628.17 2.36.507 1.422.657 2.458 1.801 2.918 3.226.379 1.17.542 3.072-.827 5.482-1.429 2.52-3.885 4.412-7.954 7.546l-.432.335a.856.856 0 01-.52.177zM7.544 4.69c-.587 0-1.14.118-1.647.351-.987.456-1.703 1.24-2.015 2.21-.394 1.218-.155 2.648.689 4.134 1.251 2.21 3.45 3.91 7.427 6.975 3.978-3.063 6.176-4.766 7.428-6.974.844-1.486 1.082-2.917.69-4.135-.314-.969-1.03-1.754-2.017-2.21a3.898 3.898 0 00-1.645-.35c-1.594 0-3.075.88-3.686 2.19a.849.849 0 01-1.54 0c-.61-1.31-2.09-2.19-3.684-2.19z"
    />
  },
  avatarUser: {
    viewBox: '0 0 23.8 29.5',
    content: <g>
      <path
        d="m 0,29.48381 c 0,0 0.39974,-11.36425 4.04061,-14.39467 4.90355,4.60886 9.16066,4.7208 14.83661,-10e-6 3.65566,3.10787 4.86136,14.39468 4.86136,14.39468 z"
        fill="currentColor"/>
      <ellipse cx="11.553617" cy="7.8760314" rx="7.9549513" ry="7.8760333" fill="currentColor"/>
    </g>
  }
};