import { notFound } from 'next/navigation'

const challenges = {
  'chrome-extension': {
    title: 'Build a Chrome Extension',
    days: [
      'Set up basic extension manifest and folder structure',
      'Build popup UI with HTML/CSS',
      'Add JavaScript functionality (e.g. change background color)',
      'Use `chrome.storage` for state',
      'Inject content script into web pages',
      'Package and load into Chrome for testing',
      'Publish or write a showcase post',
    ],
  },
  'saas-landing': {
    title: 'Launch a SaaS Landing Page',
    days: [
      'Pick a fake product + write positioning',
      'Design basic layout (Hero, CTA, Pricing)',
      'Build in Tailwind with mobile responsiveness',
      'Add contact/signup form',
      'Hook up with Email API (e.g. Resend)',
      'Add basic analytics (PostHog or Plausible)',
      'Deploy to Vercel and share it',
    ],
  },
}

type Params = { slug: string }

export default function ChallengeDetail({ params }: { params: Params }) {
  const challenge = challenges[params.slug]

  if (!challenge) return notFound()

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">{challenge.title}</h1>
      <ol className="space-y-2 list-decimal pl-6">
        {challenge.days.map((day, i) => (
          <li key={i}>
            <strong>Day {i + 1}:</strong> {day}
          </li>
        ))}
      </ol>
    </main>
  )
}
