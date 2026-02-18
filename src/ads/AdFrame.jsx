import { useEffect, useRef } from 'react';

export default function AdFrame({ adKey, width, height }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const iframe = document.createElement('iframe');
        iframe.width = width;
        iframe.height = height;
        iframe.style.border = 'none';
        iframe.style.overflow = 'hidden';
        iframe.scrolling = 'no';

        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(iframe);

        try {
            const doc = iframe.contentWindow.document;
            doc.open();
            doc.writeln(`
                <!DOCTYPE html>
                <html>
                <head><style>body{margin:0;padding:0;overflow:hidden;}</style></head>
                <body>
                    <script type="text/javascript">
                        atOptions = {
                            'key' : '${adKey}',
                            'format' : 'iframe',
                            'height' : ${height},
                            'width' : ${width},
                            'params' : {}
                        };
                    </script>
                    <script type="text/javascript" src="//www.highperformanceformat.com/${adKey}/invoke.js"></script>
                </body>
                </html>
            `);
            doc.close();
        } catch (e) {
            console.error('Error writing to iframe:', e);
        }

    }, [adKey, width, height]);

    return (
        <div
            ref={containerRef}
            className="flex justify-center items-center my-4 overflow-hidden w-full"
            style={{ minHeight: height }}
        >
        </div>
    );
}
