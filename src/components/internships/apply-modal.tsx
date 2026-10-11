"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export interface InternshipRole {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  role: InternshipRole | null;
}

export function ApplyModal({ isOpen, onClose, role }: ApplyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [note, setNote] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !loading) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, loading, onClose]);

  // Reset form when modal opens or closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setName("");
        setEmail("");
        setPhone("");
        setPortfolio("");
        setNote("");
        setResumeFile(null);
        setError(null);
        setIsSuccess(false);
        setLoading(false);
      }, 200);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    const allowedExtensions = [".pdf", ".doc", ".docx"];
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      setError("Please upload a PDF or Word document (.pdf, .doc, .docx).");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setError("File size exceeds 10MB limit. Please upload a smaller resume.");
      return;
    }
    setError(null);
    setResumeFile(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      validateAndSetFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please provide your full name.");
      return;
    }
    if (!email.trim()) {
      setError("Please provide your email address.");
      return;
    }
    if (!resumeFile) {
      setError("Please attach your resume / CV.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append("phone", phone.trim());
      formData.append("portfolio", portfolio.trim());
      formData.append("note", note.trim());
      formData.append("role", role?.title || "General Internship Application");
      formData.append("resume", resumeFile);

      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit application. Please try again.");
      }

      setIsSuccess(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-200"
        onClick={() => {
          if (!loading) onClose();
        }}
        aria-hidden="true"
      />

      {/* Modal dialog box */}
      <div
        ref={modalRef}
        className="relative w-full max-w-xl rounded-2xl border border-border bg-card text-card-foreground shadow-2xl p-5 sm:p-7 z-10 max-h-[92vh] overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={() => {
            if (!loading) onClose();
          }}
          className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Close dialog"
        >
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isSuccess ? (
          /* Success Screen */
          <div className="py-6 sm:py-8 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand/20 text-brand-strong border border-brand/30">
              <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h3 id="modal-title" className="mt-4 text-xl sm:text-2xl font-bold text-primary">
              Application Submitted!
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground max-w-md mx-auto">
              Thank you, <strong className="text-foreground">{name}</strong>. Your resume and application for{" "}
              <strong className="text-brand-strong">{role?.title}</strong> have been received.
            </p>
            <div className="mt-5 rounded-lg border border-border bg-muted/50 p-3.5 text-xs text-muted-foreground max-w-sm mx-auto text-left space-y-1">
              <div><strong>Applicant:</strong> {name} ({email})</div>
              <div><strong>Role:</strong> {role?.title}</div>
              <div><strong>Resume Attached:</strong> {resumeFile?.name}</div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Our engineering mentors will review your submission and contact you via email soon.
            </p>
            <Button
              type="button"
              variant="default"
              size="lg"
              className="mt-6 w-full sm:w-auto px-8"
              onClick={onClose}
            >
              Done
            </Button>
          </div>
        ) : (
          /* Form Content */
          <>
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-xs font-semibold text-brand-strong mb-2">
                <span>100% Remote Internship</span>
              </div>
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-primary pr-8">
                Apply for {role?.title || "Internship"}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Submit your details and upload your resume. Our team will review your application and get in touch.
              </p>
            </div>

            {error && (
              <div className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-xs sm:text-sm text-destructive flex items-start gap-2">
                <svg className="size-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              {/* Full Name */}
              <div className="space-y-1">
                <label htmlFor="student-name" className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Full Name <span className="text-brand-strong">*</span>
                </label>
                <Input
                  id="student-name"
                  required
                  placeholder="e.g. Maya Johnson"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={loading}
                />
              </div>

              {/* Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="student-email" className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Email Address <span className="text-brand-strong">*</span>
                  </label>
                  <Input
                    id="student-email"
                    required
                    type="email"
                    placeholder="you@university.edu"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="student-phone" className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Phone Number
                  </label>
                  <Input
                    id="student-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>

              {/* Resume / CV Upload */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-primary flex items-center justify-between">
                  <span>Resume / CV <span className="text-brand-strong">*</span></span>
                  <span className="text-[11px] font-normal normal-case text-muted-foreground">PDF, DOC, DOCX (Max 10MB)</span>
                </label>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="hidden"
                  onChange={handleFileChange}
                  disabled={loading}
                />

                {resumeFile ? (
                  /* File attached card */
                  <div className="flex items-center justify-between p-3 rounded-lg border border-brand/40 bg-accent/30 text-sm">
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded bg-brand/20 text-brand-strong">
                        <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                      </div>
                      <div className="overflow-hidden">
                        <p className="font-medium text-foreground truncate">{resumeFile.name}</p>
                        <p className="text-[11px] text-muted-foreground">
                          {(resumeFile.size / 1024).toFixed(0)} KB · Ready to send
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setResumeFile(null)}
                      disabled={loading}
                      className="text-xs text-muted-foreground hover:text-destructive px-2 py-1 rounded transition-colors"
                      title="Remove file"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  /* Drag and drop upload zone */
                  <div
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-4 sm:p-5 text-center cursor-pointer transition-all duration-200 ${
                      isDragging
                        ? "border-brand bg-brand/10 scale-[1.01]"
                        : "border-border hover:border-brand-strong/60 hover:bg-muted/50"
                    }`}
                  >
                    <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-muted text-muted-foreground">
                      <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                      </svg>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm font-medium text-foreground">
                      Click to upload <span className="text-muted-foreground font-normal">or drag & drop your resume</span>
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      PDF or Word format recommended
                    </p>
                  </div>
                )}
              </div>

              {/* Portfolio / GitHub / LinkedIn */}
              <div className="space-y-1">
                <label htmlFor="student-portfolio" className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Portfolio / GitHub / LinkedIn URL
                </label>
                <Input
                  id="student-portfolio"
                  type="url"
                  placeholder="https://github.com/yourhandle or portfolio link"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  disabled={loading}
                />
              </div>

              {/* Note / Message */}
              <div className="space-y-1">
                <label htmlFor="student-note" className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Brief Note (Optional)
                </label>
                <Textarea
                  id="student-note"
                  rows={3}
                  placeholder="Tell us what you're excited to learn or any projects you've worked on..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  disabled={loading}
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col-reverse sm:flex-row items-center justify-end gap-2.5">
                <Button
                  type="button"
                  variant="outline"
                  size="default"
                  onClick={onClose}
                  disabled={loading}
                  className="w-full sm:w-auto"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  size="default"
                  disabled={loading}
                  className="w-full sm:w-auto min-w-[130px]"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="size-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Submit Application →"
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

