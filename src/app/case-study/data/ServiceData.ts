export interface ServiceOffering {
  id: number;
  title: string;
  icon?: string;
}

export const serviceOfferings: ServiceOffering[] = [
  {
    id: 1,
    title: "Predictive & Big Data Analytics",
    icon: "/images/case-study/predictive-analytics.svg"
  },
  {
    id: 2,
    title: "GRC Solutions & Services",
    icon: "/images/case-study/grc-solutions.svg"
  },
  {
    id: 3,
    title: "Revenue Assurance",
    icon: "/images/case-study/revenue-assurance.svg"
  },
  {
    id: 4,
    title: "Operations & Finance Analytics",
    icon: "/images/case-study/operations-finance.svg"
  },
  {
    id: 5,
    title: "Risk Management Audit Analytics",
    icon: "/images/case-study/risk-management.svg"
  },
  {
    id: 6,
    title: "Fraud Management & Detection",
    icon: "/images/case-study/fraud-management.svg"
  },
  {
    id: 7,
    title: "Data Migration",
    icon: "/images/case-study/data-migration.svg"
  },
  {
    id: 8,
    title: "Algorithm Auditing",
    icon: "/images/case-study/algorithm-auditing.svg"
  },
  {
    id: 9,
    title: "Media Analytics",
    icon: "/images/case-study/media-analytics.svg"
  }
];
