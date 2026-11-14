"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { Button, type ButtonVariant } from "@/components/ui/button";
import type { InternshipRole } from "@/components/internships/apply-modal";

const LazyApplyModal = dynamic(
  () => import("@/components/internships/apply-modal").then((mod) => mod.ApplyModal),
  { ssr: false },
);

const ApplyModalContext = createContext<((role: InternshipRole) => void) | null>(null);

export function InternshipApplyProvider({ children }: { children: ReactNode }) {
  const [selectedRole, setSelectedRole] = useState<InternshipRole | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);

  const openApply = (role: InternshipRole) => {
    setSelectedRole(role);
    setHasOpened(true);
    setModalOpen(true);
  };

  return (
    <ApplyModalContext.Provider value={openApply}>
      {children}
      {hasOpened && (
        <LazyApplyModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          role={selectedRole}
        />
      )}
    </ApplyModalContext.Provider>
  );
}

export function ApplyRoleButton({
  role,
  variant = "default",
  className,
  children,
}: {
  role: InternshipRole;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}) {
  const openApply = useContext(ApplyModalContext);

  return (
    <Button
      type="button"
      variant={variant}
      size="default"
      onClick={() => openApply?.(role)}
      className={className}
    >
      {children}
    </Button>
  );
}
