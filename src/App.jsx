import { useState } from "react";
import Accordion from "./components/Accordion";
import "./App.css";

const App = () => {
	const title = "FAQs";
	const [content, setContent] = useState([
		{
			id: 1,
			header: "What is Frontend Mentor, and how will it help me?",
			content:
				"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
			isActive: true,
		},
		{
			id: 2,
			header: "Is Frontend Mentor free?",
			content:
				"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
			isActive: false,
		},
		{
			id: 3,
			header: "Can I use Frontend Mentor projects in my portfolio?",
			content:
				"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
			isActive: false,
		},
		{
			id: 4,
			header: "How can I get help if I'm stuck on a challenge?",
			content:
				"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
			isActive: false,
		},
    ]);
    
	return (
		<main>
			<Accordion
				title={title}
				content={content}
				setContent={setContent}
			/>
		</main>
	);
};
export default App;
