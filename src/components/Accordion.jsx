import AccordionItem from "./AccordionItem";

const Accordion = ({ title, content, setContent }) => {
	const handleToggle = (id) => {
		setContent((prevContent) =>
			prevContent.map((item) => {
				return item.id !== id
					? { ...item, isActive: !item.isActive }
					: item;
			})
		);
	};

	return (
		<article className="container">
			{!title ? (
				""
			) : (
				<h1 className="title-container">
					<span
						className="title-icon"
						aria-label="Icon of a star"
					></span>
					{title}
				</h1>
			)}

			<ul className="accordion-container">
				{content.map((item) => (
					<li key={item.id} className="accordion-item">
						<AccordionItem
							item={item}
							handleToggle={handleToggle}
						/>
					</li>
				))}
			</ul>
		</article>
	);
};
export default Accordion;
