// import React, { useState } from 'react'
// import Navbar from '../../component/navbar/navbar'
// import Sidebar from '../../component/sidebar/sidebar'
// import Footer from '../../component/footer/footer'
// import { Link } from 'react-router-dom'

// const FollowUp = () => {


//   const [showDropdown, setShowDropdown] = useState(null);

//   const recentLeads = [
//     { name: "John Smith", company: "Tech Corp", status: "FollowUp", value: "$15,000" },
//     { name: "Sarah Wilson", company: "Marketing Inc", status: "FollowUp", value: "$8,500" },
//     { name: "Mike Johnson", company: "Sales Pro", status: "FollowUp", value: "$12,000" },
//     { name: "Emma Davis", company: "Design Co", status: "FollowUp", value: "$9,500" },
//   ];

//   const getStatusColor = (status) => {
//     const colors = {
//       'FollowUp': 'bg-blue-100 text-blue-800',

//     };
//     return colors[status] || 'bg-gray-100 text-gray-800';
//   };



//   return (
//     <>

//       <div className=' flex-col '>
//         <Navbar />
//         <div className=' flex'>
//           <Sidebar />

//           <div className="min-h-screen  m-10 w-[100%] bg-gray-50">
//             <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//               {/* Header */}
              

              

//               <div className="px-4 sm:px-0">
//                 <div className="bg-white shadow rounded-lg">
//                   <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
//                     <h3 className="text-lg leading-6 font-medium text-gray-900">All FollowUp Leads :</h3>
//                   </div>
//                   <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                       <thead className="bg-gray-50">
//                         <tr>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                           <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
//                           <th className="relative px-6 py-3">
//                             <span className="sr-only">Actions</span>
//                           </th>
//                         </tr>
//                       </thead>
//                       <tbody className="bg-white divide-y divide-gray-200">
//                         {recentLeads.map((lead, index) => (
//                           <tr key={index} className="hover:bg-gray-50">
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="text-sm font-medium text-gray-900">{lead.name}</div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <div className="text-sm text-gray-500">{lead.company}</div>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap">
//                               <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(lead.status)}`}>
//                                 {lead.status}
//                               </span>
//                             </td>
//                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.value}</td>
//                             <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                               <button
//                                 className="text-blue-600 hover:text-blue-900"
//                                 onClick={() => setShowDropdown(showDropdown === index ? null : index)}
//                               >
//                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
//                                 </svg>
//                               </button>
//                               {showDropdown === index && (
//                                 <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
//                                   <div className="py-1">
//                                     <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Edit</button>
//                                     <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">Delete</button>
//                                   </div>
//                                 </div>
//                               )}
//                             </td>
//                           </tr>
//                         ))}

//                       </tbody>
//                     </table>
//                   </div>
//                 </div>
//               </div>
//             </main>
//           </div>

//         </div>
//         <Footer />
//       </div>

//     </>

//   )
// }


// export default FollowUp;




import React from 'react'
import Navbar from '../../component/navbar/navbar';
import Sidebar from '../../component/sidebar/sidebar';
import AddNew from '../addlead/addNew';
import Footer from '../../component/footer/footer';
import { Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';

const FollowUp = () => {

  const contacts = [
    {
      name: "Ronald Richards",
      status: "Followup",
      Business: "IT",
      price: "$15,000",
      phone: "2195550114"
    },
    {
      name: "Courtney Henry",
      status: "Followup",
      Business: "Non IT",
      price: "$15,000",
      phone: "9075550101"
    },
    {
      name: "Annette Black",
      status: "Followup",
      Business: "Educational",
      price: "$15,000",
      phone: "2255550118"
    },
    {
      name: "Ronald Richards",
      status: "Followup",
      Business: "IT",
      price: "$15,000",
      phone: "2195550114"
    },
    {
      name: "Courtney Henry",
      status: "Followup",
      Business: "Educational",
      price: "$15,000",
      phone: "9075550101"
    },
    {
      name: "Annette Black",
      status: "Followup",
      Business: "IT",
      price: "$15,000",
      phone: "2255550118"
    },
    {
      name: "Courtney Henry",
      status: "Followup",
      Business: "Non IT",
      price: "$15,000",
      phone: "9075550101"
    },
    {
      name: "Annette Black",
      status: "Followup",
      Business: "IT",
      price: "$15,000",
      phone: "2255550118"
    },
    // Add more contacts here...
  ];


  const getStatusColor = (status) => {
    const colors = {
      
      'Followup': 'bg-yellow-100 text-blue-800'
   
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };



  return (
    <>
      <div className=' flex-col '>
        <Navbar />
        <div className=' flex'>
          <Sidebar />
          <div className="min-h-screen  m-2 w-[100%] ">
          <div className="hometop  h-[10%] flex items-center bg-gray-300 justify-between">
              <div className="heading text-3xl font-bold text-blue-600 ml-4">FollowUp Leads</div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full divide-y divide-gray-200">
                <thead>
                  <tr className=" text-xs font-bold text-black-500 bg-gray-50">


                    <th className="  px-4 py-3 text-left -xs  uppercase tracking-wider">
                      <span className='ml-8' > Sl. No</span>

                    </th>
                    <th className="px-4 py-3 text-left  uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left  uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left  uppercase tracking-wider">
                      Business Type
                    </th>
                    <th className="px-4 py-3 text-left  uppercase tracking-wider">
                      Offer Budget
                    </th>
                    <th className="px-4 py-3 text-left  uppercase tracking-wider">
                      Phone Numbers
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {contacts.map((contact, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3">
                        {/* <Checkbox /> */}

                        <div className="flex items-center gap-4 mr-2">
                          <input
                            type="checkbox"
                            className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring focus:ring-blue-200"
                          />
                          <div className="w-8 h-8 flex items-center justify-center rounded-full text-black ">
                            {index + 1}
                          </div>
                        </div>

                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">

                          <div className="flex items-center">
                            <span className="font-medium text-gray-900">{contact.name}</span>
                            {/* <Linkedin className="ml-2 h-4 w-4 text-blue-600" /> */}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(contact.status)}`}>
                                {contact.status}
                              </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {contact.Business}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {contact.price}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {contact.phone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default FollowUp;