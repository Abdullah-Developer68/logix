/* eslint-disable */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Generate an ultra-high fidelity, photorealistic vector SVG of a modern iPhone
// with Dynamic Island, titanium rails, iOS status bar, and vibrant Logix mobile app UI.

const width = 1376;
const height = 768;

// Phone dimensions (centered in 1376x768 frame)
const phoneWidth = 330;
const phoneHeight = 650;
const phoneX = (width - phoneWidth) / 2;
const phoneY = (height - phoneHeight) / 2;
const cornerRadius = 46;

const screenMargin = 11;
const screenX = phoneX + screenMargin;
const screenY = phoneY + screenMargin;
const screenWidth = phoneWidth - screenMargin * 2;
const screenHeight = phoneHeight - screenMargin * 2;
const screenRadius = cornerRadius - 8;

const svg = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Background Gradients -->
    <radialGradient id="ambientGlow" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#183656" stop-opacity="0.85" />
      <stop offset="45%" stop-color="#0b1f3a" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#06101e" stop-opacity="1" />
    </radialGradient>

    <radialGradient id="tealSpotlight" cx="62%" cy="38%" r="40%">
      <stop offset="0%" stop-color="#1fc8aa" stop-opacity="0.32" />
      <stop offset="60%" stop-color="#1fc8aa" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#0b1f3a" stop-opacity="0" />
    </radialGradient>

    <linearGradient id="deskSurface" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0c1827" stop-opacity="0.8" />
      <stop offset="35%" stop-color="#111d2e" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#09131f" stop-opacity="1" />
    </linearGradient>

    <!-- Titanium Frame Gradients -->
    <linearGradient id="titaniumBezel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#606c7d" />
      <stop offset="25%" stop-color="#3b4450" />
      <stop offset="50%" stop-color="#242c38" />
      <stop offset="75%" stop-color="#4a5563" />
      <stop offset="100%" stop-color="#2a323d" />
    </linearGradient>

    <linearGradient id="titaniumHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#8fa0b5" stop-opacity="0.9" />
      <stop offset="20%" stop-color="#46515f" stop-opacity="0.4" />
      <stop offset="80%" stop-color="#202731" stop-opacity="0.6" />
      <stop offset="100%" stop-color="#556373" stop-opacity="0.8" />
    </linearGradient>

    <linearGradient id="screenGlass" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#081423" />
      <stop offset="50%" stop-color="#0b1a2d" />
      <stop offset="100%" stop-color="#050e18" />
    </linearGradient>

    <!-- App UI Gradients -->
    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1fc8aa" stop-opacity="0.45" />
      <stop offset="70%" stop-color="#1fc8aa" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#1fc8aa" stop-opacity="0" />
    </linearGradient>

    <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#182c44" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#0d1b2a" stop-opacity="0.95" />
    </linearGradient>

    <linearGradient id="actionPillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#1fc8aa" />
      <stop offset="100%" stop-color="#0ea88f" />
    </linearGradient>

    <!-- Filters for Dropshadows -->
    <filter id="phoneShadow" x="-25%" y="-15%" width="150%" height="150%">
      <feDropShadow dx="0" dy="24" stdDeviation="36" flood-color="#000000" flood-opacity="0.75" />
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#0b1f3a" flood-opacity="0.5" />
    </filter>

    <filter id="tealGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <filter id="islandGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <!-- Background Canvas -->
  <rect width="${width}" height="${height}" fill="url(#ambientGlow)" />
  <circle cx="860" cy="320" r="420" fill="url(#tealSpotlight)" />

  <!-- Studio Surface Desk Plane -->
  <path d="M 0 540 L ${width} 480 L ${width} ${height} L 0 ${height} Z" fill="url(#deskSurface)" opacity="0.65" />
  <line x1="0" y1="540" x2="${width}" y2="480" stroke="#1f334a" stroke-width="1.5" opacity="0.4" />

  <!-- Ambient Blurred Elements for Depth-of-Field (Laptop edge & notebook) -->
  <g opacity="0.18">
    <rect x="80" y="220" width="360" height="260" rx="14" fill="#1b2a3d" stroke="#32475e" stroke-width="2" />
    <line x1="120" y1="260" x2="280" y2="260" stroke="#48627e" stroke-width="6" stroke-linecap="round" />
    <line x1="120" y1="285" x2="380" y2="285" stroke="#32475e" stroke-width="4" stroke-linecap="round" />
    <line x1="120" y1="305" x2="340" y2="305" stroke="#32475e" stroke-width="4" stroke-linecap="round" />
  </g>
  <g opacity="0.15">
    <rect x="980" y="260" width="320" height="220" rx="12" fill="#152435" stroke="#25394e" stroke-width="2" />
    <line x1="1020" y1="300" x2="1180" y2="300" stroke="#1fc8aa" stroke-width="3" stroke-linecap="round" />
    <line x1="1020" y1="325" x2="1240" y2="325" stroke="#32475e" stroke-width="3" stroke-linecap="round" />
  </g>

  <!-- iPhone Exterior Hardware -->
  <g filter="url(#phoneShadow)">
    <!-- Side Buttons (Left: Action Button & Volume) -->
    <!-- Action Button -->
    <rect x="${phoneX - 3.5}" y="${phoneY + 115}" width="4" height="28" rx="2" fill="#46515f" stroke="#707e90" stroke-width="0.75" />
    <!-- Volume Up -->
    <rect x="${phoneX - 3.5}" y="${phoneY + 158}" width="4" height="48" rx="2" fill="#46515f" stroke="#707e90" stroke-width="0.75" />
    <!-- Volume Down -->
    <rect x="${phoneX - 3.5}" y="${phoneY + 218}" width="4" height="48" rx="2" fill="#46515f" stroke="#707e90" stroke-width="0.75" />
    <!-- Side Button (Right: Power) -->
    <rect x="${phoneX + phoneWidth - 0.5}" y="${phoneY + 170}" width="4" height="74" rx="2" fill="#46515f" stroke="#707e90" stroke-width="0.75" />

    <!-- Outer Titanium Chassis -->
    <rect x="${phoneX}" y="${phoneY}" width="${phoneWidth}" height="${phoneHeight}" rx="${cornerRadius}" fill="url(#titaniumBezel)" stroke="url(#titaniumHighlight)" stroke-width="2.5" />

    <!-- Inner Dark Bezel Rim -->
    <rect x="${phoneX + 2.5}" y="${phoneY + 2.5}" width="${phoneWidth - 5}" height="${phoneHeight - 5}" rx="${cornerRadius - 2}" fill="#0d1117" stroke="#1c232e" stroke-width="1.5" />

    <!-- OLED Display Surface -->
    <rect x="${screenX}" y="${screenY}" width="${screenWidth}" height="${screenHeight}" rx="${screenRadius}" fill="url(#screenGlass)" />
  </g>

  <!-- Clip Path for Screen Content to respect screenRadius -->
  <clipPath id="screenClip">
    <rect x="${screenX}" y="${screenY}" width="${screenWidth}" height="${screenHeight}" rx="${screenRadius}" />
  </clipPath>

  <!-- Screen UI Content (Clipped to display glass) -->
  <g clip-path="url(#screenClip)">
    <!-- Subtle Screen Ambient Gradients -->
    <circle cx="${screenX + screenWidth * 0.7}" cy="${screenY + 180}" r="160" fill="#1fc8aa" opacity="0.12" />
    <circle cx="${screenX + screenWidth * 0.2}" cy="${screenY + 420}" r="180" fill="#0d416b" opacity="0.35" />

    <!-- iOS Status Bar -->
    <g id="statusBar">
      <!-- Time (9:41) -->
      <text x="${screenX + 34}" y="${screenY + 36}" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', system-ui, sans-serif" font-size="14.5" font-weight="600" letter-spacing="-0.2px">9:41</text>
      
      <!-- Right Status Icons: Cellular, WiFi, Battery -->
      <g transform="translate(${screenX + screenWidth - 78}, ${screenY + 24})">
        <!-- Cellular (4 bars) -->
        <rect x="0" y="8" width="3" height="4" rx="0.7" fill="#FFFFFF" />
        <rect x="4.5" y="6" width="3" height="6" rx="0.7" fill="#FFFFFF" />
        <rect x="9" y="3.5" width="3" height="8.5" rx="0.7" fill="#FFFFFF" />
        <rect x="13.5" y="1" width="3" height="11" rx="0.7" fill="#FFFFFF" />

        <!-- WiFi Waves -->
        <path d="M 23 11 A 3 3 0 0 1 27 11 M 21 8 A 6.5 6.5 0 0 1 29 8 M 19 5 A 10 10 0 0 1 31 5" fill="none" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" />

        <!-- Battery Shell -->
        <rect x="36" y="2" width="22" height="11" rx="3.5" fill="none" stroke="#FFFFFF" stroke-width="1.2" />
        <rect x="38" y="4" width="16" height="7" rx="2" fill="#1fc8aa" />
        <path d="M 59 5.5 C 59.8 6 60 6.5 60 7.5 C 60 8.5 59.8 9 59 9.5" fill="#FFFFFF" />
      </g>
    </g>

    <!-- Dynamic Island (Pill) -->
    <g id="dynamicIsland" filter="url(#islandGlow)">
      <rect x="${screenX + (screenWidth - 108) / 2}" y="${screenY + 16}" width="108" height="30" rx="15" fill="#000000" stroke="#1a1e24" stroke-width="0.8" />
      <!-- Front Camera Lens dot -->
      <circle cx="${screenX + (screenWidth - 108) / 2 + 86}" cy="${screenY + 31}" r="5" fill="#090d14" stroke="#162235" stroke-width="1" />
      <circle cx="${screenX + (screenWidth - 108) / 2 + 87}" cy="${screenY + 30}" r="1.5" fill="#2b4363" opacity="0.8" />
      <!-- FaceID Sensor Indicator -->
      <circle cx="${screenX + (screenWidth - 108) / 2 + 24}" cy="${screenY + 31}" r="3" fill="#0c1219" />
    </g>

    <!-- App Top Navigation Bar -->
    <g transform="translate(${screenX + 22}, ${screenY + 68})">
      <rect width="36" height="36" rx="10" fill="url(#cardGradient)" stroke="#233852" stroke-width="1" />
      <!-- Logix Mini Logo inside Avatar -->
      <text x="18" y="24" text-anchor="middle" fill="#1fc8aa" font-family="system-ui, sans-serif" font-size="14" font-weight="800">LX</text>
      
      <text x="48" y="16" fill="#8ea2be" font-family="-apple-system, system-ui, sans-serif" font-size="11" font-weight="500">Welcome back</text>
      <text x="48" y="32" fill="#FFFFFF" font-family="-apple-system, system-ui, sans-serif" font-size="15" font-weight="700">Alex Morgan</text>

      <!-- Notification Bell -->
      <g transform="translate(${screenWidth - 76}, 4)">
        <circle cx="14" cy="14" r="16" fill="#14263b" stroke="#253a54" stroke-width="1" />
        <path d="M 14 7 C 11.8 7 10 8.8 10 11 L 10 14 L 8 16 L 20 16 L 18 14 L 18 11 C 18 8.8 16.2 7 14 7 Z M 12.5 17 C 12.5 17.8 13.2 18.5 14 18.5 C 14.8 18.5 15.5 17.8 15.5 17 Z" fill="#8ea2be" />
        <circle cx="20" cy="8" r="3.5" fill="#1fc8aa" stroke="#0b1a2d" stroke-width="1" />
      </g>
    </g>

    <!-- Main Card: Portfolio / Cloud Metrics -->
    <g transform="translate(${screenX + 20}, ${screenY + 128})">
      <rect width="${screenWidth - 40}" height="174" rx="20" fill="url(#cardGradient)" stroke="#27405e" stroke-width="1.2" />
      
      <!-- Card Header -->
      <text x="20" y="30" fill="#8fa5c2" font-family="-apple-system, system-ui, sans-serif" font-size="12" font-weight="500">Total Cloud Throughput</text>
      <text x="20" y="62" fill="#FFFFFF" font-family="-apple-system, system-ui, sans-serif" font-size="28" font-weight="800" letter-spacing="-0.5px">$128,450<tspan font-size="18" fill="#8fa5c2">.00</tspan></text>
      
      <!-- Growth Badge -->
      <g transform="translate(${screenWidth - 134}, 18)">
        <rect width="78" height="24" rx="12" fill="#0f3c37" stroke="#1fc8aa" stroke-width="0.8" />
        <text x="39" y="16" text-anchor="middle" fill="#1fc8aa" font-family="-apple-system, system-ui, sans-serif" font-size="11.5" font-weight="700">↑ +18.4%</text>
      </g>

      <!-- Smooth SVG Wave / Area Chart -->
      <g transform="translate(16, 75)">
        <path d="M 0 65 Q 40 40, 80 52 T 160 30 T 240 10 L 240 85 L 0 85 Z" fill="url(#chartGradient)" />
        <path d="M 0 65 Q 40 40, 80 52 T 160 30 T 240 10" fill="none" stroke="#1fc8aa" stroke-width="2.8" stroke-linecap="round" />
        
        <!-- Glowing Peak Dot -->
        <circle cx="240" cy="10" r="5" fill="#1fc8aa" filter="url(#tealGlow)" />
        <circle cx="240" cy="10" r="2.5" fill="#FFFFFF" />
      </g>

      <!-- Footer Info -->
      <line x1="20" y1="148" x2="${screenWidth - 60}" y2="148" stroke="#1d324b" stroke-width="1" />
      <text x="20" y="164" fill="#758ea8" font-family="-apple-system, system-ui, sans-serif" font-size="10.5">24/7 Global Latency: <tspan fill="#1fc8aa" font-weight="600">12ms</tspan></text>
      <text x="${screenWidth - 60}" y="164" text-anchor="end" fill="#758ea8" font-family="-apple-system, system-ui, sans-serif" font-size="10.5">Uptime: <tspan fill="#1fc8aa" font-weight="600">99.99%</tspan></text>
    </g>

    <!-- Quick Action Circles -->
    <g transform="translate(${screenX + 22}, ${screenY + 322})">
      <!-- Action 1: Deploy -->
      <g transform="translate(0, 0)">
        <rect width="60" height="60" rx="18" fill="url(#actionPillGradient)" />
        <path d="M 30 18 L 38 32 L 22 32 Z" fill="#0b1f3a" />
        <text x="30" y="78" text-anchor="middle" fill="#FFFFFF" font-family="-apple-system, system-ui, sans-serif" font-size="11" font-weight="600">Deploy</text>
      </g>
      <!-- Action 2: Analytics -->
      <g transform="translate(72, 0)">
        <rect width="60" height="60" rx="18" fill="#15283e" stroke="#253e5c" stroke-width="1" />
        <path d="M 22 38 L 22 30 M 30 38 L 30 22 M 38 38 L 38 26" stroke="#1fc8aa" stroke-width="2.5" stroke-linecap="round" />
        <text x="30" y="78" text-anchor="middle" fill="#8fa5c2" font-family="-apple-system, system-ui, sans-serif" font-size="11" font-weight="600">Metrics</text>
      </g>
      <!-- Action 3: Team -->
      <g transform="translate(144, 0)">
        <rect width="60" height="60" rx="18" fill="#15283e" stroke="#253e5c" stroke-width="1" />
        <circle cx="30" cy="26" r="6" stroke="#8fa5c2" stroke-width="2" fill="none" />
        <path d="M 20 38 C 20 34 24 33 30 33 C 36 33 40 34 40 38" stroke="#8fa5c2" stroke-width="2" stroke-linecap="round" fill="none" />
        <text x="30" y="78" text-anchor="middle" fill="#8fa5c2" font-family="-apple-system, system-ui, sans-serif" font-size="11" font-weight="600">Squad</text>
      </g>
      <!-- Action 4: Settings -->
      <g transform="translate(216, 0)">
        <rect width="60" height="60" rx="18" fill="#15283e" stroke="#253e5c" stroke-width="1" />
        <circle cx="30" cy="30" r="5" stroke="#8fa5c2" stroke-width="2" fill="none" />
        <path d="M 30 20 L 30 23 M 30 37 L 30 40 M 20 30 L 23 30 M 37 30 L 40 30" stroke="#8fa5c2" stroke-width="2" stroke-linecap="round" />
        <text x="30" y="78" text-anchor="middle" fill="#8fa5c2" font-family="-apple-system, system-ui, sans-serif" font-size="11" font-weight="600">Config</text>
      </g>
    </g>

    <!-- Recent Services Feed / List Items -->
    <g transform="translate(${screenX + 20}, ${screenY + 424})">
      <!-- Item 1 -->
      <g transform="translate(0, 0)">
        <rect width="${screenWidth - 40}" height="60" rx="16" fill="url(#cardGradient)" stroke="#223954" stroke-width="1" />
        <rect x="12" y="12" width="36" height="36" rx="10" fill="#16334a" />
        <!-- App icon -->
        <rect x="22" y="22" width="16" height="16" rx="3" fill="none" stroke="#1fc8aa" stroke-width="1.8" />
        <text x="58" y="27" fill="#FFFFFF" font-family="-apple-system, system-ui, sans-serif" font-size="13" font-weight="600">iOS App Build #429</text>
        <text x="58" y="42" fill="#758ea8" font-family="-apple-system, system-ui, sans-serif" font-size="11">Production release · Live</text>
        <text x="${screenWidth - 58}" y="34" text-anchor="end" fill="#1fc8aa" font-family="-apple-system, system-ui, sans-serif" font-size="12" font-weight="700">Active</text>
      </g>

      <!-- Item 2 -->
      <g transform="translate(0, 68)">
        <rect width="${screenWidth - 40}" height="60" rx="16" fill="url(#cardGradient)" stroke="#223954" stroke-width="1" />
        <rect x="12" y="12" width="36" height="36" rx="10" fill="#182c44" />
        <path d="M 23 30 L 30 23 L 37 30 M 30 23 L 30 37" stroke="#1fc8aa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <text x="58" y="27" fill="#FFFFFF" font-family="-apple-system, system-ui, sans-serif" font-size="13" font-weight="600">TestFlight Distribution</text>
        <text x="58" y="42" fill="#758ea8" font-family="-apple-system, system-ui, sans-serif" font-size="11">v2.4.0 · 1,420 Testers</text>
        <text x="${screenWidth - 58}" y="34" text-anchor="end" fill="#8fa5c2" font-family="-apple-system, system-ui, sans-serif" font-size="12" font-weight="600">98%</text>
      </g>
    </g>

    <!-- iOS Home Indicator Pill -->
    <rect x="${screenX + (screenWidth - 136) / 2}" y="${screenY + screenHeight - 16}" width="136" height="5" rx="2.5" fill="#FFFFFF" opacity="0.8" />
  </g>

  <!-- Screen Gloss Diagonal Highlight Overlay -->
  <path d="M ${screenX} ${screenY} L ${screenX + screenWidth * 0.55} ${screenY} L ${screenX} ${screenY + screenHeight * 0.85} Z" fill="#FFFFFF" opacity="0.035" pointer-events="none" />
</svg>
`;

const outputPath = path.join(__dirname, '../public/images/services/mobile-dev.jpg');

sharp(Buffer.from(svg))
  .jpeg({ quality: 95 })
  .toFile(outputPath)
  .then(info => {
    console.log('Successfully generated iPhone mockup visual:', info);
  })
  .catch(err => {
    console.error('Error generating iPhone mockup:', err);
    process.exit(1);
  });
