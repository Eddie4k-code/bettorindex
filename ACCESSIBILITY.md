# Accessibility QA Notes (Website)

Last updated: 2026-07-31

Manual checklist for bettorindex.app. Test with keyboard-only navigation and VoiceOver (Safari on iOS or macOS).

## Global
- [ ] Skip to main content link appears on Tab and jumps to main content
- [ ] Mobile menu button opens/closes navigation (width <= 700px)
- [ ] Escape closes mobile menu and returns focus to menu button
- [ ] Footer includes Accessibility page link

## Homepage
- [ ] Hero Player Prop / Game Line tabs announce selected state
- [ ] Arrow Left/Right switches hero preview tabs
- [ ] FAQ sections expand/collapse with native details/summary

## Accessibility page
- [ ] `/accessibility/` renders commitment, limitations, and support email

## Known phase 2 gaps
- Full color contrast audit pending
- Automated axe/Playwright a11y tests not yet in CI

Feedback: support@bettorindex.app
