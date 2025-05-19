import { useId as useReactId } from 'react';

/**
 * A custom hook that generates a unique ID for components.
 * If a static ID is provided, it will be used instead of generating a new one.
 * 
 * @param {string | undefined} staticId - An optional static ID to use instead of generating a new one
 * @param {string} suffix - An optional suffix to append to the generated ID
 * @returns {string} A unique ID string
 * 
 * @example
 * # Returns a generated ID like "tl-1-0-input"
 * const id = useId(undefined, 'input');
 * 
 * # Returns the provided static ID
 * const id = useId('my-custom-id');
 */
export function useId(staticId?: string, suffix: string = ''): string {
    const uid = `tl-${useReactId()}-${suffix}`;

    if (typeof staticId === 'string') return staticId;

    return uid;
}
