import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ title, data }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<article className="wrapper">
			{!title ? (
				""
			) : (
				<h1 className="title">
					<span
						className="title-icon"
						aria-label="Icon of a star"
					></span>
					{title}
				</h1>
			)}

			<div className="accordion">
				{data.map((item, index) => (
					<AccordionItem
						key={index}
						index={index}
						activeIndex={activeIndex}
						item={item}
						handleToggle={handleToggle}
					/>
				))}
			</div>
		</article>
	);
};
export default Accordion;
