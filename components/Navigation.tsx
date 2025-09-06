import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="relative z-20 flex justify-between items-center p-6 lg:px-12" data-testid="navigation">
      <Link href='/' className="flex items-center space-x-2" data-testid="brand-logo">
        <span className="text-3xl font-semibold text-white">Weone<span className="text-blue-400">AI</span></span>
      </Link>
      
      {/* <div className="hidden md:flex items-center space-x-8" data-testid="nav-links">
        <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-docs">Docs</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-blog">Blog</a>
        <a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="link-community">Community</a>
      </div> */}
      
      <div className="flex items-center space-x-4" data-testid="auth-buttons">
        {/* <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors" data-testid="button-login">Log in</button> */}
        <Link href="https://cal.com/weoneai/30min" className="px-4 py-2 bg-white text-dark-primary rounded-full cursor-pointer hover:bg-gray-100 transition-colors font-medium" data-testid="button-signup">Book a Call</Link>
      </div>
    </nav>
  );
}