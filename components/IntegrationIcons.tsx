import Image from "next/image";





export default function IntegrationIcons() {
  const integrations = [
    { name: "Google", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a54325e150f16636dc.png" },
    { name: "Facebook", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a579284bbe3b6a77ac.png" },
    { name: "Stripe", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9493235043e.png" },
    { name: "Clio", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a579284bdb1a6a77ab.png" },
    { name: "Zapier", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67abd58650fb000ed8851f30.png" },
    { name: "Slack", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a2b24ca6434.png" },
    { name: "WhatsApp", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67af641f237ce2563df82508.png" },
    { name: "Wave", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a572d42b2bbdab113b.png" },
    { name: "Shopify", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9500a35043d.png" },
    { name: "Woo", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a1b3eca6435.png" },
    { name: "LinkedIn", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a537d82f92fceb7e3d.png" },
    { name: "Instagram", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9160435043f.png" },
    { name: "GMB", icon: "https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5f3bda8b1b50e5c3e.png" },
  ];
 
  return (
    <div className="mb-16" data-testid="integration-icons">
      <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">Integrates with your favorite tools</p>
      <div className="flex justify-center items-center flex-wrap md:gap-8 gap-2 opacity-60">
        {integrations.map((integration) => (
          <div 
            key={integration.name}
            className="p-2 bg-white rounded flex items-center justify-center hover:opacity80 transition-opacit"
            data-testid={`integration-${integration.name.toLowerCase()}`}
            title={integration.name}
          >
            {/* <span className="text-lg">{integration.icon}</span> */}
            <Image src={integration.icon} height="40" width="40" className="w-10" alt="Integration icons" />
          </div>
        ))}
      </div>
    </div>
  );
}
