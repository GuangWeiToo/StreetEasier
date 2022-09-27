import * as React from 'react'

import { motion } from 'framer-motion'

const imageAnimate = {
	offscreen: { x: -100, opacity: 0 },
	onscreen: {
		x: 0,
		opacity: 1,
		transition: { type: 'spring', bounce: 0.2, duration: 0.5 },
	},
}

function SiTailwindcss(props) {
	return (
		<motion.svg
			stroke="currentColor"
			fill="currentColor"
			strokeWidth={0}
			role="img"
			viewBox="0 0 24 24"
			height="6em"
			width="6em"
			className="duration-300 hover:text-blue-500"
			variants={imageAnimate}
			{...props}
		>
			<title />
			<path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
		</motion.svg>
	)
}

export default SiTailwindcss
