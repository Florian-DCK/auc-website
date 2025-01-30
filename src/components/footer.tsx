export default function Footer() {
	return (
		<div className=" overflow-hidden absolute -bottom-3 -right-5">
			{/* fond du footer */}
			<svg
				className=" overflow-x-hidden w-auto"
				width="952"
				height="219"
				viewBox="0 0 952 219"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g filter="url(#filter0_d_76_4)">
					<path
						d="M510.381 54.9019L4 218H948V8H808.986C707.617 8 606.869 23.8245 510.381 54.9019Z"
						fill="#4A361E"
					/>
				</g>
				<path
					d="M34 216.5L510.904 63.5382C607.05 32.7003 707.406 17 808.377 17H948"
					stroke="#9B8D7A"
					strokeWidth="5"
					strokeLinecap="round"
					strokeDasharray="15 20"
				/>
				<defs>
					<filter
						id="filter0_d_76_4"
						x="0"
						y="0"
						width="952"
						height="218"
						filterUnits="userSpaceOnUse"
						colorinterpolation-filters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>
						<feOffset dy="-4" />
						<feGaussianBlur stdDeviation="2" />
						<feComposite in2="hardAlpha" operator="out" />
						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>
						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow_76_4"
						/>
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow_76_4"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>
		</div>
	);
}
