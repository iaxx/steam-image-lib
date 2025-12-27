/**
 * Utility functions for generating Steam CDN URLs.
 * 
 * Steam Image URL Patterns:
 * - Header: https://cdn.cloudflare.steamstatic.com/steam/apps/{appid}/header.jpg
 * - Capsule (616x353): https://cdn.cloudflare.steamstatic.com/steam/apps/{appid}/library_600x900.jpg 
 *   (Wait, library_600x900 is vertical. "capsule_616x353.jpg" is usually the main store image)
 * 
 * Common patterns verified:
 * - Header: header.jpg
 * - Small Capsule: capsule_sm_120.jpg
 * - Main Capsule: capsule_616x353.jpg
 * - Hero Capsule: library_hero.jpg
 * - Library Portrait: library_600x900.jpg
 * - Logo: logo.png
 */

const STEAM_CDN_BASE = "https://cdn.cloudflare.steamstatic.com/steam/apps";
const COMMUNITY_CDN_BASE = "https://media.steampowered.com/steamcommunity/public/images";

export type SteamImageSize = 'header' | 'small_capsule' | 'main_capsule' | 'hero' | 'library_portrait' | 'logo';

/**
 * Generates the URL for a specific Steam app image.
 * @param appId The Steam Application ID
 * @param type The type of image requested
 * @returns The full URL to the image
 */
export function getSteamAppImage(appId: number, type: SteamImageSize): string {
    switch (type) {
        case 'header':
            return `${STEAM_CDN_BASE}/${appId}/header.jpg`;
        case 'small_capsule':
            return `${STEAM_CDN_BASE}/${appId}/capsule_sm_120.jpg`;
        case 'main_capsule':
            return `${STEAM_CDN_BASE}/${appId}/capsule_616x353.jpg`;
        case 'hero':
            return `${STEAM_CDN_BASE}/${appId}/library_hero.jpg`;
        case 'library_portrait':
            return `${STEAM_CDN_BASE}/${appId}/library_600x900.jpg`;
        case 'logo':
            return `${STEAM_CDN_BASE}/${appId}/logo.png`;
        default:
            return `${STEAM_CDN_BASE}/${appId}/header.jpg`;
    }
}

/**
 * Generates the URL for a Steam app icon.
 * Note: Icons often require a specific hash which comes from the API.
 * If hash is provided, uses community CDN. If not, falls back to a generic one or tries a guess (which rarely works for icons).
 * 
 * @param appId The Steam Application ID
 * @param hash The icon hash from the Steam API (optional but recommended)
 */
export function getSteamAppIcon(appId: number, hash?: string): string {
    if (hash) {
        return `${COMMUNITY_CDN_BASE}/apps/${appId}/${hash}.jpg`;
    }
    // Fallback or placeholder - but icons usually need the hash.
    // We can return a safe placeholder or undefined handling in components.
    // For now, let's return a specific sized header as a "icon" fallback if logic demands, 
    // but correctly we should ask for hash.
    return '';
}

// Convenience aliases
export const getSteamAppHeader = (appId: number) => getSteamAppImage(appId, 'header');
export const getSteamAppCapsuleSmall = (appId: number) => getSteamAppImage(appId, 'small_capsule');
export const getSteamAppCapsuleMain = (appId: number) => getSteamAppImage(appId, 'main_capsule');
export const getSteamAppHero = (appId: number) => getSteamAppImage(appId, 'hero');
export const getSteamAppPortrait = (appId: number) => getSteamAppImage(appId, 'library_portrait');
export const getSteamAppLogo = (appId: number) => getSteamAppImage(appId, 'logo');
