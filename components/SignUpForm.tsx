'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { insforge } from "@/lib/insforge";
import { FLAGS, useFeatureFlag } from "@/lib/featureFlags";

type Step = "form" | "verify";

export default function SignUpForm() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);

  const passwordVariant = useFeatureFlag(FLAGS.signupPasswordInputV2);
  const hasMinLength = password.length >= 6;
  const hasLetterAndNumber = /[A-Za-z]/.test(password) && /\d/.test(password);

  useEffect(() => {
    if (!passwordVariant) return;
    const onKey = (e: KeyboardEvent) => {
      if (typeof e.getModifierState === "function") {
        setCapsLockOn(e.getModifierState("CapsLock"));
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKey);
    };
  }, [passwordVariant]);

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data, error } = await insforge.auth.signUp({ email, password, name });
      if (error) throw error;
      if (data?.requireEmailVerification) {
        setStep("verify");
      } else if (data?.accessToken) {
        router.push("/");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Sign up failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data, error } = await insforge.auth.verifyEmail({ email, otp: code });
      if (error) throw error;
      if (data?.accessToken) router.push("/");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Verification failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleOAuth(provider: "github" | "google") {
    await insforge.auth.signInWithOAuth({ provider, redirectTo: `${window.location.origin}/` });
  }

  if (step === "verify") {
    return (
      <div className="w-full max-w-sm mx-auto">
        <div className="mb-8 text-center">
          <Link href="/" className="text-xl font-bold text-gray-900">Meridian</Link>
          <h1 className="mt-6 text-2xl font-bold text-gray-900">Check your email</h1>
          <p className="mt-1 text-sm text-gray-500">
            We sent a 6-digit code to <strong>{email}</strong>
          </p>
        </div>
        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="text"
            maxLength={6}
            required
            value={code}
            onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-2xl tracking-widest text-center outline-none focus:ring-2 focus:ring-amber-400 transition"
            placeholder="000000"
          />
          {error && <p className="text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={loading || code.length < 6}
            className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 disabled:opacity-50 transition-colors"
          >
            {loading ? "Verifying…" : "Verify email"}
          </button>
          <button
            type="button"
            onClick={() => insforge.auth.resendVerificationEmail({ email })}
            className="w-full text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Resend code
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="mb-8 text-center">
        <Link href="/" className="text-xl font-bold text-gray-900">Meridian</Link>
        <h1 className="mt-6 text-2xl font-bold text-gray-900">Create your account</h1>
        <p className="mt-1 text-sm text-gray-500">Start your 14-day free trial</p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <button
          onClick={() => handleOAuth("github")}
          className="flex items-center justify-center gap-2 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
          Continue with GitHub
        </button>
        <button
          onClick={() => handleOAuth("google")}
          className="flex items-center justify-center gap-2 w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
          Continue with Google
        </button>
      </div>

      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <form onSubmit={handleSignUp} noValidate className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
          <input
            id="name" type="text" autoComplete="name" value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 transition"
            placeholder="Alex Johnson"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work email</label>
          <input
            id="email" type="email" autoComplete="email" required value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 transition"
            placeholder="alex@company.com"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              id="password"
              data-track="password-input"
              type={showPassword ? "text" : "password"}
              autoComplete="new-password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={
                passwordVariant
                  ? "w-full border border-gray-300 rounded-lg px-4 py-3.5 pr-12 text-base outline-none focus:ring-2 focus:ring-amber-400 transition"
                  : "w-full border border-gray-200 rounded-lg px-3 py-2.5 pr-11 text-sm outline-none focus:ring-2 focus:ring-amber-400 transition"
              }
              placeholder="At least 6 characters"
              aria-describedby={passwordVariant ? "password-requirements" : "password-hint"}
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
              tabIndex={-1}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-700 transition-colors"
            >
              {showPassword ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                  <line x1="2" y1="2" x2="22" y2="22" />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>
          {passwordVariant ? (
            <>
              {capsLockOn && (
                <p
                  role="alert"
                  className="mt-1.5 text-xs font-medium text-amber-700 flex items-center gap-1"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2 3 14h6v8h6v-8h6z" />
                  </svg>
                  Caps Lock is on
                </p>
              )}
              <ul
                id="password-requirements"
                aria-live="polite"
                className="mt-2 space-y-1 text-xs"
              >
                <li className={`flex items-center gap-1.5 ${hasMinLength ? "text-emerald-600" : "text-gray-500"}`}>
                  <span aria-hidden="true">{hasMinLength ? "✓" : "○"}</span>
                  At least 6 characters
                </li>
                <li className={`flex items-center gap-1.5 ${hasLetterAndNumber ? "text-emerald-600" : "text-gray-500"}`}>
                  <span aria-hidden="true">{hasLetterAndNumber ? "✓" : "○"}</span>
                  Mix of letters and numbers
                </li>
              </ul>
            </>
          ) : (
            <p id="password-hint" className="mt-1.5 text-xs text-gray-500">
              Must be at least 6 characters
            </p>
          )}
        </div>
        {error && <p className="text-xs text-red-500">{error}</p>}
        <button
          type="submit" disabled={loading}
          className="w-full bg-gray-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 disabled:opacity-50 transition-colors mt-2"
          data-ph-id="signup-submit"
        >
          {loading ? "Creating account…" : "Create account"}
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-gray-500">
        Already have an account?{" "}
        <Link href="/signin" className="text-amber-600 font-medium hover:underline">Sign in</Link>
      </p>
    </div>
  );
}
