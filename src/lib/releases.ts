/**
 * Fetches release metadata from GitHub at build time.
 * Cached at module level so multiple components share one network call.
 */

export interface ReleaseAsset {
  name: string;
  browser_download_url: string;
  size: number;
}

export interface Release {
  tag_name: string;
  name: string | null;
  html_url: string;
  published_at: string;
  prerelease: boolean;
  draft: boolean;
  assets: ReleaseAsset[];
}

export const REPO_OWNER = "CS-StudentGroup";
export const REPO_NAME = "pdc_final_project";
export const REPO_URL = `https://github.com/${REPO_OWNER}/${REPO_NAME}`;
export const RELEASES_PAGE_URL = `${REPO_URL}/releases`;
export const LATEST_RELEASE_URL = `${REPO_URL}/releases/latest`;

let cache: Release[] | null = null;

export async function getReleases(): Promise<Release[]> {
  if (cache) return cache;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/releases?per_page=30`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
        },
      },
    );

    if (!res.ok) {
      console.warn(`[releases] GitHub API ${res.status} ${res.statusText}`);
      cache = [];
      return cache;
    }

    const data = (await res.json()) as Release[];
    cache = data.filter((r) => !r.draft);
    return cache;
  } catch (err) {
    console.warn("[releases] fetch failed:", err);
    cache = [];
    return cache;
  }
}

export async function getLatestRelease(): Promise<Release | null> {
  const all = await getReleases();
  return all.find((r) => !r.prerelease) ?? all[0] ?? null;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}
