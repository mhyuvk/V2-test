'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Preserve the original simulator DOM structure while loading its existing
    // vanilla JavaScript. This is an initial compatibility migration, not a
    // full conversion of every feature into React components yet.
    mount.innerHTML = `
      <div class="wrap">
        <div class="device">
          <div class="screen">
            <div class="island"></div>
            <div class="status"><span id="statusClock">--:--</span><span>▮▮▮　◉</span></div>
            <div class="view" id="view"></div>
          </div>
        </div>
      </div>
    `;

    const script = document.createElement('script');
    script.src = './app.js';
    script.async = false;
    document.body.appendChild(script);

    return () => {
      script.remove();
      mount.innerHTML = '';
    };
  }, []);

  return <main ref={mountRef} />;
}
