export default function ScrollDown() {
  const h = 50;

  return (
    <div className="">
      <a href="#next" className="flex flex-col items-center">
        <svg
          width="40"
          height="90"
          viewBox="0 0 40 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-white"
        >
          {/* vertical line */}
          <line
            x1="20"
            y1="0"
            x2="20"
            y2={h}
            style={{
              strokeDasharray: h,
              strokeDashoffset: h,
              animation: "scrollLine 3s cubic-bezier(0.4,0,0.2,1) infinite"
            }}
          />

          {/* arrow head */}
          <polyline
            points="12,43 20,50 28,43"
            style={{
              strokeDasharray: 20,
              strokeDashoffset: 20,
              animation: "scrollArrow 3s cubic-bezier(0.4,0,0.2,1) infinite"
            }}
          />
        </svg>

        <style>
          {`
            @keyframes scrollLine {
              0% { stroke-dashoffset: ${h}; }
              35% { stroke-dashoffset: 0; }   /* fully drawn */
              55% { stroke-dashoffset: 0; }   /* hold */
              100% { stroke-dashoffset: -${h}; } /* continue downward */
            }

            @keyframes scrollArrow {
              0% { stroke-dashoffset: 20; }
              35% { stroke-dashoffset: 0; }
              55% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -20; }
            }
          `}
        </style>
      </a>
    </div>
  );
}
