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
        d="M10.5,20.1l-8.7-8.7l-0.1-0.1c-2.4-2.4-2.4-6.4,0-8.7l0,0c2.4-2.4,6.3-2.4,8.7,0l0.1,0.1l0.1-0.1 c2.4-2.4,6.3-2.4,8.7,0l0,0c2.4,2.4,2.4,6.4,0,8.7l-0.1,0.1L10.5,20.1z"
    />
  },
  heartFilled: {
    viewBox: '0 0 24 24',
    content: <path
        d="M18.247 10.978l-6.91 7.427c-.352.38-.834.595-1.337.595-.502 0-.984-.215-1.337-.595l-6.909-7.427c-2.339-2.515-2.339-6.59 0-9.102C4.001-.547 7.654-.634 10 1.679c2.347-2.313 6-2.226 8.247.197 2.337 2.512 2.337 6.587 0 9.102z"
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
  },
  profile: {
    viewBox: "0 0 24 24",
    content: <path fill="currentColor"
      d="M20.667 21.024a.978.978 0 01-.977.976H4.977A.98.98 0 014 21.024c0-4.58 3.73-8.292 8.333-8.292s8.333 3.712 8.333 8.292zm-8.334-7.317c-4.06 0-7.352 3.276-7.352 7.317 0-.002 14.71 0 14.71 0-.005-4.041-3.296-7.317-7.358-7.317zm0-1.95c-2.707 0-4.901-2.185-4.901-4.879C7.432 4.184 9.626 2 12.333 2c2.708 0 4.902 2.184 4.902 4.878s-2.194 4.878-4.902 4.878zm0-.976c2.166 0 3.922-1.748 3.922-3.903 0-2.155-1.756-3.902-3.922-3.902-2.165 0-3.921 1.747-3.921 3.902 0 2.155 1.756 3.902 3.921 3.902z"
    />
  },
  home: {
    viewBox: "0 0 24 24",
    content: <g>
      <path fill="currentColor" d="M19.354 9.45v11.27c.001-.13-.002.099-.002.043 0 .053.025-.074.002-.026a.172.172 0 00-.015.053c-.008.05.041-.061.008-.024a.208.208 0 00-.026.045c-.02.045.056-.05.015-.02a.197.197 0 00-.037.036c-.02.026.072-.05-.002 0l-.012.007c-.031.016-.031.016 0 .001l.024-.01-.039.013c-.098.024.076.004-.029.006H5.65c-.28 0-.556.002-.835 0h-.045c-.076 0 .02-.004.026.004-.002-.004-.045-.012-.054-.014-.077-.018.027.004.023.01-.001.001-.04-.024-.046-.027-.072-.034.046.056 0-.001a.292.292 0 01-.037-.04c.01-.012.045.076.016.018a.687.687 0 01-.026-.047c.015-.008.025.087.01.023a.93.93 0 01-.015-.053c.012-.002.004.092.004.026V9.43c-.067.119-.135.236-.203.354L5.962 8.68l.989-.726c.621-.458 1.245-.915 1.866-1.374l2.174-1.6c.4-.293.814-.576 1.204-.886a.35.35 0 00.018-.012h-.414l1 .737c.712.523 1.424 1.045 2.135 1.57l1.969 1.45c.256.19.512.378.77.567.61.451 1.221.902 1.835 1.353.016.013.034.025.05.04.175.127.467.034.563-.148.113-.213.04-.425-.148-.562a604.21 604.21 0 01-1.691-1.247c-.267-.197-.532-.392-.798-.586l-1.86-1.369c-.729-.534-1.456-1.07-2.184-1.607-.402-.296-.797-.609-1.21-.89a.396.396 0 00-.432-.012l-1.456 1.07c-.902.664-1.805 1.327-2.706 1.992a1276.537 1276.537 0 00-3.582 2.64.446.446 0 00-.205.366c-.002.05 0 .098 0 .148v9.86c0 .42-.01.843 0 1.263a.96.96 0 00.948.945H19.037c.24 0 .47-.002.685-.14a.968.968 0 00.453-.826V9.44c0-.215-.189-.42-.41-.41-.225.02-.411.19-.411.42z" />
      <path fill="currentColor" d="M19.557 9.806l1.314.97.191.14c.174.127.466.035.562-.147.113-.214.037-.425-.148-.562l-1.314-.97-.191-.141c-.174-.127-.466-.035-.562.148-.112.215-.036.426.148.562zM2.937 10.917L4.916 9.46c.195-.144.392-.287.586-.433.173-.128.278-.361.148-.562-.11-.171-.377-.283-.562-.148l-2.093 1.54c-.158.116-.316.23-.472.348-.172.127-.277.361-.148.562.111.172.378.284.562.149zM14.05 13.809V20.34c0 .302-.012.607 0 .909v.014l.41-.41H9.56l.41.41V13.785c0-.066.01.026-.006.026a.727.727 0 01.02-.078c.019-.08-.042.07 0 0a.95.95 0 01.042-.067c.014.01-.062.066-.015.023.004-.004.056-.056.057-.053.01.014-.083.049-.008.01.007-.002.057-.033.057-.032-.016.007-.032.015-.049.02a.336.336 0 01.051-.016l.053-.012c-.064.008-.073.008-.026.007h3.719c.089.001-.012.004-.012-.005a.74.74 0 01.078.021c.074.018-.07-.045 0 0l.067.041c-.004.007-.075-.072-.023-.015a.651.651 0 01.054.058c-.007.004-.056-.089-.017-.02.002.003.041.066.04.069-.018.006-.027-.086-.013-.025l.02.078a.459.459 0 00-.007-.056v.05c.004.215.184.42.41.41.217-.01.417-.18.41-.41a1.04 1.04 0 00-1.024-1.024c-.094-.002-.19 0-.285 0h-3.089c-.1 0-.2-.002-.302 0-.548.01-.98.425-1.023.968-.015.182-.002.369-.002.551v4.746c0 .726-.01 1.452 0 2.175v.033c0 .221.189.41.41.41h4.901c.222 0 .41-.189.41-.41v-6.532c0-.301.009-.605 0-.908v-.015c0-.215-.188-.42-.41-.41a.426.426 0 00-.406.416z" />
    </g>
  }
};
