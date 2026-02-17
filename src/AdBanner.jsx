import { useEffect, useRef } from 'react';

/**
 * AdBanner – renders a real ad from highperformanceformat.com
 * 
 * Sizes available:
 *   '728x90'  – Leaderboard (desktop top/bottom)
 *   '468x60'  – Full Banner (mid-article desktop)
 *   '320x50'  – Mobile Banner
 *   '300x250' – Medium Rectangle (in-content)
 *   '160x300' – Wide Skyscraper short
 *   '160x600' – Wide Skyscraper tall (sidebar)
 */

const AD_CONFIG = {
    '468x60': {
        key: 'd01fedd9dd0ecf8e216a4d4f5a062ece',
        width: 468,
        height: 60,
    },
    '160x300': {
        key: '6870531ce4a56c2c991ec77e558d9293',
        width: 160,
        height: 300,
    },
    '320x50': {
        key: '0e692ac268a47bf566b3b3bdc1156f53',
        width: 320,
        height: 50,
    },
    '300x250': {
        key: 'ae35014fd360c1da911c1849f20df8aa',
        width: 300,
        height: 250,
    },
    '160x600': {
        key: '27ea5aed9da147d7ad0f31b82b6723ec',
        width: 160,
        height: 600,
    },
    '728x90': {
        key: '5e57d24bd020bb5f6497d2136f33ff1e',
        width: 728,
        height: 90,
    },
};

export function NativeBanner() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Create the native ad invoke script
        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = 'https://pl28729827.effectivegatecpm.com/628a6de298db2c5aa6f01c850d7563a6/invoke.js';

        // Create the container div
        const adDiv = document.createElement('div');
        adDiv.id = 'container-628a6de298db2c5aa6f01c850d7563a6';

        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(script);
        containerRef.current.appendChild(adDiv);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="my-8 flex items-center justify-center overflow-hidden"
        />
    );
}

export default function AdBanner({ size = '300x250' }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const cfg = AD_CONFIG[size];
        if (!cfg || !containerRef.current) return;

        // Clear previous content
        containerRef.current.innerHTML = '';

        // Create the options script
        const optionsScript = document.createElement('script');
        optionsScript.type = 'text/javascript';
        optionsScript.text = `
      atOptions = {
        'key' : '${cfg.key}',
        'format' : 'iframe',
        'height' : ${cfg.height},
        'width' : ${cfg.width},
        'params' : {}
      };
    `;

        // Create the invoke script
        const invokeScript = document.createElement('script');
        invokeScript.type = 'text/javascript';
        invokeScript.src = `https://www.highperformanceformat.com/${cfg.key}/invoke.js`;

        containerRef.current.appendChild(optionsScript);
        containerRef.current.appendChild(invokeScript);

        return () => {
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
        };
    }, [size]);

    return (
        <div
            ref={containerRef}
            className="my-8 flex items-center justify-center overflow-hidden"
            style={{ minHeight: AD_CONFIG[size]?.height || 60 }}
        />
    );
}
