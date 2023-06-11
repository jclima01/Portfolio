import React from "react";

const Logo = () => {
  return (
    <>
    <div>JCLC</div>
      {/* <svg
        width="213"
        height="72"
        viewBox="0 0 213 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g clip-path="url(#clip0_1_267)">
          <rect
            x="28"
            y="0.5"
            width="157"
            height="71"
            rx="10"
            fill="url(#pattern0)"
          />
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlink:href="#image0_1_267"
              transform="matrix(0.00215983 0 0 0.00477596 0 -0.0325191)"
            />
          </pattern>
          <clipPath id="clip0_1_267">
            <rect
              width="213"
              height="71"
              fill="white"
              transform="translate(0 0.5)"
            />
          </clipPath>
          <image
            id="image0_1_267"
            width="463"
            height="223"
            xlink:href="data:image/png;base64,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"
          />
        </defs>
      </svg> */}
    </>
  );
};

export default Logo;
