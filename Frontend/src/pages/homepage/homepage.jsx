import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
        <div className="min-h-screen bg-gradient-to-b from-gray-400 to-gray-300 text-black">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-4 shadow-md">
          <div className="flex items-center  justify-between">
            <div className="text-xl font-bold">Leads</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full transition-colors">
            <Link to="/signin">LogIn</Link>
            </button>
          </div>
        </nav>
  
        {/* Hero Section */}
        <div className="container mx-auto px-6 py-56 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Lead Management System
          </h1>
          <p className="text-xl  text-black mb-12 max-w-2xl mx-auto">
          lead management system streamlines the process of capturing, tracking, and nurturing potential customers, ensuring improved sales efficiency and better conversion rates.
          </p>
          <div className="flex justify-center space-x-4">     
          </div>
        </div>
  
  
        {/* Stats Section */}
        <div className="bg-blue-600 py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">10K+</div>
                <div className="text-blue-100">Active Users</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Complete Project</div>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">5-Star Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        </>
    )
}


export default HomePage