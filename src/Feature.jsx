import { ChatBubbleLeftRightIcon, BoltIcon, ClockIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Conversational Intelligence',
    description:
      'Understands natural language, interprets context, and responds just like a human—making every interaction seamless and intuitive.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Task Automation',
    description:
      'Automates repetitive tasks such as scheduling, data entry, and follow-ups, boosting efficiency and freeing up your team for higher-value work.',
    icon: Cog6ToothIcon,
  },
  {
    name: '24/7 Availability',
    description:
      'Your AI agent never sleeps—providing instant support and engagement for your users at any time, day or night.',
    icon: ClockIcon,
  },
  {
    name: 'Continuous Learning',
    description:
      'Learns from every interaction, improving over time to deliver more accurate responses and personalized experiences.',
    icon: BoltIcon,
  },
]

export default function Feature() {
  return (
    <div className="bg-blue-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">AI Agent Features</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-blue-950 sm:text-5xl lg:text-balance">
            Unlock the Power of Autonomous AI Agents
          </p>
          <p className="mt-6 text-lg/8 text-blue-950">
            Empower your business with intelligent AI agents that automate tasks, engage users naturally, and continuously improve—delivering efficiency and innovation at scale.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-blue-950">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 text-blue-950">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
