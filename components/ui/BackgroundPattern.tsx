interface BackgroundPatternProps {
    id?: string;
    opacity?: number;
    className?: string;
}

const BackgroundPattern = ({ id = "pattern", opacity = 0.1, className = "" }: BackgroundPatternProps) => {
    return (
        <div className={`absolute inset-0 opacity-${opacity * 100} ${className}`}>
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                    <pattern id={id} width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M10,1 Q15,5 10,10 Q5,15 10,19 M0,10 Q5,5 10,10 Q15,15 20,10"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.5" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${id})`} />
            </svg>
        </div>
    )
}

export default BackgroundPattern
