export default function IntegrationIcons() {
  const integrations = [
    { name: "Stripe", icon: "💳" },
    { name: "HubSpot", icon: "🎯" },
    { name: "Slack", icon: "💬" },
    { name: "AWS", icon: "☁️" },
    { name: "Google", icon: "🔍" },
    { name: "GitHub", icon: "🐙" },
    { name: "Docker", icon: "🐳" },
    { name: "Database", icon: "🗄️" }
  ];

  return (
    <div className="mb-16" data-testid="integration-icons">
      <p className="text-gray-400 text-sm mb-6 uppercase tracking-wider">Integrates with your favorite tools</p>
      <div className="flex justify-center items-center space-x-8 opacity-60">
        {integrations.map((integration) => (
          <div 
            key={integration.name}
            className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center hover:opacity-80 transition-opacity"
            data-testid={`integration-${integration.name.toLowerCase()}`}
            title={integration.name}
          >
            <span className="text-lg">{integration.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
