// Simple wrapper for Umami analytics
// This allows us to track custom events like "Book Click" or "Affiliate Click"

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void;
    };
  }
}

export const trackEvent = (eventName: string, data?: Record<string, any>) => {
  if (window.umami) {
    window.umami.track(eventName, data);
  } else {
    console.log(`[Analytics] ${eventName}`, data);
  }
};

export const trackAffiliateClick = (bookTitle: string) => {
  trackEvent('affiliate_click', { book: bookTitle });
};

export const trackBookingClick = (plan: 'individual' | 'couples' | 'retreat') => {
  trackEvent('booking_click', { plan });
};
