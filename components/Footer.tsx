export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-gray-800 bg-dark-secondary/50 backdrop-blur-sm" data-testid="footer">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8" data-testid="action-buttons">
          <button className="flex items-center space-x-2 px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-green/90 transition-colors font-medium" data-testid="button-watch-demo">
            <span>▶️</span>
            <span>Watch demo</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium" data-testid="button-how-to-prompt">
            <span>💡</span>
            <span>How to prompt WeoneAI</span>
          </button>
          <button className="flex items-center space-x-2 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium" data-testid="button-documentation">
            <span>📚</span>
            <span>Documentation</span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8" data-testid="social-links">
          <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-github">
            <span className="text-xl">🐙</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-youtube">
            <span className="text-xl">📺</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-discord">
            <span className="text-xl">💬</span>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-twitter">
            <span className="text-xl">🐦</span>
          </a>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-8 text-sm" data-testid="footer-links">
          <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-contact">Contact</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-terms">Terms</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors" data-testid="link-privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
