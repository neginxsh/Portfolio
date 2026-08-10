// Case study data for the home page grid.
// Add a new object here and a matching page will be generated automatically
// at /case-studies/<slug>/ — see src/pages/case-studies/[slug].astro
//
// `color` is used for the placeholder cover gradient until you add a real
// cover image (swap the placeholder markup in ProjectCard.astro for an
// <img src={project.cover}> once you have one).
//
// Grid is fixed at 3 columns on desktop (see .grid in global.css), so this
// list renders as 4 rows of 3 — enough cards to see the scroll-in animation.

export type Project = {
	slug: string;
	title: string;
	category: string;
	year: number;
	color: string; // placeholder cover accent, any valid CSS color
	summary: string;
};

export const projects: Project[] = [
	{
		slug: "case-study-1",
		title: "Case study 1",
		category: "Product",
		year: 2026,
		color: "#EDE9E3",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-2",
		title: "Case study 2",
		category: "Mobile",
		year: 2025,
		color: "#E3E8ED",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-3",
		title: "Case study 3",
		category: "Web",
		year: 2024,
		color: "#EDE3E9",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-4",
		title: "Case study 4",
		category: "Brand",
		year: 2024,
		color: "#E9EDE3",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-5",
		title: "Case study 5",
		category: "Product",
		year: 2023,
		color: "#EDE7E3",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-6",
		title: "Case study 6",
		category: "Mobile",
		year: 2023,
		color: "#E3EDEA",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-7",
		title: "Case study 7",
		category: "Web",
		year: 2022,
		color: "#EAE3ED",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-8",
		title: "Case study 8",
		category: "Brand",
		year: 2022,
		color: "#EDEAE3",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-9",
		title: "Case study 9",
		category: "Product",
		year: 2021,
		color: "#E3E6ED",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-10",
		title: "Case study 10",
		category: "Mobile",
		year: 2021,
		color: "#EDE3E5",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-11",
		title: "Case study 11",
		category: "Web",
		year: 2020,
		color: "#E5EDE3",
		summary: "Write a one-line summary of this project here.",
	},
	{
		slug: "case-study-12",
		title: "Case study 12",
		category: "Brand",
		year: 2020,
		color: "#E3EAED",
		summary: "Write a one-line summary of this project here.",
	},
];
