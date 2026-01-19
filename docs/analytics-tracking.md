# analytics tracking

## overview

This site uses **Google Analytics 4 (GA4)** with enhanced tracking for page views and external link clicks.

**Tracking ID**: `G-15FEWR8N0C`

## what is tracked

### 1. page views
- Automatically tracked on every page load
- Tracks:
  - Page path
  - Page title
  - Full page location
  
### 2. external link clicks
All external links are tracked with detailed information:
- **Event name**: `click`
- **Category**: `outbound`
- **Event label**: The full URL
- **Link text**: What the user clicked on
- **Link URL**: Where they're going

### tracked links

#### hero section
- Instagram button: `Instagram - Hero CTA`
- TikTok button: `TikTok - Hero CTA`

#### contact section
- Email link: `Email - Contact Section`
- Instagram button: `Instagram - Contact Section`
- TikTok button: `TikTok - Contact Section`

## implementation

### automatic tracking
The site has automatic external link tracking built into the Google Analytics script. Any external link clicked will be tracked automatically.

### manual tracking
For specific links, we've added manual tracking with labels to identify which button was clicked.

## viewing analytics data

### in google analytics dashboard

1. **Page Views**
   - Navigate to: Reports → Engagement → Pages and screens
   - See which pages get the most traffic

2. **External Link Clicks**
   - Navigate to: Reports → Engagement → Events
   - Look for: `click` event
   - Filter by: `event_category = outbound`
   - View `event_label` to see which links were clicked

3. **Real-Time Tracking**
   - Navigate to: Reports → Realtime
   - See live visitors and what they're clicking

### custom reports

You can create custom reports to:
- Compare Hero CTA performance vs Contact Section
- Track Instagram vs TikTok click rates
- See conversion paths (which buttons drive the most engagement)

## event structure

```javascript
gtag('event', 'click', {
  event_category: 'outbound',
  event_label: 'https://www.instagram.com/matteokuberek/',
  link_text: 'Instagram - Hero CTA',
  link_url: 'https://www.instagram.com/matteokuberek/'
});
```

## testing analytics

### test in development

1. Open browser console (F12)
2. Type: `window.gtag`
3. Should see the gtag function (not undefined)
4. Click any external link
5. Check console for tracking events

### test in production

1. Go to Google Analytics → Realtime
2. Visit your site
3. Click on external links
4. See events appear in real-time

### debug mode

To see detailed tracking info in console:
```javascript
// Add to browser console
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'gtm.debug': true
});
```

## files modified

- `src/app/layout.tsx` - Enhanced GA script with automatic tracking
- `src/app/components/analytics.tsx` - Analytics component & utility functions
- `src/app/page.tsx` - Added Analytics component
- `src/app/components/hero-section.tsx` - Added click tracking
- `src/app/components/contact-section.tsx` - Added click tracking

## privacy

- No personal data is collected
- IP addresses are anonymized by Google
- Users can opt-out via browser settings or extensions
- Complies with standard web analytics practices

## maintenance

- **Tracking ID**: Update in `src/app/layout.tsx` and `src/app/components/analytics.tsx`
- **New Links**: Add `onClick={() => trackExternalLink(url, label)}` to track them
- **Custom Events**: Use `trackEvent(name, params)` function from `analytics.tsx`

## future enhancements

Potential additions:
- Newsletter signup tracking
- Video play tracking (if added)
- Scroll depth tracking
- Time on page tracking
- Download tracking (if PDFs/resources added)

---

Last updated: January 19, 2026
