"use client"

import Image from "next/image"

export default function IntegrationMarquee() {
  const integrations = [
    {
      name: "Google",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a54325e150f16636dc.png",
    },
    {
      name: "Facebook",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a579284bbe3b6a77ac.png",
    },
    {
      name: "Stripe",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9493235043e.png",
    },
    {
      name: "Clio",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a579284bdb1a6a77ab.png",
    },
    {
      name: "Zapier",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67abd58650fb000ed8851f30.png",
    },
    {
      name: "Slack",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a2b24ca6434.png",
    },
    {
      name: "WhatsApp",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67af641f237ce2563df82508.png",
    },
    {
      name: "Wave",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a572d42b2bbdab113b.png",
    },
    {
      name: "Shopify",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9500a35043d.png",
    },
    {
      name: "Woo",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a1b3eca6435.png",
    },
    {
      name: "LinkedIn",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a537d82f92fceb7e3d.png",
    },
    {
      name: "Instagram",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9160435043f.png",
    },
    {
      name: "GMB",
      icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5f3bda8b1b50e5c3e.png",
    },
  ]

  const tripleIntegrations = [...integrations, ...integrations, ...integrations]

  return (
    <div className="md:mb-10 py-12" data-testid="integration-marquee">
      <p className="text-gray-400 text-sm mb-8 uppercase tracking-wider text-center">
        Integrates with your favorite tools
      </p>

      <div className="relative overflow-hidden max-w-5xl">
        <div className="flex animate-scroll gap-6 items-center">
          {tripleIntegrations.map((integration, index) => {

            return (
              <div
                key={`${integration.name}-${index}`}
                className={`
                  flex-shrink-0 p-3 rounded-lg transition-all duration-300
                  flex items-center justify-center
                  bg-white/95 border border-gray-200 hover:scale-105 hover:shadow-md
                `}
                data-testid={`integration-${integration.name.toLowerCase()}`}
                title={integration.name}
              >
                <Image
                  src={integration.icon || "/placeholder.svg"}
                  height="40"
                  width="40"
                  className={`md:w-20 w-16 md:h-12 h-10 object-contain`}
                  alt={`${integration.name} integration`}
                />
              </div>
            )
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}





