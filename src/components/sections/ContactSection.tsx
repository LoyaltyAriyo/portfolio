import { type FormEvent, useEffect, useState } from 'react'
import { Check, Copy, Mail, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { contactDetails } from '../../data/profile'
import { fadeUp, revealViewport, staggerContainer } from '../../lib/motion'
import { safeCardReveal, useSafeCardReveal } from '../../lib/safeReveal'
import { cn } from '../../lib/utils'
import { Container } from '../ui/Container'
import { SectionHeader } from '../ui/SectionHeader'

type ContactFormState = {
  name: string
  email: string
  message: string
}

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>
type ContactFormStatus = 'idle' | 'loading' | 'success' | 'error'

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  message: '',
}

const inputClassName =
  'mt-2 w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-accent-400/60 focus:bg-white/[0.065] focus:ring-2 focus:ring-accent-400/20'

type BrandIconProps = {
  size?: number
}

function LinkedInIcon({ size = 18 }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.851 0-2.134 1.446-2.134 2.941v5.665H9.355V9h3.414v1.561h.049c.475-.9 1.637-1.85 3.368-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM6.114 20.452H2.554V9h3.56v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  )
}

function GitHubIcon({ size = 18 }: BrandIconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 .5C5.649.5.5 5.649.5 12c0 5.088 3.292 9.39 7.86 10.914.575.101.79-.247.79-.552 0-.276-.015-1.19-.015-2.161-2.885.531-3.626-.704-3.858-1.335-.131-.334-.696-1.335-1.19-1.611-.406-.218-.986-.755-.015-.769.914-.015 1.567.841 1.785 1.19 1.045 1.756 2.712 1.263 3.379.958.102-.755.407-1.263.74-1.553-2.552-.29-5.219-1.277-5.219-5.669 0-1.248.45-2.277 1.19-3.074-.116-.29-.522-1.466.116-3.031 0 0 .972-.305 3.176 1.176a10.88 10.88 0 0 1 2.9-.392c.986 0 1.973.13 2.9.392 2.204-1.495 3.176-1.176 3.176-1.176.638 1.565.232 2.741.116 3.031.74.797 1.19 1.756 1.19 3.074 0 4.407-2.683 5.379-5.234 5.669.42.363.783 1.06.783 2.146 0 1.553-.014 2.8-.014 3.191 0 .305.217.668.783.552A11.516 11.516 0 0 0 23.5 12C23.5 5.649 18.351.5 12 .5z"
      />
    </svg>
  )
}

function validateForm(formState: ContactFormState) {
  return (Object.entries(formState) as Array<[keyof ContactFormState, string]>).reduce(
    (errors, [field, value]) => {
      if (!value.trim()) {
        errors[field] = 'Required'
      }

      return errors
    },
    {} as ContactFormErrors,
  )
}

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(value)
      return
    } catch {
      // Fall through to the textarea fallback when browser permissions block clipboard access.
    }
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

function ContactActionGrid() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) {
      return undefined
    }

    const timeoutId = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timeoutId)
  }, [copied])

  const handleCopyEmail = async () => {
    await copyText(contactDetails.email)
    setCopied(true)
  }

  const actions = [
    {
      label: 'Email',
      value: contactDetails.email,
      icon: Mail,
      control: (
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.06] px-3 text-sm font-semibold text-white transition hover:border-accent-400/50 hover:bg-accent-400/10 focus:outline-none focus:ring-2 focus:ring-accent-400/25"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? 'Copied' : 'Copy email'}
        </button>
      ),
    },
    {
      label: 'LinkedIn',
      value: 'View profile',
      icon: LinkedInIcon,
      control: (
        <a
          href={contactDetails.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] px-3 text-sm font-semibold text-white transition hover:border-accent-400/50 hover:bg-accent-400/10 focus:outline-none focus:ring-2 focus:ring-accent-400/25"
        >
          Open
        </a>
      ),
    },
    {
      label: 'GitHub',
      value: 'View GitHub',
      icon: GitHubIcon,
      control: (
        <a
          href={contactDetails.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] px-3 text-sm font-semibold text-white transition hover:border-accent-400/50 hover:bg-accent-400/10 focus:outline-none focus:ring-2 focus:ring-accent-400/25"
        >
          Open
        </a>
      ),
    },
  ]

  return (
    <div className="grid gap-3">
      {actions.map((action) => {
        const Icon = action.icon

        return (
          <div
            key={action.label}
            className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-accent-400/35 hover:bg-white/[0.055] sm:grid-cols-[1fr_auto] sm:items-center"
          >
            <div className="grid grid-cols-[2.5rem_1fr] gap-3">
              <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.045] text-accent-300">
                <Icon size={18} />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                  {action.label}
                </span>
                <span className="mt-1 block truncate text-sm text-slate-200">{action.value}</span>
              </span>
            </div>
            <div>{action.control}</div>
          </div>
        )
      })}
    </div>
  )
}

function ContactForm() {
  const [formState, setFormState] = useState<ContactFormState>(initialFormState)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [status, setStatus] = useState<ContactFormStatus>('idle')

  const updateField = (field: keyof ContactFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setStatus('idle')
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validateForm(formState)
    setErrors(nextErrors)
    setStatus('idle')

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT

    if (!endpoint) {
      setStatus('error')
      return
    }

    const payload = {
      name: formState.name.trim(),
      email: formState.email.trim(),
      message: formState.message.trim(),
    }

    try {
      setStatus('loading')

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('Formspree submission failed')
      }

      setFormState(initialFormState)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-4">
      <div>
        <label htmlFor="contact-name" className="text-sm font-medium text-slate-300">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={formState.name}
          onChange={(event) => updateField('name', event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={cn(inputClassName, errors.name && 'border-red-400/60 focus:ring-red-400/20')}
        />
        {errors.name ? (
          <p id="contact-name-error" className="mt-2 text-xs font-medium text-red-300">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-medium text-slate-300">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="your@email.com"
          value={formState.email}
          onChange={(event) => updateField('email', event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={cn(inputClassName, errors.email && 'border-red-400/60 focus:ring-red-400/20')}
        />
        {errors.email ? (
          <p id="contact-email-error" className="mt-2 text-xs font-medium text-red-300">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium text-slate-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about the role, project, or collaboration."
          value={formState.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={cn(
            inputClassName,
            'min-h-36 resize-y leading-6',
            errors.message && 'border-red-400/60 focus:ring-red-400/20',
          )}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-2 text-xs font-medium text-red-300">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-ink-950 transition hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-accent-400/30"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
        <Send size={16} />
      </button>

      {status === 'success' ? (
        <p className="rounded-xl border border-accent-400/25 bg-accent-400/10 px-4 py-3 text-sm font-medium text-accent-200">
          Message sent — I’ll get back to you soon.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm font-medium text-red-200">
          Something went wrong. Please try again or email me directly.
        </p>
      ) : null}
    </form>
  )
}

export function ContactSection() {
  const safeReveal = useSafeCardReveal()
  const contactCardClassName =
    'surface-card mt-10 grid gap-8 p-5 transition duration-300 hover:border-accent-400/30 hover:shadow-glow sm:p-7 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:p-8'

  const contactCardContent = (
    <>
      <ContactActionGrid />
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
        <ContactForm />
      </div>
    </>
  )

  return (
    <section id="contact" className="section-spacing scroll-mt-16 overflow-hidden">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          variants={staggerContainer}
          className="mx-auto max-w-4xl"
        >
          <motion.div variants={fadeUp} className="flex justify-center text-center">
            <SectionHeader
              eyebrow="Contact"
              title="Let's build something useful"
              description="Open to junior developer, full-stack, React, and AI-related opportunities. Reach out for roles, collaborations, or project conversations."
            />
          </motion.div>

          {safeReveal ? (
            <motion.div variants={safeCardReveal}>
              <div className={contactCardClassName}>{contactCardContent}</div>
            </motion.div>
          ) : (
            <motion.div variants={fadeUp} className={contactCardClassName}>
              {contactCardContent}
            </motion.div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
