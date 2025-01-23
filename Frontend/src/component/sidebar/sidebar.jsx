import React from 'react'
import { Link } from 'react-router-dom'
import { Home , Users, FileText, Target, MonitorCog, FolderKanban, Codesandbox} from 'lucide-react'



const Sidebar = () => {
  return (
    <div className="flex m-1 rounded-md bg-white">
            <div className="w-64 bg-gray-300 shadow-lg">
                <nav className="mt-6 ">
                    <div className="px-4 space-y-2">
                        <div className="flex items-center px-4 py-3 text-black hover:bg-blue-400  rounded-lg cursor-pointer">
                            <Home className="h-5 w-5" />
                            <button className="ml-3 font-medium  "><Link to="/home">Home</Link></button>
                        </div>

                        <div className="flex items-center px-4 py-3 text-black hover:bg-blue-400 rounded-lg cursor-pointer">
                            <Users className="h-5 w-5" />
                            <button className="ml-3 font-medium"><Link to="/new">New</Link></button>
                        </div>

                        <div className="flex items-center px-4 py-3 text-black hover:bg-blue-400 rounded-lg cursor-pointer">
                            <FileText className="h-5 w-5" />
                            <button className="ml-3 font-medium"><Link to="/followup">Follow Up</Link></button>
                        </div>

                        <div className="flex items-center px-4 py-3 text-black hover:bg-blue-400 rounded-lg cursor-pointer">
                            <Target className="h-5 w-5" />
                            <button className="ml-3 font-medium"><Link to="/important">Important</Link></button>
                        </div>

                        <div className="flex items-center px-4 py-3  text-black hover:bg-blue-400 rounded-lg cursor-pointer">
                            <MonitorCog className="h-5 w-5" />
                            <span className="ml-3 font-medium">Metting</span>
                        </div>
                        <div className="flex items-center px-4 py-3  text-black hover:bg-blue-400 rounded-lg cursor-pointer">
                            <FolderKanban className="h-5 w-5" />
                            <span className="ml-3 font-medium">On-Board</span>
                        </div>
                        <div className="flex items-center px-4 py-3  text-black hover:bg-blue-400 rounded-lg cursor-pointer">
                            <Codesandbox className="h-5 w-5" />
                            <span className="ml-3 font-medium">Conform</span>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
  )
}


export default Sidebar;