import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 120, height = 120, className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 500"
      width={width}
      height={height}
      className={className}
      {...props}
    >
      {/* A element (replacing the S) */}
      <path d="M120 220 L240 220 L270 300 L150 300 Z" fill="#e6000a" />
      {/* Yellow part */}
      <path d="M180 220 L240 220 L270 300 L210 300 Z" fill="#ffd000" />
      {/* Teal/green part */}
      <path d="M240 220 L300 220 L330 300 L270 300 Z" fill="#00aa7e" />
      {/* Blue part */}
      <path d="M300 220 L360 220 L390 300 L330 300 Z" fill="#2062af" />
      <text
        x="500"
        y="280"
        fontFamily="Zrnic"
        fontSize="60"
        textAnchor="middle"
        fill="white"
      >
        Quality.sh
      </text>
    </svg>
  );
};

export default Logo; 