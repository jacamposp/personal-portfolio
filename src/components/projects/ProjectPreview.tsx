import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Play } from 'lucide-react'
import { getScreenshotUrl } from '@/lib/project-screenshot'

interface ProjectPreviewProps {
  url?: string
  title: string
  image?: string
  /** screenshot = auto image from URL | live = iframe (only when active) */
  mode?: 'screenshot' | 'live'
  /** For live mode — mount iframe only when true (click-to-load) */
  active?: boolean
  className?: string
  projectNumber?: string
  /** Show "live preview" hint overlay (card only) */
  showLiveHint?: boolean
}

export function ProjectPreview({
  url,
  title,
  image,
  mode = 'screenshot',
  active = false,
  className = '',
  projectNumber,
  showLiveHint = false,
}: ProjectPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [screenshotFailed, setScreenshotFailed] = useState(false)
  const [iframeLoading, setIframeLoading] = useState(true)

  const screenshotSrc = url && !screenshotFailed ? getScreenshotUrl(url) : undefined
  const fallbackSrc = image
  const displayImage = screenshotSrc ?? fallbackSrc

  useEffect(() => {
    if (shouldLoad || mode === 'live') return
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [shouldLoad, mode])

  useEffect(() => {
    if (mode === 'live' && active) {
      setIframeLoading(true)
    }
  }, [mode, active, url])

  if (mode === 'live') {
    if (!active || !url) return null

    return (
      <div className={`relative w-full bg-background ${className}`}>
        {iframeLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-[1] bg-background">
            <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest animate-pulse">
              Loading live preview…
            </span>
          </div>
        )}
        <iframe
          src={url}
          title={`${title} live preview`}
          className="w-full h-[min(60vh,480px)] border-0"
          onLoad={() => setIframeLoading(false)}
        />
        {projectNumber && (
          <span className="absolute bottom-4 left-5 font-mono text-xs text-gold-accent tracking-widest pointer-events-none z-10">
            {projectNumber}
          </span>
        )}
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-background ${className}`}
    >
      {displayImage && shouldLoad && (
        <img
          src={displayImage}
          alt={`${title} preview`}
          className="w-full h-full object-cover object-top"
          loading="lazy"
          onError={() => {
            if (screenshotSrc && !screenshotFailed) {
              setScreenshotFailed(true)
            }
          }}
        />
      )}

      {displayImage && !shouldLoad && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest animate-pulse">
            Loading preview…
          </span>
        </div>
      )}

      {!displayImage && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted/30">
          <ExternalLink className="w-6 h-6 text-muted-foreground/50" />
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
            No preview available
          </span>
        </div>
      )}

      {showLiveHint && url && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-[2]">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold-accent/40 bg-background/80 backdrop-blur-sm">
            <Play className="w-3.5 h-3.5 text-gold-accent fill-gold-accent" />
            <span className="font-mono text-xs text-foreground uppercase tracking-widest">
              Live preview
            </span>
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent pointer-events-none" />

      {projectNumber && (
        <span className="absolute top-4 left-4 font-mono text-xs text-gold-accent/80 tracking-widest z-10">
          {projectNumber}
        </span>
      )}
    </div>
  )
}
