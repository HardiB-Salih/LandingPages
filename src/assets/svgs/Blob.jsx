import React from 'react';

const Blob = ({ width = '575', height = '511', fill = '#1FBC9F', sx }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 575 511"
      xmlns="http://www.w3.org/2000/svg"
      style={sx}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M568.843 61.3972C595.303 108.085 528.238 204.411 522.912 261.636C517.911 315.359 516.926 367.614 485.183 416.422C453.037 465.852 423.116 481.755 367.937 503.643C313.705 525.156 264.791 493.105 210.567 488.408C151.661 483.304 88.8037 516.823 52.5419 476.318C15.0521 434.441 -10.1571 376.215 3.98599 316.117C17.4745 258.802 74.0338 215.955 123.235 175.926C160.954 145.239 226.83 125.185 269.471 102.346C320.609 74.9555 345.744 5.3329 400.703 0.793094C461.117 -4.19738 542.077 14.1698 568.843 61.3972Z"
        fill={fill}
      />
    </svg>
  );
};

export default Blob;