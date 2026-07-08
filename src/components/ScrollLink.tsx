interface ScrollLinkProps {
	to: string;
	children: React.ReactNode;
}

function ScrollLink({ to, children }: ScrollLinkProps) {
	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		document.getElementById(to)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<a href={`#${to}`} onClick={handleClick} style={{ cursor: "pointer" }}>
			{children}
		</a>
	);
}

export default ScrollLink;