const SCREENSHOT_WIDTH = 1280
const SCREENSHOT_HEIGHT = 800

const screenshotCache = new Map<string, string>()

function getMicrolinkApiUrl(projectUrl: string): string {
  const params = new URLSearchParams({
    url: projectUrl,
    screenshot: 'true',
    'viewport.width': String(SCREENSHOT_WIDTH),
    'viewport.height': String(SCREENSHOT_HEIGHT),
    'viewport.deviceScaleFactor': '1',
  })

  return `https://api.microlink.io/?${params.toString()}`
}

interface MicrolinkResponse {
  status: string
  data?: {
    screenshot?: {
      url?: string
    }
  }
}

/** Fetches the CDN image URL from Microlink (API returns JSON, not a raw image). */
export async function fetchScreenshotUrl(projectUrl: string): Promise<string> {
  const cached = screenshotCache.get(projectUrl)
  if (cached) return cached

  const response = await fetch(getMicrolinkApiUrl(projectUrl))
  if (!response.ok) {
    throw new Error(`Microlink request failed: ${response.status}`)
  }

  const json = (await response.json()) as MicrolinkResponse
  const screenshotUrl = json.data?.screenshot?.url

  if (!screenshotUrl) {
    throw new Error('Microlink response missing screenshot URL')
  }

  screenshotCache.set(projectUrl, screenshotUrl)
  return screenshotUrl
}
