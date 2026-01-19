export function NepalFlag({ className = "h-6 w-6" }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 726 885"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Blue border */}
            <path
                fill="#003893"
                d="M0,885 L0,0 L726,442.5 L0,885 Z M67.5,817.5 L607.5,442.5 L67.5,67.5 L67.5,817.5 Z"
            />
            {/* Crimson red background */}
            <path
                fill="#DC143C"
                d="M67.5,67.5 L607.5,442.5 L67.5,817.5 L67.5,67.5 Z"
            />
            {/* Upper moon */}
            <path
                fill="#FFFFFF"
                d="M180,225 Q180,150 255,150 Q210,150 210,225 Q210,300 255,300 Q180,300 180,225 Z"
            />
            {/* Lower sun */}
            <g transform="translate(180, 525)">
                <circle fill="#FFFFFF" cx="75" cy="75" r="75" />
                {/* Sun rays */}
                {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x1 = 75 + Math.cos(angle) * 75;
                    const y1 = 75 + Math.sin(angle) * 75;
                    const x2 = 75 + Math.cos(angle) * 105;
                    const y2 = 75 + Math.sin(angle) * 105;
                    return (
                        <line
                            key={i}
                            x1={x1}
                            y1={y1}
                            x2={x2}
                            y2={y2}
                            stroke="#FFFFFF"
                            strokeWidth="15"
                        />
                    );
                })}
            </g>
        </svg>
    );
}
