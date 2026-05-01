# VER Vendor Platform — Logos Folder

Place vendor logo files here to override the Clearbit auto-fetch.

## Naming Convention

Files must be named using the vendor domain (matching the `domain` field in vendors.csv):

```
workday.com.png
nttdata.com.png
cognizant.com.svg
insightglobal.com.png
```

## Supported Formats

PNG (preferred), SVG, JPG, WebP

## How It Works

The platform checks this folder first on every vendor card load:
1. `/logos/{domain}.png` → use if exists
2. `/logos/{domain}.svg` → use if exists  
3. Clearbit API → `https://logo.clearbit.com/{domain}` → use if found
4. Favicon fallback → `https://www.{domain}/favicon.ico`
5. Styled initials → generated from vendor name (always works)

## Where to Get Logos

Most vendors provide brand assets on their press/brand pages:
- NTT Data: nttdata.com/global/en/media/brand
- Cognizant: cognizant.com/en/media-center/brand-assets
- Workday: workday.com/en-us/company/media.html
- AWS: aws.amazon.com/trademark-guidelines
- For staffing firms: request from your account rep or check their press kit

## Recommended Size

Square format, minimum 200×200px. The platform renders logos at 40×40px
in cards and 52×52px in detail view — higher res files will look sharper
on retina displays.

## Adding Logos

1. Drop the file in this `/logos/` folder
2. Name it `{domain}.{ext}` (e.g. `workday.com.png`)
3. Commit to GitHub — the platform reflects it on next page load

---
*VER Intelligence Hub · Salesforce DET · FY27*
