// Import client-side cookie functions
import { getCookie, hasCookie, setCookie, deleteCookie } from 'cookies-next';

export const getClientCookie = (key: string): string | null => {
    if (!key) return null; // Ensure key is provided

    // Check if cookie exists
    if (hasCookie(key)) {
        return getCookie(key) as string; // Retrieve cookie value
    }

    return null; // Return null if cookie doesn't exist
};

/**
 * Set a cookie on the client side
 * @param key - The cookie name
 * @param value - The cookie value
 * @param options - Optional cookie options (maxAge, path, domain, etc)
 * @returns boolean - Success status
 */
export const setClientCookie = (
    key: string, 
    value: string,
    options?: {
        maxAge?: number;
        path?: string;
        domain?: string;
        secure?: boolean;
        sameSite?: 'strict' | 'lax' | 'none';
    }
): boolean => {
    if (!key) return false;
    
    try {
        setCookie(key, value, options);
        return true;
    } catch (error) {
        console.error('Error setting cookie:', error);
        return false;
    }
};

/**
 * Remove a cookie on the client side
 * @param key - The cookie name
 * @param options - Optional cookie options (path, domain)
 * @returns boolean - Success status
 */
export const removeClientCookie = (
    key: string,
    options?: {
        path?: string;
        domain?: string;
    }
): boolean => {
    if (!key) return false;
    
    try {
        deleteCookie(key, options);
        return true;
    } catch (error) {
        console.error('Error removing cookie:', error);
        return false;
    }
};