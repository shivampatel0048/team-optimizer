'use client'

import Image from 'next/image'
import { useState } from 'react'

interface FallbackImageProps {
    src: string
    fallbackSrc: string
    alt: string
    width: number
    height: number
    priority?: boolean
    className?: string
}

const FallbackImage = ({ src, fallbackSrc, alt, ...props }: FallbackImageProps) => {
    const [imgSrc, setImgSrc] = useState(src)

    return (
        <Image
            {...props}
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(fallbackSrc)}
        />
    )
}

export default FallbackImage
