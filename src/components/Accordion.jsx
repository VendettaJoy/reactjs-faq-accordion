import { useState, useEffect } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ title, content, setContent }) => {
    const [prevItemId, setPrevItemId] = useState(0);
    
	useEffect(() => {
        const contentContainerArr = document.querySelectorAll(".hidden");
        const activeitem = content.filter((item) => {
			return item.isActive === true ? item : null;
        });
        
        activeitem.length ? contentContainerArr[activeitem[0].id - 1].style.maxHeight = contentContainerArr[activeitem[0].id - 1].scrollHeight + "px" : "";
		activeitem.length ? setPrevItemId(activeitem[0].id) : setPrevItemId(0);
	}, [content]);

    const handleToggle = (id) => {
        const contentContainerArr = document.querySelectorAll(".hidden");
		setContent((prevContent) =>
			prevContent.map((item) => {
				if (item.id !== prevItemId) {
					if (item.id === id) {
						contentContainerArr[item.id - 1].style.maxHeight =
							contentContainerArr[item.id - 1].scrollHeight +
							"px";
						return { ...item, isActive: !item.isActive };
					} else {
						contentContainerArr[item.id - 1].style.maxHeight = 0;
						return item;
					}
				} else {
					contentContainerArr[item.id - 1].style.maxHeight = 0;
					return { ...item, isActive: !item.isActive };
				}
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
