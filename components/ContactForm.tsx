"use client";

import { useRef, useState } from "react";

/**
 * ContactForm — accessible enquiry form. Every field has a real <label>, required
 * fields are marked programmatically (required + aria-required), errors are
 * announced via aria-live and tied to inputs with aria-describedby, and the first
 * invalid field is focused on submit.
 *
 * This build does NOT transmit anything (localhost only, no network writes): on a
 * valid submit it shows an in-page confirmation. Wire it to PTG's CRM before launch.
 */

const ORG_TYPES = [
  "State agency",
  "City, county or municipality",
  "Higher education",
  "K-12",
  "Special district, transit or utility",
  "Nonprofit",
  "Federal agency",
  "Other",
];

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah",
  "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
];

const labelStyle: React.CSSProperties = { display: "block", fontSize: 13.5, fontWeight: 700, letterSpacing: ".01em", color: "#021F43", marginBottom: 7 };
const fieldStyle: React.CSSProperties = { width: "100%", fontFamily: "inherit", fontSize: 15.5, color: "#021F43", background: "#FFFFFF", border: "1.5px solid #E5E7EB", borderRadius: 6, padding: "13px 14px" };
const errStyle: React.CSSProperties = { margin: "6px 0 0", fontSize: 13, fontWeight: 600, color: "#B42318" };

type Errors = Record<string, string>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = (data: FormData): Errors => {
    const e: Errors = {};
    if (!String(data.get("name") || "").trim()) e.name = "Please enter your name.";
    const email = String(data.get("email") || "").trim();
    if (!email) e.email = "Please enter your work email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = "Please enter a valid email address.";
    if (!String(data.get("message") || "").trim()) e.message = "Tell us a little about what you need.";
    return e;
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
  };

  const describe = (name: string) => (errors[name] ? `${name}-err` : undefined);

  return (
    <form ref={formRef} noValidate onSubmit={onSubmit} aria-describedby="form-status" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div aria-live="polite" id="form-status">
        {sent ? (
          <p role="status" style={{ margin: 0, padding: "14px 16px", background: "#F0FDF4", border: "1px solid #BBF7D0", borderRadius: 6, fontSize: 14.5, fontWeight: 600, color: "#166534" }}>
            Thanks, we&apos;ll be in touch. (This preview build doesn&apos;t transmit the form; connect it to PTG&apos;s CRM before launch.)
          </p>
        ) : null}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px,100%),1fr))", gap: 20 }}>
        <div>
          <label htmlFor="name" style={labelStyle}>Name <span aria-hidden="true" style={{ color: "#EB4900" }}>*</span></label>
          <input id="name" name="name" type="text" autoComplete="name" required aria-required="true" aria-invalid={errors.name ? "true" : undefined} aria-describedby={describe("name")} style={fieldStyle} />
          {errors.name ? <p id="name-err" style={errStyle}>{errors.name}</p> : null}
        </div>
        <div>
          <label htmlFor="email" style={labelStyle}>Work email <span aria-hidden="true" style={{ color: "#EB4900" }}>*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" required aria-required="true" aria-invalid={errors.email ? "true" : undefined} aria-describedby={describe("email")} style={fieldStyle} />
          {errors.email ? <p id="email-err" style={errStyle}>{errors.email}</p> : null}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px,100%),1fr))", gap: 20 }}>
        <div>
          <label htmlFor="org" style={labelStyle}>Organization</label>
          <input id="org" name="org" type="text" autoComplete="organization" style={fieldStyle} />
        </div>
        <div>
          <label htmlFor="orgType" style={labelStyle}>Organization type</label>
          <select id="orgType" name="orgType" defaultValue="" style={fieldStyle}>
            <option value="" disabled>Select one</option>
            {ORG_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div style={{ maxWidth: 320 }}>
        <label htmlFor="state" style={labelStyle}>State</label>
        <select id="state" name="state" defaultValue="" style={fieldStyle}>
          <option value="" disabled>Select a state</option>
          {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>How can we help? <span aria-hidden="true" style={{ color: "#EB4900" }}>*</span></label>
        <textarea id="message" name="message" rows={5} required aria-required="true" aria-invalid={errors.message ? "true" : undefined} aria-describedby={describe("message")} style={{ ...fieldStyle, resize: "vertical" }} />
        {errors.message ? <p id="message-err" style={errStyle}>{errors.message}</p> : null}
      </div>

      <div>
        <button type="submit" className="hov-cta-ember cta" style={{ fontFamily: "inherit", border: 0, cursor: "pointer" }}>
          Send message
        </button>
      </div>
    </form>
  );
}
