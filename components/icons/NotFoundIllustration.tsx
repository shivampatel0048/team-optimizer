import React from 'react'

const NotFoundIllustration = () => {
    return (
        <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
        >
            {/* Background */}
            <path
                d="M50 450h400"
                stroke="#A7C957"
                strokeWidth="2"
                strokeDasharray="10 10"
            />

            {/* Field lines */}
            <path
                d="M100 450c50-30 100-50 150-50s100 20 150 50"
                stroke="#6A994E"
                strokeWidth="2"
                fill="none"
            />

            {/* Tractor */}
            <g transform="translate(200, 300)">
                <rect
                    x="0"
                    y="0"
                    width="120"
                    height="80"
                    rx="10"
                    fill="#386641"
                />
                <circle
                    cx="30"
                    cy="80"
                    r="25"
                    fill="#294D25"
                />
                <circle
                    cx="100"
                    cy="80"
                    r="35"
                    fill="#294D25"
                />
                <rect
                    x="20"
                    y="20"
                    width="60"
                    height="40"
                    rx="5"
                    fill="#A7C957"
                />
            </g>

            {/* Question mark */}
            <g transform="translate(300, 150)">
                <circle
                    cx="0"
                    cy="0"
                    r="40"
                    fill="#F2C94C"
                    fillOpacity="0.2"
                />
                <path
                    d="M-15 0a15 15 0 1 1 15 15v20M0 50h0.1"
                    stroke="#F2C94C"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>

            {/* Plants */}
            {[0, 50, 100, 150].map((x) => (
                <g key={x} transform={`translate(${x + 100}, 450)`}>
                    <path
                        d={`M0 0c5-10 0-20-5-30 M0 0c-5-10 0-20 5-30 M0 0v-35`}
                        stroke="#6A994E"
                        strokeWidth="2"
                    />
                    <circle
                        cx="0"
                        cy="-35"
                        r="3"
                        fill="#A7C957"
                    />
                </g>
            ))}
        </svg>
    )
}

export default NotFoundIllustration
