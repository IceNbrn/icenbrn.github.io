import {
	useCallback,
	useEffect,
	useRef,
	useState,
	type PointerEvent,
	type WheelEvent,
} from "react";

interface ImageWithFullscreenProps {
	src: string;
	alt: string;
}

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const ZOOM_STEP = 0.15;

export function ImageWithFullscreen({
										src,
										alt,
									}: ImageWithFullscreenProps) {
	const [isFullscreen, setIsFullscreen] = useState(false);
	const [scale, setScale] = useState(MIN_SCALE);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [isDragging, setIsDragging] = useState(false);

	const imageRef = useRef<HTMLImageElement>(null);
	const dragStart = useRef({ x: 0, y: 0 });
	const positionStart = useRef({ x: 0, y: 0 });

	const resetView = useCallback(() => {
		setScale(MIN_SCALE);
		setPosition({ x: 0, y: 0 });
	}, []);

	const closeFullscreen = useCallback(() => {
		setIsFullscreen(false);
		resetView();
	}, [resetView]);

	const openFullscreen = useCallback(() => {
		setIsFullscreen(true);
		resetView();
	}, [resetView]);

	// Lock page scrolling while the viewer is open.
	useEffect(() => {
		if (!isFullscreen) return;

		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [isFullscreen]);

	// Close with Escape.
	useEffect(() => {
		if (!isFullscreen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				closeFullscreen();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isFullscreen, closeFullscreen]);

	// Keep the image from being dragged outside the viewport.
	const clampPosition = useCallback(
		(x: number, y: number) => {
			const image = imageRef.current;

			if (!image || scale <= 1) {
				return { x: 0, y: 0 };
			}

			const viewportWidth = window.innerWidth;
			const viewportHeight = window.innerHeight;

			const scaledWidth = image.clientWidth * scale;
			const scaledHeight = image.clientHeight * scale;

			const maxX = Math.max(0, (scaledWidth - viewportWidth) / 2);
			const maxY = Math.max(0, (scaledHeight - viewportHeight) / 2);

			return {
				x: Math.min(Math.max(x, -maxX), maxX),
				y: Math.min(Math.max(y, -maxY), maxY),
			};
		},
		[scale],
	);

	const handleWheel = useCallback(
		(event: WheelEvent<HTMLImageElement>) => {
			event.preventDefault();
			event.stopPropagation();

			setScale((currentScale) => {
				const direction = event.deltaY > 0 ? -1 : 1;
				const nextScale = Math.min(
					MAX_SCALE,
					Math.max(MIN_SCALE, currentScale + direction * ZOOM_STEP),
				);

				if (nextScale === MIN_SCALE) {
					setPosition({ x: 0, y: 0 });
				}

				return nextScale;
			});
		},
		[],
	);

	const handleDoubleClick = useCallback(
		(event: React.MouseEvent<HTMLImageElement>) => {
			event.stopPropagation();

			if (scale > MIN_SCALE) {
				resetView();
			} else {
				setScale(2);
			}
		},
		[resetView, scale],
	);

	const handlePointerDown = useCallback(
		(event: PointerEvent<HTMLImageElement>) => {
			if (scale <= MIN_SCALE) return;

			event.preventDefault();
			event.stopPropagation();

			setIsDragging(true);

			dragStart.current = {
				x: event.clientX,
				y: event.clientY,
			};

			positionStart.current = position;

			event.currentTarget.setPointerCapture(event.pointerId);
		},
		[scale, position],
	);

	const handlePointerMove = useCallback(
		(event: PointerEvent<HTMLImageElement>) => {
			if (!isDragging) return;

			const dx = event.clientX - dragStart.current.x;
			const dy = event.clientY - dragStart.current.y;

			const nextPosition = clampPosition(
				positionStart.current.x + dx,
				positionStart.current.y + dy,
			);

			setPosition(nextPosition);
		},
		[clampPosition, isDragging],
	);

	const handlePointerUp = useCallback(
		(event: PointerEvent<HTMLImageElement>) => {
			setIsDragging(false);

			if (event.currentTarget.hasPointerCapture(event.pointerId)) {
				event.currentTarget.releasePointerCapture(event.pointerId);
			}
		},
		[],
	);

	const handleOverlayClick = useCallback(
		(event: React.MouseEvent<HTMLDivElement>) => {
			if (event.target === event.currentTarget) {
				closeFullscreen();
			}
		},
		[closeFullscreen],
	);

	return (
		<>
			<div className="embed-responsive embed-responsive-16by9">
				<img
					className="card-img-top"
					src={src}
					alt={alt}
					onClick={openFullscreen}
					style={{
						cursor: "zoom-in",
						width: "100%",
						height: "100%",
						objectFit: "cover",
					}}
				/>
			</div>

			{isFullscreen && (
				<div
					role="dialog"
					aria-modal="true"
					aria-label="Image viewer"
					className="d-flex justify-content-center align-items-center"
					onClick={handleOverlayClick}
					style={{
						position: "fixed",
						inset: 0,
						width: "100vw",
						height: "100vh",
						backgroundColor: "rgba(0, 0, 0, 0.92)",
						zIndex: 1050,
						overflow: "hidden",
						touchAction: "none",
						userSelect: "none",
					}}
				>
					<button
						type="button"
						className="btn-close btn-close-white"
						aria-label="Close image viewer"
						onClick={closeFullscreen}
						style={{
							position: "absolute",
							top: "20px",
							right: "20px",
							zIndex: 1051,
							width: "1.5rem",
							height: "1.5rem",
						}}
					/>

					<img
						ref={imageRef}
						src={src}
						alt={alt}
						draggable={false}
						onClick={(event) => event.stopPropagation()}
						onWheel={handleWheel}
						onDoubleClick={handleDoubleClick}
						onPointerDown={handlePointerDown}
						onPointerMove={handlePointerMove}
						onPointerUp={handlePointerUp}
						onPointerCancel={handlePointerUp}
						style={{
							maxWidth: "95vw",
							maxHeight: "95vh",
							objectFit: "contain",
							transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
							transformOrigin: "center",
							cursor:
								scale === MIN_SCALE
									? "zoom-in"
									: isDragging
										? "grabbing"
										: "grab",
							touchAction: "none",
							willChange: "transform",
							transition: isDragging
								? "none"
								: "transform 120ms ease-out",
						}}
					/>
				</div>
			)}
		</>
	);
}
