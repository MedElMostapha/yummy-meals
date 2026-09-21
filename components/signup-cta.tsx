"use client";

import { useState, type FormEvent } from "react";
import { Check } from "@phosphor-icons/react/dist/ssr";

type Status = "idle" | "error" | "done";

export function SignupCta() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setStatus(valid ? "done" : "error");
  }

  return (
    <section id="start" className="bg-forest py-20 text-on-forest md:py-28">
      <div className="mx-auto grid max-w-[1400px] items-end gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <h2 className="font-display text-5xl font-extrabold leading-[0.94] tracking-[-0.02em] sm:text-6xl">
            Ready when
            <br />
            you are.
          </h2>
          <p className="mt-5 max-w-[46ch] text-on-forest-soft">
            Leave your email and we will send this week&apos;s menu, plus a
            welcome discount on your first box.
          </p>
        </div>

        <div className="lg:col-span-5">
          <form onSubmit={handleSubmit} noValidate>
            <label
              htmlFor="email"
              className="block font-mono text-[11px] uppercase tracking-[0.18em] text-on-forest-soft"
            >
              Email address
            </label>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status !== "idle") setStatus("idle");
                }}
                aria-invalid={status === "error"}
                aria-describedby="email-help"
                className="h-12 w-full rounded-full border border-on-forest/25 bg-transparent px-5 text-on-forest placeholder:text-on-forest-soft"
              />
              <button
                type="submit"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-2"
              >
                Get started
              </button>
            </div>

            <div id="email-help" className="mt-3 min-h-5" aria-live="polite">
              {status === "error" && (
                <p className="text-sm text-flare">
                  Enter a valid email address to continue.
                </p>
              )}
              {status === "done" && (
                <p className="inline-flex items-center gap-2 text-sm text-flare">
                  <Check size={16} weight="bold" />
                  You are on the list. Check your inbox for the menu.
                </p>
              )}
              {status === "idle" && (
                <p className="text-xs text-on-forest-soft">
                  One email a week. No spam, ever.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
