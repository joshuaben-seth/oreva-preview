'use client';

/**
 * Utility to detect if the current device is a mobile phone
 * Returns true for phones, false for tablets and desktops
 */
export function isMobilePhone(): boolean {
  if (typeof window === 'undefined') {
    return false; // Server-side rendering
  }

  // Check user agent for mobile indicators
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  
  // Mobile phone patterns (excluding tablets)
  const mobilePhonePatterns = [
    /Android.+Mobile/i,
    /iPhone/i,
    /BlackBerry/i,
    /Windows Phone/i,
    /Opera Mini/i,
    /Mobile Safari/i,
  ];

  const isMobileUserAgent = mobilePhonePatterns.some(pattern => pattern.test(userAgent));
  
  // Additional check: screen size for mobile phones (typically < 768px width)
  const isMobileScreen = window.innerWidth < 768;
  
  // Exclude tablets by checking for specific tablet patterns
  const tabletPatterns = [
    /iPad/i,
    /Android(?!.*Mobile)/i, // Android tablets don't have "Mobile" in user agent
    /Tablet/i,
  ];
  
  const isTablet = tabletPatterns.some(pattern => pattern.test(userAgent));
  
  // Return true only if it's mobile-sized AND has mobile user agent AND is not a tablet
  return isMobileScreen && (isMobileUserAgent || !isTablet);
}