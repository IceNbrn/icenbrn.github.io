import { useEffect } from 'react';
import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-c.js';
import 'prismjs/components/prism-cpp.js';

interface CodeBlockProps {
	code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
	useEffect(() => {
		Prism.highlightAll();
	}, [code]);

	return (
		<pre className="rounded-xl p-4 bg-[#1d1f21] overflow-x-auto text-sm my-4 border border-gray-800">
      <code className="language-cpp">
        {code.trim()}
      </code>
    </pre>
	);
}