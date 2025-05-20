import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  width?: string | number;
  className?: string;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ width = 120, className, textColor, ...props }) => {
  // Calculate height based on the SVG's aspect ratio (adjust from 6:1 to about 7.5:1)
  const height = typeof width === 'number' ? width / 7.5 : 'auto';
  
  return (
    <div style={{ display: 'inline-block', width, height }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="120 220 480 80"
        preserveAspectRatio="xMidYMid meet"
        style={{ width: '100%', height: '100%' }}
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
          x="510"
          y="280"
          fontFamily="Zrnic"
          fontSize="70"
          textAnchor="middle"
          fill={textColor || "white"}
        >
          Quality.sh
        </text>
      </svg>
    </div>
  );
};

export default Logo;
