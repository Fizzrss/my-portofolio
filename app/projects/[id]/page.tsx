import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { portfolioData } from "@/src/data/portfolio";
import ProjectDetailClient from "./ProjectDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Fiza Rahmatus Sholikha",
    };
  }

  return {
    title: `${project.title} - ${project.subtitle} | Fiza Rahmatus Sholikha`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Fiza Rahmatus Sholikha`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;
  const project = portfolioData.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const currentIndex = portfolioData.projects.findIndex((p) => p.id === id);
  const prevProject =
    currentIndex > 0 ? portfolioData.projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < portfolioData.projects.length - 1
      ? portfolioData.projects[currentIndex + 1]
      : null;

  return (
    <ProjectDetailClient
      project={project}
      prevProject={prevProject}
      nextProject={nextProject}
    />
  );
}

