import React,{useState} from 'react'
import Navbar from '../../component/navbar/navbar'
import { useNavigate } from 'react-router-dom';

const AddNew = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    clientType: '',
    phone: '',
    address: '',
    offerBudget: '',
    leadStatus: '',
    businessType: '',
    followUpDate: '',
    confirmDate: '',
    referredBy: '',
    important: false,
  });

  const handleReset = () => {
    setFormData({
      name: '',
      clientType: '',
      phone: '',
      address: '',
      offerBudget: '',
      leadStatus: '',
      businessType: '',
      followUpDate: '',
      confirmDate: '',
      referredBy: '',
      important: false,
    });
  };

  function handelChange(e){
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/lead/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Submission failed!');
      navigate('/home');

    } catch (error) {
      alert('Submission failed!');
      console.error('Error:', error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-8 bg-white rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-6">Add New Lead</h2>

        <form className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md" name='name' onChange={handelChange} value={formData.name} required />
              </div>

            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Client Type
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md" name='clientType' onChange={handelChange} value={formData.clientType}/>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <div className="flex">
                <select className="px-2 border border-gray-300 rounded-l-md bg-gray-50">
                  <option>+91</option>
                </select>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-r-md" name='phone' onChange={handelChange} required value={formData.phone} />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address
              </label>
              <input
                type="text"
                placeholder="Address Line 1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2" name='address' onChange={handelChange} value={formData.address} required />

            
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Offer Budget
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md" name='offerBudget' onChange={handelChange} value={formData.offerBudget} />
              </div>
            </div>

          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lead Status
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md" name='leadStatus' onChange={handelChange} value={formData.leadStatus} required>
                <option value={"NEW"}>New</option>
                <option value={"PENDING"} >Pending</option>
                <option value={"FOLLOWUP"}>FollowUp</option>
                <option value={"CONFORM"}>Conform</option>
                <option value={"REJECTED"}>Rejected</option>
                

              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" required >
                Business Type
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md" name='businessType' onChange={handelChange} value={formData.businessType} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                FollowUp Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md" name='followUpDate' onChange={handelChange} value={formData.followUpDate} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Date
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-md" name='confirmDate' onChange={handelChange} value={formData.confirmDate} />
            </div>

           

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reffered By
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md" name='referredBy' onChange={handelChange} value={formData.referredBy} />
            </div>
            
          </div>
          <div className="important">

            <input type="checkbox" name='important'  className='h-4 w-4 ml-4' value={formData.important} onChange={handelChange} />
            <label htmlFor="important"><span className='text-red-600 ml-1'>! Click if Important</span></label>
          </div>

          <div className="col-span-2 pl-60 ml-10 flex gap-4">
            <button
              type="submit" onClick={handleSubmit}
               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Submit
            </button>
            <button onClick={handleReset}
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddNew



















// import React, { useState } from 'react';
// import Navbar from '../../component/navbar/navbar';

// const AddNew = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     address: '',
//     businessType: '',
//     offerBudget: '',
//     clientType: '',
//     referredBy: '',
//     followUpDate: '',
//     confirmDate: '',
//     important: false,
//     status: 'PENDING',
//   });

//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/clients', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Something went wrong');
//       }

//       setSuccess(data.message);
//       setError('');
//       setFormData({
//         name: '',
//         mobile: '',
//         address: '',
//         businessType: '',
//         offerBudget: '',
//         clientType: '',
//         referredBy: '',
//         followUpDate: '',
//         confirmDate: '',
//         important: false,
//         status: 'PENDING',
//       });
//     } catch (err) {
//       setError(err.message);
//       setSuccess('');
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="max-w-4xl mx-auto p-6 mt-8 bg-white rounded-lg shadow">
//         <h2 className="text-xl font-semibold mb-6">Add New Lead</h2>

//         {error && <p className="text-red-500">{error}</p>}
//         {success && <p className="text-green-500">{success}</p>}

//         <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Client Type
//               </label>
//               <input
//                 type="text"
//                 name="clientType"
//                 value={formData.clientType}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Phone
//               </label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Offer Budget
//               </label>
//               <input
//                 type="number"
//                 name="offerBudget"
//                 value={formData.offerBudget}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>
//           </div>

//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Business Type
//               </label>
//               <input
//                 type="text"
//                 name="businessType"
//                 value={formData.businessType}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                 required
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 FollowUp Date
//               </label>
//               <input
//                 type="date"
//                 name="followUpDate"
//                 value={formData.followUpDate}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Confirm Date
//               </label>
//               <input
//                 type="date"
//                 name="confirmDate"
//                 value={formData.confirmDate}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Referred By
//               </label>
//               <input
//                 type="text"
//                 name="referredBy"
//                 value={formData.referredBy}
//                 onChange={handleChange}
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1">
//                 Important
//               </label>
//               <input
//                 type="checkbox"
//                 name="important"
//                 checked={formData.important}
//                 onChange={handleChange}
//                 className="h-4 w-4"
//               />
//             </div>
//           </div>

//           <div className="col-span-2 flex gap-4">
//             <button
//               type="submit"
//               className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//             >
//               Submit
//             </button>
//             <button
//               type="button"
//               onClick={() => setFormData({
//                 name: '',
//                 mobile: '',
//                 address: '',
//                 businessType: '',
//                 offerBudget: '',
//                 clientType: '',
//                 referredBy: '',
//                 followUpDate: '',
//                 confirmDate: '',
//                 important: false,
//                 status: 'PENDING',
//               })}
//               className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
//             >
//               Reset
//             </button>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default AddNew;
