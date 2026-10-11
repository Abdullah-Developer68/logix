"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ApplyModal, InternshipRole } from "@/components/internships/apply-modal";

const internshipRoles: InternshipRole[] = [
  {
    title: "Software Engineering Intern (Fullstack Web)",
    department: "Web Platform Pod",
    location: "100% Remote",
    type: "Internship (3–6 Months)",
    description:
      "Work directly alongside senior engineers shipping production features using Next.js App Router, React, TypeScript, and modern Node.js services.",
  },
  {
    title: "Mobile App Development Intern (React Native / Flutter)",
    department: "Mobile Engineering Pod",
    location: "100% Remote",
    type: "Internship (3–6 Months)",
    description:
      "Build user-facing mobile interfaces and assist in engineering cross-platform apps with React Native, TypeScript, and native mobile device integrations.",
  },
  {
    title: "Cloud & DevOps Engineering Intern",
    department: "Infrastructure Pod",
    location: "100% Remote",
    type: "Internship (3–6 Months)",
    description:
      "Learn modern infrastructure automation, Docker containerization, CI/CD pipelines with GitHub Actions, and cloud deployments on AWS/GCP.",
  },
  {
    title: "UI/UX & Product Design Intern",
    department: "Design Systems Pod",
    location: "100% Remote",
    type: "Internship (3–6 Months)",
    description:
      "Collaborate with lead designers on Figma design systems, wireframes, user journeys, and component library maintenance for client platforms.",
  },
  {
    title: "AI & Machine Learning Intern",
    department: "AI & Automation Pod",
    location: "100% Remote",
    type: "Internship (3–6 Months)",
    description:
      "Contribute to LLM-powered applications, document processing pipelines, prompt workflows, and automated retrieval-augmented generation (RAG) systems.",
  },
  {
    title: "Backend & Systems Engineering Intern",
    department: "Core Systems Pod",
    location: "100% Remote",
    type: "Internship (3–6 Months)",
    description:
      "Build high-throughput REST and GraphQL APIs, optimize relational database schemas, and implement scalable microservices.",
  },
  {
    title: "QA & Test Automation Intern",
    department: "Quality Engineering Pod",
    location: "100% Remote",
    type: "Internship (3–6 Months)",
    description:
      "Learn automated end-to-end testing with Playwright, write regression test suites, and ensure zero-defect software releases.",
  },
];

export function InternshipList() {
  const [selectedRole, setSelectedRole] = useState<InternshipRole | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleApply = (role: InternshipRole) => {
    setSelectedRole(role);
    setModalOpen(true);
  };

  const handleGeneralApply = () => {
    setSelectedRole({
      title: "General Engineering / Design Internship",
      department: "Open Pod Application",
      location: "100% Remote",
      type: "Internship (3–6 Months)",
      description:
        "Open application for ambitious students who want to contribute across frontend, backend, mobile, design, or AI.",
    });
    setModalOpen(true);
  };

  return (
    <>
      <div className="space-y-4">
        {internshipRoles.map((role) => (
          <Card
            key={role.title}
            className="p-5 sm:p-7 flex flex-col justify-between sm:flex-row sm:items-center gap-5 sm:gap-6 shadow-sm hover:shadow-md transition-shadow border-border bg-card"
          >
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2.5">
                <Badge variant="brand" dot={false}>
                  {role.department}
                </Badge>
                <Badge variant="outline" className="border-brand-strong/30 text-brand-strong bg-brand/5">
                  {role.location}
                </Badge>
                <span className="text-[11px] sm:text-xs font-medium text-brand-strong bg-brand/10 rounded-full px-2.5 py-0.5">
                  {role.type}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-primary">{role.title}</h3>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {role.description}
              </p>
            </div>
            <div className="shrink-0 w-full sm:w-auto">
              <Button
                type="button"
                variant="default"
                size="default"
                onClick={() => handleApply(role)}
                className="w-full sm:w-auto text-center justify-center cursor-pointer font-semibold"
              >
                Apply Now →
              </Button>
            </div>
          </Card>
        ))}

        {/* General Open Application Card */}
        <Card className="p-5 sm:p-7 flex flex-col justify-between sm:flex-row sm:items-center gap-5 sm:gap-6 border-dashed border-2 border-brand/30 bg-accent/20">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
              <Badge variant="outline" className="border-brand-strong/40 text-brand-strong">
                General Application
              </Badge>
              <Badge variant="brand" dot={false}>
                100% Remote
              </Badge>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-primary">
              Don&apos;t see your specific domain?
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              We welcome applications from motivated students with a passion for software craft. Submit your resume and share what you love building.
            </p>
          </div>
          <div className="shrink-0 w-full sm:w-auto">
            <Button
              type="button"
              variant="outline"
              size="default"
              onClick={handleGeneralApply}
              className="w-full sm:w-auto text-center justify-center cursor-pointer font-semibold border-brand-strong/40 hover:bg-brand/10"
            >
              Submit Open Application →
            </Button>
          </div>
        </Card>
      </div>

      {/* Application Modal */}
      <ApplyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        role={selectedRole}
      />
    </>
  );
}

