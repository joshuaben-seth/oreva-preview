import { cn } from '@/lib/styles'

interface ImagePlaceholderProps {
  width?: string | number
  height?: string | number
  className?: string
}

export default function ImagePlaceholder({
  width,
  height,
  className,
}: ImagePlaceholderProps) {
  const style: React.CSSProperties = {}
  
  if (width) {
    style.width = typeof width === 'number' ? `${width}px` : width
  }
  
  if (height) {
    style.height = typeof height === 'number' ? `${height}px` : height
  }

  return (
    <div
      style={style}
      className={cn(
        'bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg',
        !width && 'w-full',
        !height && 'h-full',
        className
      )}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="text-gray-400 dark:text-gray-600"
      >
        <path
          d="m21 19-4-4-4.35 4.35a1 1 0 0 1-.7.3 1 1 0 0 1-.71-.3L9 17l-4 4a1 1 0 0 0 .7 1.7h14.6a1 1 0 0 0 .7-1.7Z"
          fill="currentColor"
        />
        <path
          d="M5 3a2 2 0 0 0-2 2v11l4-4a1 1 0 0 1 1.42 0L12 15.59l2.24-2.24a1 1 0 0 1 1.42 0L21 19V5a2 2 0 0 0-2-2H5Z"
          fill="currentColor"
          opacity="0.6"
        />
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" opacity="0.8" />
      </svg>
    </div>
  )
}