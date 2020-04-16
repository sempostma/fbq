
let initialized = false

export const init = (pixelId: string, advancedMatching = {}, options = { autoConfig: true }) => {
  if (typeof window === 'undefined') return initialized
  if (initialized) return initialized
  if (typeof pixelId !== 'string' || pixelId.trim().length === 0) throw new TypeError('pixelId should be a non empty "string"')
  if (typeof advancedMatching !== 'object') throw new TypeError('advancedMatching should be of type "object"')
  if (typeof options !== 'object') throw new TypeError('options should be of type "object"')

  /* tslint:disable */
  // Facebook Pixel Code -->
  const v = (function(f:any,b:any,e: any,v:any,n?:any,t?:any,s?:any)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)})(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  // End Facebook Pixel Code -->
  /* tslint:enable */
  const fbq = (window as any).fbq
  fbq('track', 'PageView')
  if (options.autoConfig === false) {
    fbq('set', 'autoConfig', false, pixelId)
  }
  fbq('init', pixelId, advancedMatching)
  initialized = true;
  return initialized
}

type TrackType = 'AddPaymentInfo' | 'AddToCart' | 'AddToWishlist'
  | 'CompleteRegistration' | 'Contact' | 'CustomizeProduct'
  | 'Donate' | 'FindLocation' | 'InitiateCheckout' | 'Lead'
  | 'Purchase' | 'Schedule' | 'Search' | 'StartTrial'
  | 'SubmitApplication' | 'Subscribe' | 'ViewContent' | 'PageView'

export const track = (trackType: TrackType, options?: any) => {
  if (typeof window !== 'undefined' && initialized && 'fbq' in window) {
    if (options) (window as any).fbq('track', trackType, options)
    else (window as any).fbq('track', trackType)
    return true
  } else {
    return false
  }
}

export const trackCustom = <T extends string>(trackType: T, options?: any) => {
  if (typeof window !== 'undefined' && initialized && 'fbq' in window) {
    if (options) (window as any).fbq('trackCustom', trackType, options)
    else (window as any).fbq('trackCustom', trackType)
    return true
  } else {
    return false
  }
}

