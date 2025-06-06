const AccordionItem = ({ index, activeIndex, item, handleToggle }) => {
	return (
		<div
			className={`accordion-item ${
				activeIndex === index ? "active" : ""
			}`}
		>
			<button
				className="accordion-item_header"
				onClick={() => handleToggle(index)}
			>
				<span className="header">{item.header}</span>
				<span
					className="toggle"
					aria-expanded={activeIndex === index ? true : false}
					aria-label="Toggle section"
				></span>
			</button>

			<div className="accordion-item_body">
				<p className="content">{item.content}</p>
			</div>
		</div>
	);
};
export default AccordionItem;
