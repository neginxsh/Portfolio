// Case study data for the home page grid.
// Add a new object here and a matching page will be generated automatically
// at /case-studies/<slug>/ — see src/pages/case-studies/[slug].astro
//
// `color` is used for the placeholder cover gradient until you add a real
// cover image (swap the placeholder markup in ProjectCard.astro for an
// <img src={project.cover}> once you have one).

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
];
