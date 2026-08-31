"use client";

import { useRef, useState } from "react";

/**
 * ApplicationForm — accessible job-application form with résumé upload. Every
 * field has a real <label>, required fields are marked programmatically
 * (required + aria-required), errors are announced via aria-live and tied to
 * inputs with aria-describedby, and the first invalid field is focused on submit.
 *
 * The résumé picker is a native <input type="file"> (kept focusable, visually
 * styled via its label) validated for type and size client-side; the chosen
 * filename is read back for confirmation.
 *
 * This build does NOT transmit anything (localhost only, no network writes): on a
 * valid submit it shows an in-page confirmation. Wire it to PTG's applicant inbox
 * or ATS — with real file storage — before launch.
 */

const INTEREST_AREAS = [
  "Workday: HCM",
  "Workday: Financials",
  "Workday: Integrations / Technology",
  "ServiceNow",
  "Project / Program Management (PMO)",
  "Change Management",
  "Something else",
];

const ACCEPT = ".pdf,.doc,.docx";
const ACCEPT_MIME = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_BYTES = 10 * 1024 * 1024; // 10 MB

const labelStyle: React.CSSProperties = { display: "block", fontSize: 13.5, fontWeight: 700, letterSpacing: ".01em", color: "#021F43", marginBottom: 7 };
const fieldStyle: React.CSSProperties = { width: "100%", fontFamily: "inherit", fontSize: 15.5, color: "#021F43", background: "#FFFFFF", border: "1.5px solid #E5E7EB", borderRadius: 6, padding: "13px 14px" };
const errStyle: React.CSSProperties = { margin: "6px 0 0", fontSize: 13, fontWeight: 600, color: "#B42318" };
const req = <span aria-hidden="true" style={{ color: "#EB4900" }}>*</span>;

type Errors = Record<string, string>;

function fileError(file: File | undefined): string | null {
  if (!file) return "Please attach your résumé.";
  const okExt = /\.(pdf|doc|docx)$/i.test(file.name);
  const okMime = file.type === "" || ACCEPT_MIME.includes(file.type);
  if (!okExt || !okMime) return "Résumé must be a PDF or Word document (.pdf, .doc, .docx).";
  if (file.size > MAX_BYTES) return "That file is over 10 MB. Please attach a smaller version.";
  return null;
}

export function ApplicationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);

  const validate = (data: FormData): Errors => {
    const e: Errors = {};
    if (!String(data.get("name") || "").trim()) e.name = "Please enter your name.";
    const email = String(data.get("email") || "").trim();
    if (!email) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
    const resumeErr = fileError((data.get("resume") as File) || undefined);
    if (resumeErr) e.resume = resumeErr;
    return e;
  };

  const onFileChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const file = ev.currentTarget.files?.[0];
    setFileName(file ? file.name : "");
    setErrors((prev) => {
      const next = { ...prev };
      const err = fileError(file);
      if (err) next.resume = err;
      else delete next.resume;
      return next;
    });
  };

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const e = validate(new FormData(form));
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = form.querySelector<HTMLElement>(`[name="${Object.keys(e)[0]}"]`);
      first?.focus();
      setSent(false);
      return;
    }
    setSent(true);
    form.reset();
    setFileName("");
  };

  const describe = (name: string) => (errors[name] ? `${name}-err` : undefined);

  if (sent) {
    return (
      <div aria-live="polite" style={{ border: "1px solid #BBF7D0", background: "#F0FDF4", borderRadius: 8, padding: "clamp(26px,3vw,38px)" }}>
        <div aria-hidden="true" style={{ width: 40, height: 40, marginBottom: 18, background: "#021F43", transform: "rotate(45deg)" }} />
        <p role="status" style={{ margin: "0 0 10px", fontSize: "clamp(18px,1.8vw,22px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#021F43" }}>
          Thanks. Your application is in.
        </p>
        <p style={{ margin: 0, fontSize: 16.5, lineHeight: 1.6, color: "#166534", maxWidth: "60ch" }}>
          We read every one and we&apos;ll be in touch when there&apos;s a fit.{" "}
          <span data-unverified="" style={{ color: "#3F6B4A" }}>
            (This preview build doesn&apos;t transmit files. Connect the form to PTG&apos;s applicant inbox before launch.)
          </span>
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="hov-link"
          style={{ margin: "18px 0 0", background: "none", border: 0, padding: 0, fontFamily: "inherit", fontSize: 14.5, fontWeight: 700, color: "#0034A0", cursor: "pointer" }}
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={onSubmit} aria-describedby="apply-status" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div aria-live="polite" id="apply-status" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px,100%),1fr))", gap: 20 }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Full name {req}</label>
          <input id="name" name="name" type="text" autoComplete="name" required aria-required="true" aria-invalid={errors.name ? "true" : undefined} aria-describedby={describe("name")} style={fieldStyle} />
          {errors.name ? <p id="name-err" style={errStyle}>{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Email {req}</label>
          <input id="email" name="email" type="email" autoComplete="email" required aria-required="true" aria-invalid={errors.email ? "true" : undefined} aria-describedby={describe("email")} style={fieldStyle} />
          {errors.email ? <p id="email-err" style={errStyle}>{errors.email}</p> : null}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px,100%),1fr))", gap: 20 }}>
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" style={fieldStyle} />
        </div>
        <div>
          <label htmlFor="location" style={labelStyle}>Location</label>
          <input id="location" name="location" type="text" autoComplete="address-level2" placeholder="City, state" style={fieldStyle} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px,100%),1fr))", gap: 20 }}>
        <div>
          <label htmlFor="interest" style={labelStyle}>Area of interest</label>
          <select id="interest" name="interest" defaultValue="" style={fieldStyle}>
            <option value="" disabled>Select one</option>
            {INTEREST_AREAS.map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="link" style={labelStyle}>LinkedIn or portfolio</label>
          <input id="link" name="link" type="url" inputMode="url" placeholder="https://" style={fieldStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="resume" style={labelStyle}>Résumé {req}</label>
        {/* The native input stays keyboard-focusable; the label is the visible,
            styled target and the box shows :focus-within when the input is focused. */}
        <label
          htmlFor="resume"
          className="hov-dropzone"
          style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", border: `1.5px dashed ${errors.resume ? "#B42318" : "#94A3B8"}`, borderRadius: 6, background: "#F0F2F4", padding: "16px 18px", cursor: "pointer" }}
        >
          <span className="hov-cta-navy cta-sm" style={{ display: "inline-block", flex: "0 0 auto" }}>Choose file</span>
          <span style={{ fontSize: 14.5, color: fileName ? "#021F43" : "#475569", fontWeight: fileName ? 700 : 500, wordBreak: "break-all" }}>
            {fileName || "PDF or Word, up to 10 MB"}
          </span>
        </label>
        <input
          ref={fileRef}
          id="resume"
          name="resume"
          type="file"
          accept={ACCEPT}
          required
          aria-required="true"
          aria-invalid={errors.resume ? "true" : undefined}
          aria-describedby={errors.resume ? "resume-err" : "resume-hint"}
          onChange={onFileChange}
          style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap", border: 0 }}
        />
        {errors.resume ? <p id="resume-err" style={errStyle}>{errors.resume}</p> : <p id="resume-hint" style={{ margin: "6px 0 0", fontSize: 13, color: "#64748B" }}>Accepted formats: PDF, .doc, .docx.</p>}
      </div>

      <div>
        <label htmlFor="about" style={labelStyle}>Anything you&apos;d like us to know?</label>
        <textarea id="about" name="about" rows={5} style={{ ...fieldStyle, resize: "vertical" }} />
      </div>

      <div>
        <button type="submit" className="hov-cta-ember cta" style={{ fontFamily: "inherit", border: 0, cursor: "pointer" }}>
          Submit application
        </button>
      </div>
    </form>
  );
}
