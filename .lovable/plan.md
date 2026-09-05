# Premium Doctor Showcase Website

## Goal
Build a polished, multi-page official website for **Dr. K. Prashanth Kumar**, using the supplied portrait as the primary doctor photography and only the factual medical information provided.

## Site structure
- Create a shared sticky header, mobile navigation drawer, consultation call-to-action, and multi-column footer.
- Build dedicated routes for Home, About, Expertise, Services, Health Tips, six individual article layouts, Success Stories, Locations, Contact, Privacy Policy, and Medical Disclaimer.
- Keep the home page journey in the requested order: doctor introduction, trust indicators, expertise, services, rheumatology, care process, surgical gallery, education, trust, locations, consultation, contact, and final call-to-action.
- Ensure every navigation item opens a real page and every content route has unique metadata.

## Visual direction
- Use an elegant off-white, deep navy/medical blue, soft gray, and restrained accent palette with semantic design tokens.
- Use Manrope or Plus Jakarta Sans with strong hierarchy, generous whitespace, restrained rounded corners, and subtle shadows.
- Use the uploaded portrait prominently in the opening and doctor biography areas without altering the doctor’s identity.
- Add only supporting medical imagery that is privacy-conscious and does not imply invented outcomes; if suitable surgery images are not available, present a restrained care gallery without patient claims.
- Apply subtle reveal, navigation, image, card, button, and gallery transitions with reduced-motion support.

## Page content and interactions
- Implement all supplied headings, credentials, specialties, services, rheumatology topics, care steps, contact details, and location information without adding awards, timings, affiliations, testimonials, outcomes, or statistics.
- Build an accessible image gallery with captions, keyboard-operable lightbox, close controls, and smooth transitions.
- Create six conservative patient-education article pages for Implant Awareness, Implant Removal, Myths & Facts, Fracture Management, Healing, and Nutrition, each with a featured image, publication date, factual general guidance, clear medical disclaimer, and related articles.
- Add the provided Google Maps destination links to the two location cards and directions buttons; do not invent street addresses or exact opening hours.
- Make phone and email actions directly usable, including a persistent but unobtrusive mobile consultation action.

## Secure consultation requests
- Enable Lovable Cloud for secure request storage.
- Add a consultation-request table with explicit grants and row-level protections: public visitors may submit a request, while requests are not publicly readable.
- Validate every field in the browser and on the server, including name length, Indian mobile-number format, allowed location values, consultation date, and message length.
- Provide loading, field error, submission error, and success states without requiring patient accounts.
- Include privacy consent language appropriate for the submitted contact and health-concern information.

## Search, accessibility, and performance
- Add the requested home title and description plus unique route-level titles, descriptions, Open Graph tags, canonical paths, and Doctor/Physician-oriented structured data where accurate.
- Create a favicon derived from the doctor/brand treatment, update robots.txt, and prepare sitemap handling once a public production URL exists; no placeholder domain will be embedded.
- Use one clear H1 per page, semantic landmarks, logical headings, labeled fields, visible focus states, useful alt text, keyboard navigation, 44px touch targets, and strong contrast.
- Optimize and lazy-load non-critical images, keep scripts restrained, and split route code naturally through the existing application router.

## Responsive and quality verification
- Verify the complete experience at desktop widths (1440, 1280, 1024), tablet (768), and mobile (430, 390, 375).
- Check navigation drawer behavior, consultation submission, article navigation, gallery/lightbox controls, location links, phone/email links, focus order, overflow, content overlap, and reduced-motion behavior.
- Resolve build, runtime, console, and accessibility issues before completion.

## Known content boundaries
- The supplied portrait will be reused where appropriate; no fake alternate portraits of the doctor will be generated.
- Surgery-related source images were not supplied, so gallery imagery will remain generic and privacy-conscious, with no patient names or treatment-result claims.
- Consultation timings and exact street addresses will remain omitted unless supplied later.
