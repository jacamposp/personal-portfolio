const SCREENSHOT_WIDTH = 1280
const SCREENSHOT_HEIGHT = 800

/** Auto-generated screenshot via Microlink (no manual captures needed). */
export function getScreenshotUrl(projectUrl: string): string {
  const params = new URLSearchParams({
    url: projectUrl,
    screenshot: 'true',
    meta: 'false',
    'viewport.width': String(SCREENSHOT_WIDTH),
    'viewport.height': String(SCREENSHOT_HEIGHT),
    'viewport.deviceScaleFactor': '1',
  })

  return `https://api.microlink.io/?${params.toString()}`
}
