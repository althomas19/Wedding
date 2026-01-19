# Wedding Website

A beautiful, modern garden-themed wedding website built with Jekyll.

## Features

- Modern, elegant design with sage green and blush color palette
- Fully responsive (mobile, tablet, desktop)
- 9 complete pages: Home, Our Story, Details, Gallery, Wedding Party, Travel, Registry, RSVP, FAQ
- Easy to customize with data files
- Ready for GitHub Pages deployment

## Getting Started

### Prerequisites

- Ruby (version 2.5 or higher)
- Bundler

### Installation

1. Install dependencies:
```bash
cd GCATWedding
bundle install
```

2. Run the development server:
```bash
bundle exec jekyll serve
```

3. Open your browser to `http://localhost:4000`

## Customization

### Update Couple Information

Edit `_config.yml` to change:
- Couple names
- Wedding date
- Contact email

### Update Event Details

Edit files in the `_data/` folder:
- `events.yml` - Ceremony and reception details
- `timeline.yml` - Day-of schedule
- `wedding_party.yml` - Bridesmaids and groomsmen
- `accommodations.yml` - Hotel information
- `registry.yml` - Registry links
- `faq.yml` - Frequently asked questions

### Add Photos

1. Place your photos in `/assets/images/`
2. Update `gallery.html` to reference your images
3. Add a hero background image by updating the hero CSS

### Update Content Pages

All content pages are in the root directory:
- `our-story.md` - Your love story
- `details.md` - Event details
- `travel.md` - Travel information
- `registry.md` - Registry information
- `rsvp.md` - RSVP page (update Google Form link)
- `faq.md` - FAQ page

### Customize Colors

Edit `_sass/_variables.scss` to change:
- Color palette
- Fonts
- Spacing
- Breakpoints

## Deployment to GitHub Pages

1. Create a new GitHub repository
2. Update `_config.yml`:
   ```yaml
   baseurl: "/your-repo-name"
   url: "https://yourusername.github.io"
   ```
3. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```
4. Enable GitHub Pages in repository settings (Settings → Pages → Source: main branch)
5. Your site will be live at `https://yourusername.github.io/your-repo-name/`

## File Structure

```
GCATWedding/
├── _config.yml           # Jekyll configuration
├── _data/                # Data files (events, timeline, etc.)
├── _includes/            # Reusable components (header, footer, hero)
├── _layouts/             # Page templates
├── _sass/                # SCSS partials
├── assets/
│   ├── css/             # Compiled CSS
│   ├── images/          # Images and photos
│   └── js/              # JavaScript files
├── index.html           # Homepage
├── our-story.md         # Our story page
├── details.md           # Event details page
├── gallery.html         # Photo gallery
├── wedding-party.md     # Wedding party page
├── travel.md            # Travel info page
├── registry.md          # Registry page
├── rsvp.md             # RSVP page
└── faq.md              # FAQ page
```

## Support

For Jekyll documentation, visit: https://jekyllrb.com/docs/

## License

This project is open source and available for personal use.
