import React, { useState, useEffect } from 'react'
import Navbar from '../../component/navbar/navbar'
import Sidebar from '../../component/sidebar/sidebar'
import Footer from '../../component/footer/footer'
import { Link } from 'react-router-dom'

const DashBoard = () => {

  const [recentLeads, setRecentLeads] = useState([]);
  const [showDropdown, setShowDropdown] = useState(null);

  function count(data){
    if(metrics[0].value == 0){
    for (let i = 0; i < data.length; i++){
        metrics[0].value++;
      if (data[i].status === 'PENDING') {
        metrics[1].value++;
      } else if (data[i].status === 'REJECTED') {
        metrics[2].value++;
      } else if (data[i].status === 'FOLLOWUP') {
        metrics[3].value++;
      }
    }
  }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/lead');
        const data = await response.json();
        count(data);
        setRecentLeads(data);
        
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  },[]);

  // Sample data - in a real app, this would come from props or an API
  const [metrics,setmetrics] = useState([
    { title: "Total Leads", value: 0, positive: true },
    { title: "Pending", value: 0, positive: true },
    { title: "Rejected", value: 0, positive: false },
    { title: "Follow Ups", value: 0 , positive: true },
  ]);

  // const recentLeads = [
  //   { name: "John Smith", company: "Tech Corp", status: "New", value: "$15,000", mobileNo: "1234567890" },
  //   { name: "Sarah Wilson", company: "Marketing Inc", status: "In Progress", value: "$8,500", mobileNo: "1234567890" },
  //   { name: "Mike Johnson", company: "Sales Pro", status: "Contacted", value: "$12,000", mobileNo: "1234567890" },
  //   { name: "Emma Davis", company: "Design Co", status: "New", value: "$9,500", mobileNo: "1234567890" },
  //   { name: "John Smith", company: "Tech Corp", status: "New", value: "$15,000", mobileNo: "1234567890" },
  //   { name: "Sarah Wilson", company: "Marketing Inc", status: "In Progress", value: "$8,500", mobileNo: "1234567890" },
  //   { name: "Mike Johnson", company: "Sales Pro", status: "Contacted", value: "$12,000", mobileNo: "1234567890" },
  //   { name: "Emma Davis", company: "Design Co", status: "New", value: "$9,500", mobileNo: "1234567890" },
  // ];

  const getStatusColor = (status) => {
    const colors = {
      'CONFIRM': 'bg-blue-100 text-blue-800',
      'PENDING': 'bg-yellow-100 text-yellow-800',
      'ONBOARD': 'bg-purple-100 text-purple-800',
      'REJECTED': 'bg-red-100 text-red-800',
      'FOLLOWUP': 'bg-green-100 text-green-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };


  return (
    <>
      <div className=' flex-col '>
        <Navbar />
        <div className=' flex '>
          <Sidebar />
          <div className="min-h-screen  m-2 w-[100%] bg-gray-50">
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="px-4 sm:px-0 mb-8 flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Dashboard</h2>
                  <p className="mt-1 text-sm text-gray-600">Track and manage your lead</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm">
                  <Link to="/addnew">Add a New Lead</Link>
                </button>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8 px-4 sm:px-0">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-500 truncate">{metric.title}</p>
                          <p className="mt-1 text-3xl font-semibold text-gray-900">{metric.value}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 sm:px-0">
                <div className="bg-white shadow rounded-lg">
                  <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Leads</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50 text-xs font-bold text-black-500 ">
                        <tr>
                          <th className="px-6 py-3 text-left  uppercase tracking-wider">Name</th>
                          <th className="px-6 py-3 text-left  uppercase tracking-wider">Business Type</th>
                          <th className="px-6 py-3 text-left  uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left  uppercase tracking-wider">Offer Budget</th>
                          <th className="px-6 py-3 text-left  uppercase tracking-wider">Mobile</th>
                          <th className="relative px-6 py-3">
                            <span className="sr-only">Actions</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {recentLeads.map((lead, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-500">{lead.businessType}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(lead.status)}`}>
                                {lead.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.offerBudget}</td>
                            
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.mobile}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button
                                className="text-blue-600 hover:text-blue-900"
                                onClick={() => setShowDropdown(showDropdown === index ? null : index)}
                              >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                              </button>
                              {showDropdown === index && (
                                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                  <div className="py-1">
                                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Edit</button>
                                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Delete</button>
                                  </div>
                                </div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}


export default DashBoard;