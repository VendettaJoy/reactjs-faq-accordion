const AccordionItem = ({ item, handleToggle }) => {
	return (
		<>
			<div
				className={
					item.isActive
						? `accordion-item_header active`
						: `accordion-item_header`
				}
				onClick={() => handleToggle(item.id)}
			>
				<span className="header">{item.header}</span>
				<span
					className="header-btn"
					aria-expanded={item.isActive ? true : false}
					aria-label="Toggle section"
				></span>
            </div>
            
			<div className={item.isActive ? "" : `hidden`}>
				<div className="accordion-item_content">{item.content}</div>
			</div>
		</>
	);
};
export default AccordionItem;
