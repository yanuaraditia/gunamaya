export interface TeamMember {
  name: string;
  role: string;
  country: string;
  user?: string; // Optional field for GitHub username
}

export const team: TeamMember[] = [
  {
    name: "Anggi Susanto",
    role: "Backend & AI Engineer",
    user: "anggi-susanto",
    country: "Indonesia",
  },
  {
    name: "Yanuar Aditia",
    role: "Senior Engineer",
    user: "yanuaraditia",
    country: "Indonesia",
  },
  {
    name: "Daewu Bintara",
    role: "Senior Engineer",
    user: "daewu14",
    country: "Indonesia",
  },
  {
    name: "M Adi F",
    role: "Senior Engineer",
    user: "muhadif",
    country: "Indonesia",
  },
  {
    name: "Sofyan Saputra",
    role: "Solution Architect",
    user: "sofyan48",
    country: "Indonesia",
  },
];
