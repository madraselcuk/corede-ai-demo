// Small utility to merge class names.
import { twMerge } from 'tailwind-merge'
import { clsx, type ClassValue } from 'clsx'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

import cns from 'classnames'

export function classNames(...args: cns.ArgumentArray) {
    return twMerge(cns(args))
}
