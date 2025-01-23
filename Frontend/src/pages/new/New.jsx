import React, { useState, useEffect } from 'react'
import Navbar from '../../component/navbar/navbar';
import Sidebar from '../../component/sidebar/sidebar';
import AddNew from '../addlead/addNew';
import Footer from '../../component/footer/footer';
import { Link } from 'react-router-dom';
// import { Trash2 } from 'lucide-react';
// import { 
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog"
// import { Button } from "@/components/ui/button"

const New = () => {

  const [contacts, setContacts] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/lead');
        const data = await response.json();
        setContacts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  const getStatusColor = (status) => {
    const colors = {
      'Pending': 'bg-blue-200 font-bold text-black-800',
      'Followup': 'bg-yellow-200 text-yellow-800',
      'Confirm': 'bg-yellow-200 text-blue-800',
      'Important': 'bg-green-200 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  function changeSearch() {
    let s = document.querySelector("input");
    let val = s.value;
    setSearch(val);
  }



  return (
    <>
      <div className=' flex-col '>
        <Navbar />
        <div className=' flex'>
          <Sidebar />
          <div className="min-h-screen  m-2 w-[100%] ">
            <div className="hometop  h-[10%] flex items-center bg-gray-300 justify-between">
              <div className="heading text-3xl font-bold text-blue-700 ml-4">New</div>
              <div className=" ">


                <input onChange={() => {
                  changeSearch();
                }}
                  type="text" id='search' placeholder='Search here by Name' className="border searchinput border-slate-200 rounded-full m-2 p-2 w-96" />
                <label htmlFor="search" className=" py-2 px-4 bg-blue-700 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200"><button>Search</button></label>



                <button className='py-2 px-4 bg-blue-700 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200' ><Link to="/addnew">Add</Link></button>
                <button className='py-2 px-4 bg-blue-700 rounded-lg hover:bg-blue-500 mx-2 text-white shadow-md mr-2 shadow-blue-200' >Delete</button>
                {/* <div >
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" size="sm" className="w-24">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the item from the database.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={handleDelete}
                          disabled={isLoading}
                          className="bg-red-600 hover:bg-red-700"
                        >
                          {isLoading ? "Deleting..." : "Delete"}
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div> */}
              </div>
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
                        {contact.businessType}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {contact.offerBudget}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500">
                        {contact.mobile}
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

export default New;