import React from 'react'

import OfferingContainer from './OfferingContainer'

const offeringsContainerClasses =
	'container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0'
const offeringsHeaderClasses =
	'text-4xl text-center uppercase md:text-left md:text-5xl'

const Offerings = () => {
	return (
		<section id="offerings">
			{/* <!-- Offerings Container --> */}
			<div className={offeringsContainerClasses}>
				<div className="flex justify-center mb-20">
					<h2 className={offeringsHeaderClasses}>
						Our Offerings
					</h2>
				</div>

				<OfferingContainer setNumber={1} />
				<OfferingContainer setNumber={2} />

				<div className="flex justify-center mt-10 md:hidden">
					<button className="btn w-full md:hidden">
						See All
					</button>
				</div>
			</div>
		</section>
	)
}

export default Offerings
