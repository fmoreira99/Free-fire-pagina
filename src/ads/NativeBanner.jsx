import { useEffect, useRef } from 'react';

export default function NativeBanner() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Clear previous content
        containerRef.current.innerHTML = '';

        const script = document.createElement('script');
        script.async = true;
        script.setAttribute('data-cfasync', 'false');
        script.src = "//pl28729827.effectivegatecpm.com/628a6de298db2c5aa6f01c850d7563a6/invoke.js";

        // Native ads usually append themselves relative to where they are invoked 
        // or look for a specific container ID if specified in their internal config.
        // The original code created a div with id 'container-628a6de298db2c5aa6f01c850d7563a6'.
        // We will recreate that structure.

        const adDiv = document.createElement('div');
        adDiv.id = 'container-628a6de298db2c5aa6f01c850d7563a6';

        containerRef.current.appendChild(script);
        containerRef.current.appendChild(adDiv);

        return () => {
            if (containerRef.current) containerRef.current.innerHTML = '';
        };

    }, []);

    return (
        <div ref={containerRef} className="my-8 flex justify-center w-full min-h-[50px]">
            {/* Native ad container */}
        </div>
    );
}
