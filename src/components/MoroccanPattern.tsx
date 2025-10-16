export function MoroccanPattern({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="moroccan-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          {/* Star pattern */}
          <path
            d="M50 10 L55 30 L75 30 L60 42 L65 62 L50 50 L35 62 L40 42 L25 30 L45 30 Z"
            fill="currentColor"
            opacity="0.1"
          />
          <circle cx="50" cy="50" r="3" fill="currentColor" opacity="0.15" />
          <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.1" />
          <circle cx="90" cy="10" r="2" fill="currentColor" opacity="0.1" />
          <circle cx="10" cy="90" r="2" fill="currentColor" opacity="0.1" />
          <circle cx="90" cy="90" r="2" fill="currentColor" opacity="0.1" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#moroccan-pattern)" />
    </svg>
  );
}

export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 20 Q50 10, 100 20 T200 20 T300 20 T400 20"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />
      <circle cx="200" cy="20" r="8" fill="currentColor" opacity="0.4" />
      <circle cx="200" cy="20" r="4" fill="currentColor" />
      <circle cx="100" cy="20" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="300" cy="20" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  );
}
