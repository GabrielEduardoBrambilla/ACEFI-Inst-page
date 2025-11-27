# Constants Directory

This directory contains all centralized text content and configuration values for the ACEFI website.

## Structure

```
constants/
├── strings/
│   └── pt.ts          # Portuguese text content
├── contacts.ts        # Contact information and external links
├── index.ts           # Central export point
└── README.md          # This file
```

## Usage

### Importing Constants

```typescript
// Import all constants
import { STRINGS_PT, CONTACTS } from '../../constants'

// Use in your component
<h1>{STRINGS_PT.nav.ourHistory}</h1>
<a href={CONTACTS.socialMedia.instagram}>Instagram</a>
```

## Files

### `strings/pt.ts`
Contains all Portuguese text content organized by section:
- **nav**: Navigation menu items
- **banner**: Main banner text and messages
- **contentSections**: Content section titles and descriptions
- **events**: Event dates and information
- **history**: History section headings and content
- **contactForm**: Contact form labels, placeholders, and templates
- **footer**: Footer copyright text

### `contacts.ts`
Contains external contact information:
- **whatsapp**: WhatsApp phone numbers
- **socialMedia**: Social media URLs (Instagram, etc.)
- **location**: Google Maps URLs

## How to Update Content

### Changing Text Content

1. Open [src/constants/strings/pt.ts](strings/pt.ts)
2. Find the text you want to change
3. Edit the value
4. Save the file - changes will reflect immediately

Example:
```typescript
// Before
nav: {
  ourHistory: 'Nossa história',
}

// After
nav: {
  ourHistory: 'Nossa História',
}
```

### Changing Contact Information

1. Open [src/constants/contacts.ts](contacts.ts)
2. Update the relevant values
3. Save the file

Example:
```typescript
// Update WhatsApp number
whatsapp: {
  phoneNumber: '5545998294308', // Change this number
}
```

### Changing Event Dates

1. Open [src/constants/strings/pt.ts](strings/pt.ts)
2. Navigate to the `events` section
3. Update `dateWritten` and `dateNumeric`
4. Save the file

Example:
```typescript
events: {
  dateWritten: ' QUINZE DE AGOSTO ',
  dateNumeric: ' 15/08 ',
}
```

## Adding New Languages (Future)

To add support for a new language:

1. Create a new file: `src/constants/strings/[language-code].ts`
2. Copy the structure from `pt.ts`
3. Translate all values
4. Export from `index.ts`
5. Add language switching logic in your components

## Benefits of This Approach

- **Easy Updates**: Change text in one place instead of searching through multiple files
- **Consistency**: Same text is always the same across the website
- **Maintainability**: Clear organization of all content
- **Future-Ready**: Easy to add multi-language support later
- **Type Safety**: TypeScript ensures you don't have typos in text keys
