import type { SVGProps } from 'react'

export function ArrowLeftIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
        </svg>
    )
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
        </svg>
    )
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
            <path d="M7 17L17 7" />
            <path d="M8 7h9v9" />
        </svg>
    )
}
