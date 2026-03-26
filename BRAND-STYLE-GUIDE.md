# Brand Style Guide — Financial Advertorial Landing Pages

Derived from aktiengurus.com reference. Applied to Core Critical Metals campaign.

---

## Brand Voice

### Tone Dimensions
| Dimension    | Setting          | Example                                                        |
|-------------|-----------------|----------------------------------------------------------------|
| Formality   | Formal-editorial | Written as a journalist, not a marketer                        |
| Enthusiasm  | Controlled urgency | Facts presented with weight, not exclamation marks            |
| Humor       | None             | Zero humor — financial authority demands seriousness           |
| Technical   | Accessible expert | Industry terms used but always contextualized for retail investors |

### Voice Rules
- Write as editorial journalism — third-person, authoritative, fact-forward
- Address readers as "investors" not "you" (German: "Anleger", English: "investors")
- Lead every section with the most impactful data point
- Use bold for company names, dollar figures, percentages, and key claims
- Numbers are always specific: "$2 billion" not "billions", "7,600 hectares" not "thousands of hectares"
- Never use exclamation marks in body copy
- CTAs are implicit — the article IS the CTA. Ticker symbols and trading details enable action
- Every claim is anchored to an authority: government policy, named institution, named company

### Persuasion Hierarchy
1. **Headline:** Hook with scale + urgency (Executive Order, billions, race)
2. **Context:** Macro trend that makes this inevitable (supply chain crisis)
3. **Authority transfer:** Government actions, institutional moves, named companies
4. **Company introduction:** Positioned as the solution to the stated problem
5. **Proof points:** Geological data, partnerships, comparable projects
6. **Numbered reasons:** Structured argument for investment thesis
7. **Action enabler:** Trading details table with ticker, ISIN, WKN

---

## Color Palette

| Token               | Hex       | Usage                                          |
|---------------------|-----------|-------------------------------------------------|
| `--color-primary`   | `#C8960C` | Gold/amber — accent, links, hover borders, CTAs |
| `--color-dark`      | `#0A0A0A` | Header, footer, section backgrounds             |
| `--color-text`      | `#1A1A1A` | Primary body text                               |
| `--color-text-secondary` | `#4A4A4A` | Secondary text, meta info                  |
| `--color-bg`        | `#FFFFFF` | Content background                              |
| `--color-bg-light`  | `#F5F5F5` | Section alternating background                  |
| `--color-border`    | `#E0E0E0` | Table borders, dividers                         |
| `--color-danger`    | `#D32F2F` | Risk warnings, disclaimer accents               |
| `--color-footer-text` | `#B0B0B0` | Footer body text                              |
| `--color-cookie-bg` | `#1A1A1A` | Cookie banner background                        |

---

## Typography

| Element        | Font           | Weight | Size        | Line Height |
|---------------|----------------|--------|-------------|-------------|
| Body          | Roboto, sans-serif | 400 | 16px (1rem) | 1.75        |
| H1 (Hero)     | Roboto         | 700    | clamp(28px, 4vw, 42px) | 1.2 |
| H2 (Sections) | Roboto         | 700    | 24px        | 1.3         |
| H3 (Subheads) | Roboto         | 600    | 20px        | 1.4         |
| Meta text     | Roboto         | 400    | 13px        | 1.5         |
| Table text    | Roboto         | 400    | 14px        | 1.6         |
| Disclaimer    | Roboto         | 400    | 12px        | 1.6         |
| Legal header  | Roboto         | 500    | 11px        | 1.4         |

---

## Layout

- Max content width: `780px` (article body)
- Max container width: `1200px`
- Content padding: `24px` horizontal on mobile, `0` on desktop (centered)
- Section spacing: `48px` vertical between major sections
- Paragraph spacing: `20px`
- Image max-width: `300px` centered for logos, `100%` for hero

---

## Component Patterns

### Legal Disclaimer Bar (Header)
- Position: fixed top, above navigation
- Background: `--color-danger` at 10% opacity, border-bottom `1px solid --color-danger`
- Text: centered, small, contains risk warning + "Anzeige" / "Advertisement" label
- Always visible — never dismissible

### Cookie Banner
- Position: fixed bottom
- Background: `--color-cookie-bg` with `0.97` opacity
- Backdrop blur: `10px`
- Two buttons: "Akzeptieren" (primary, gold) + "Nur notwendige" (secondary, outlined)
- Link to Datenschutz page
- Dismissed on click, preference stored in localStorage

### Hero Section
- Full-width background image with dark overlay (`rgba(0,0,0,0.6)`)
- H1 headline over image
- Category badge + meta info (author, date, reading time)

### Article Body
- Single column, `780px` max-width
- Company logos centered, max `260px` wide
- Bold text for key claims, company names, figures
- Ordered/unordered lists with increased left padding
- Pull quotes for key statements

### Company Details Table
- Fixed layout, full width within content column
- Two columns: label + value
- Border: `1px solid --color-border`
- Header row: `--color-dark` background, white text
- Alternating row colors for readability

### Footer
- Dark background (`--color-dark`)
- Logo centered (white version)
- Links: Impressum | Datenschutz | Haftungsausschluss
- Copyright line
- Social icons (optional)

### Impressum Section
- Required by TMG §5 for German pages
- Contains: company name, address, contact, registry info, responsible person
- Linked from footer and legal header

---

## Image Strategy

| Position     | Image Type              | Purpose                        |
|-------------|------------------------|--------------------------------|
| Hero        | Geological/mining photo | Establish authority + context  |
| Mid-article | Company logo           | Brand recognition              |
| Mid-article | Partner/client logos    | Trust transfer via association  |
| Mid-article | Map or site photo      | Geographic proof               |
| Near CTA    | Chart or infographic   | Data visualization             |

All images: `loading="lazy"` except hero (`fetchpriority="high"`), all with descriptive `alt` text, all with `width`/`height` attributes.
