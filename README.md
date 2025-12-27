# steam-image-utils

A lightweight, dependency-free utility to generate standard Steam CDN image URLs for games using their App ID.

## Installation

This is currently a local library. You can include it in your project or publish it to a registry.

## Usage

```typescript
import { 
    getSteamAppHeader, 
    getSteamAppCapsuleMain, 
    getSteamAppPortrait 
} from 'steam-image-utils';

const appId = 440; // Team Fortress 2

const headerUrl = getSteamAppHeader(appId);
// https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg

const capsuleUrl = getSteamAppCapsuleMain(appId);
// https://cdn.cloudflare.steamstatic.com/steam/apps/440/capsule_616x353.jpg

const portraitUrl = getSteamAppPortrait(appId);
// https://cdn.cloudflare.steamstatic.com/steam/apps/440/library_600x900.jpg
```

## Available Functions

- `getSteamAppHeader(appId)`: Wide header image.
- `getSteamAppCapsuleSmall(appId)`: Small 120px wide capsule.
- `getSteamAppCapsuleMain(appId)`: Main store capsule (616x353).
- `getSteamAppHero(appId)`: Large library hero image.
- `getSteamAppPortrait(appId)`: Vertical library portrait (600x900).
- `getSteamAppLogo(appId)`: Game logo (transparent PNG).
- `getSteamAppIcon(appId, hash)`: Game icon (requires hash from Steam API).
- `getSteamAppImage(appId, type)`: Generic getter (types: 'header', 'small_capsule', 'main_capsule', 'hero', 'library_portrait', 'logo').
