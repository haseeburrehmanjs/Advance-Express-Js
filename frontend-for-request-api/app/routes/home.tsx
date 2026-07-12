// // import { Form, redirect, useActionData, useNavigation } from "react-router"; // Form ko import karein
// // import type { Route } from "./+types/home";
// // import { useEffect, useRef } from "react";

// import { Form, useActionData, useNavigation } from "react-router";
// import type { Route } from "./+types/home";
// import { useEffect, useRef } from "react";

// // export function meta({ }: Route.MetaArgs) {
// //   return [
// //     { title: "Supplier Management | Practice" },
// //     { name: "description", content: "Supplier Form and List for Express API practice" },
// //   ];
// // }

// // export const loader = async () => {
// //   const supplierList = await fetch('http://localhost:3000/api/v1/suppliers')
// //   const response = await supplierList.json()

// //   return {
// //     suppliers: response
// //   }
// // }

// // export const action = async ({ request }: Route.ActionArgs) => {
// //   const formData = await request.formData();
// //   const supplierData = Object.fromEntries(formData.entries());

// //   try {
// //     const response = await fetch('http://localhost:3000/api/v1/supplier', {
// //       method: 'post',
// //       headers: {
// //         'Content-Type': "application/json"
// //       },
// //       body: JSON.stringify(supplierData)
// //     });

// //     if (response.ok) {
// //       return { success: true };
// //     }
// //   } catch (error) {
// //     console.log('server error', error);
// //   }

// //   return { success: false };
// // }

// // export default function Home({ loaderData }: Route.ComponentProps) {
// //   const suppliersList = loaderData.suppliers
// //   const formRef = useRef<HTMLFormElement>(null);
// //   const navigation = useNavigation();
// //   const actionData = useActionData<{ success?: boolean }>();

// //   useEffect(() => {
// //     if (navigation.state === 'idle' && actionData?.success) {
// //       formRef.current?.reset();
// //       alert('New Supplier Created successfully');
// //     }
// //   }, [navigation.state, actionData])

// //   return (
// //     <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
// //       <div className="max-w-4xl mx-auto space-y-10">

// //         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
// //           <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Supplier</h2>

// //           <Form ref={formRef} method="post" className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <div>
// //               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
// //               <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
// //             </div>

// //             <div>
// //               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
// //               <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
// //             </div>

// //             <div>
// //               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
// //               <input type="tel" name="phone" id="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
// //             </div>

// //             <div>
// //               <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
// //               <input type="text" name="age" id="age" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
// //             </div>

// //             <div className="md:col-span-2 flex justify-end">
// //               <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm">
// //                 Submit Supplier
// //               </button>
// //             </div>
// //           </Form>
// //         </div>

// //         <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
// //           <div className="p-6 border-b border-gray-100">
// //             <h2 className="text-2xl font-bold text-gray-800">Suppliers List</h2>
// //           </div>

// //           <div className="overflow-x-auto">
// //             <table className="w-full text-left border-collapse">
// //               <thead>
// //                 <tr className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold tracking-wider border-b border-gray-200">
// //                   <th className="px-6 py-3">Name</th>
// //                   <th className="px-6 py-3">Email</th>
// //                   <th className="px-6 py-3">Phone</th>
// //                   <th className="px-6 py-3">Age</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="divide-y divide-gray-100 text-gray-600 text-sm">
// //                 {suppliersList?.map((supplier, index) => (
// //                   <tr key={index} className="hover:bg-gray-50 transition">
// //                     <td className="px-6 py-4 font-medium text-gray-900">{supplier.name}</td>
// //                     <td className="px-6 py-4">{supplier.email}</td>
// //                     <td className="px-6 py-4">{supplier.phone}</td>
// //                     <td className="px-6 py-4">{supplier.age}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// export function meta({ }: Route.MetaArgs) {
//   return [
//     { title: "Supplier Management | Practice" },
//     { name: "description", content: "Supplier Form and List for Express API practice" },
//   ];
// }

// // fetch supplier list from my own server
// export const loader = async () => {
//   try {
//     const response = await fetch('http://localhost:3001/api/v1/supplier')
//     const supplierList = await response.json();
//     return {
//       suppliers: supplierList,
//       error: null
//     }
//   } catch (error) {
//     console.log('server error', error);
//     return {
//       supplier: [],
//       error: 'Failed to load supplier. please try again later'
//     }
//   }
// }

// // create supplier action
// export const action = async ({ request }: Route.ActionArgs) => {
//   const formData = await request.formData();
//   const supplierData = Object.fromEntries(formData.entries());

//   try {
//     const response = fetch('http://localhost:3001/api/v1/supplier', {
//       method: 'post',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(supplierData)
//     })
//     return {
//       success: true
//     }
//   } catch (error) {
//     console.log('server error');
//   }

// }

// export default function Home({ loaderData }: Route.ComponentProps) {
//   const suppliersList = loaderData.suppliers 
//   const formRef = useRef<HTMLFormElement>(null)
//   const navigation = useNavigation();
//   const actionData = useActionData<{ success?: boolean }>();

//   useEffect(() => {
//     if (navigation.state === 'idle' && actionData) {
//       formRef.current?.reset();
//       alert('Supplier Created Successfully')
//     }
//   }, [navigation.state, actionData])

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-4xl mx-auto space-y-10">

//         <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Supplier</h2>

//           <Form ref={formRef} method="post" className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//               <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
//             </div>

//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//               <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
//             </div>

//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
//               <input type="tel" name="phone" id="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
//             </div>

//             <div>
//               <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
//               <input type="text" name="age" id="age" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
//             </div>

//             <div className="md:col-span-2 flex justify-end">
//               <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm">
//                 Submit Supplier
//               </button>
//             </div>
//           </Form>
//         </div>

//         <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
//           <div className="p-6 border-b border-gray-100">
//             <h2 className="text-2xl font-bold text-gray-800">Suppliers List</h2>
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse">
//               <thead>
//                 <tr className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold tracking-wider border-b border-gray-200">
//                   <th className="px-6 py-3">Name</th>
//                   <th className="px-6 py-3">Email</th>
//                   <th className="px-6 py-3">Phone</th>
//                   <th className="px-6 py-3">Age</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-100 text-gray-600 text-sm">
//                 {suppliersList?.map((supplier, index) => (
//                   <tr key={index} className="hover:bg-gray-50 transition">
//                     <td className="px-6 py-4 font-medium text-gray-900">{supplier?.name}</td>
//                     <td className="px-6 py-4">{supplier?.email}</td>
//                     <td className="px-6 py-4">{supplier?.phone}</td>
//                     <td className="px-6 py-4">{supplier?.age}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }



import { PencilIcon, TrashIcon, PlusIcon } from 'lucide-react'; // Optional: For icons
import { Form, useActionData, useFetcher, useNavigation } from 'react-router';
import type { Route } from './+types/users';
import { useEffect, useRef } from 'react';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "User Management | Practice" },
    { name: "description", content: "User Form and List for Express API practice" },
  ];
}

export const loader = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/user')
    const userList = await response.json()
    return {
      users: userList.data
    }
  } catch (error) {
    console.log('server error', error);
  }
}

export const action = async ({ request }: Route.ActionArgs) => {
  // Agar fetcher ke zariye DELETE method aaya hai
  if (request.method === "DELETE") {
    const formData = await request.formData();
    const userId = formData.get("userId");

    try {
      await fetch(`http://localhost:3000/api/v1/user/${userId}`, {
        method: 'DELETE',
      });
      return { success: true };
    } catch (error) {
      console.log('Delete error', error);
      return { success: false };
    }
  }

  const formData = await request.formData();
  const userDetail = Object.fromEntries(formData.entries());
  try {
    const response = await fetch('http://localhost:3000/api/v1/user', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userDetail)
    })
    return {
      success: true
    }

  } catch (error) {
    console.log('server error', error);
  }
}

export default function Users({ loaderData }: Route.ComponentProps) {
  const { users } = loaderData;
  const formRef = useRef<HTMLFormElement>(null);
  const fetcher = useFetcher();
  const navigation = useNavigation();

  const actionData = useActionData();

  useEffect(() => {
    if (navigation.state === 'idle' && actionData) {
      formRef.current?.reset()
      alert('user created successfully')
    }
  }, [navigation.state, actionData])

  const handleUserDelete = (userId: string) => {
    if (!userId) {
      alert("Invalid user id")
    }
    try {
      alert('are you sure you want to delete')
      fetcher.submit(
        { userId },
        { method: 'DELETE' })
    } catch (error) {
      console.log('server erro');

    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header Section */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">User Management</h1>
          <p className="text-sm text-slate-400 mt-1">Manage your application users, add new records, or modify existing ones.</p>
        </div>

        {/* Form Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-slate-200">Add New User</h2>
          <Form ref={formRef} method='post' className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">

            {/* Name Input */}
            <div className="flex flex-col gap-y-2">
              <label htmlFor='name' className="text-xs font-medium text-slate-400 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                required
                id='name'
                name='name'
                placeholder="John Doe"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-y-2">
              <label htmlFor='email' className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email Address</label>
              <input
                required
                id='email'
                name='email'
                type="email"
                placeholder="john@example.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              />
            </div>

            {/* Phone Input */}
            <div className="flex flex-col gap-y-2">
              <label htmlFor='phone' className="text-xs font-medium text-slate-400 uppercase tracking-wider">Phone Number</label>
              <input
                required
                id='phone'
                name='phone'
                type="text"
                placeholder="+92 300 1234567"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-slate-100 placeholder-slate-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-3 flex justify-end mt-2">
              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-500 text-white font-medium px-5 py-2.5 rounded-lg transition flex items-center gap-2 shadow-lg shadow-violet-600/20 active:scale-95"
              >
                <PlusIcon className="w-4 h-4" />
                Add User
              </button>
            </div>
          </Form>
        </div>

        {/* Table Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-800">
            <h2 className="text-xl font-semibold text-slate-200">All Users</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 text-xs font-semibold uppercase tracking-wider">
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Phone</th>
                  <th className="px-6 py-4">Created On</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm text-slate-300">
                {users.length === 0 ? (
                  <td colSpan={5} className='p-10 text-center'>No User Data Exists.</td>
                ) : (
                  <>
                    {users.map((item, index) => (
                      <tr key={index} className="hover:bg-slate-800/30 transition">
                        <td className="px-6 py-4 font-medium text-white">{index + 1}</td>
                        <td className="px-6 py-4 font-medium text-white">{item.name}</td>
                        <td className="px-6 py-4 text-slate-400">{item.email}</td>
                        <td className="px-6 py-4 text-slate-400">{item.phone}</td>
                        <td className="px-6 py-4 text-slate-400">{item.created_on}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button onClick={() => {

                            }} className="p-2 text-slate-400 hover:text-violet-400 hover:bg-slate-800 rounded-lg transition" title="Edit">
                              <PencilIcon className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleUserDelete(item._id)}
                              className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition" title="Delete">
                              <TrashIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}