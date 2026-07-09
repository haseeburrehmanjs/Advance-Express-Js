// import { Form, redirect, useActionData, useNavigation } from "react-router"; // Form ko import karein
// import type { Route } from "./+types/home";
// import { useEffect, useRef } from "react";

import { Form, useActionData, useNavigation } from "react-router";
import type { Route } from "./+types/home";
import { useEffect, useRef } from "react";

// export function meta({ }: Route.MetaArgs) {
//   return [
//     { title: "Supplier Management | Practice" },
//     { name: "description", content: "Supplier Form and List for Express API practice" },
//   ];
// }

// export const loader = async () => {
//   const supplierList = await fetch('http://localhost:3000/api/v1/suppliers')
//   const response = await supplierList.json()

//   return {
//     suppliers: response
//   }
// }

// export const action = async ({ request }: Route.ActionArgs) => {
//   const formData = await request.formData();
//   const supplierData = Object.fromEntries(formData.entries());

//   try {
//     const response = await fetch('http://localhost:3000/api/v1/supplier', {
//       method: 'post',
//       headers: {
//         'Content-Type': "application/json"
//       },
//       body: JSON.stringify(supplierData)
//     });

//     if (response.ok) {
//       return { success: true };
//     }
//   } catch (error) {
//     console.log('server error', error);
//   }

//   return { success: false };
// }

// export default function Home({ loaderData }: Route.ComponentProps) {
//   const suppliersList = loaderData.suppliers
//   const formRef = useRef<HTMLFormElement>(null);
//   const navigation = useNavigation();
//   const actionData = useActionData<{ success?: boolean }>();

//   useEffect(() => {
//     if (navigation.state === 'idle' && actionData?.success) {
//       formRef.current?.reset();
//       alert('New Supplier Created successfully');
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
//                     <td className="px-6 py-4 font-medium text-gray-900">{supplier.name}</td>
//                     <td className="px-6 py-4">{supplier.email}</td>
//                     <td className="px-6 py-4">{supplier.phone}</td>
//                     <td className="px-6 py-4">{supplier.age}</td>
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

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Supplier Management | Practice" },
    { name: "description", content: "Supplier Form and List for Express API practice" },
  ];
}

// fetch supplier list from my own server
export const loader = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/suppliers')
    const supplierList = await response.json();
    return {
      suppliers: supplierList,
      error: null
    }
  } catch (error) {
    console.log('server error', error);
    return {
      supplier: [],
      error: 'Failed to load supplier. please try again later'
    }
  }
}

// create supplier action
export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const supplierData = Object.fromEntries(formData.entries());

  try {
    const response = fetch('http://localhost:3000/api/v1/supplier', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(supplierData)
    })
    return {
      success: true
    }
  } catch (error) {
    console.log('server error');
  }

}

export default function Home({ loaderData }: Route.ComponentProps) {
  const suppliersList = loaderData.suppliers
  const formRef = useRef<HTMLFormElement>(null)
  const navigation = useNavigation();
  const actionData = useActionData<{ success?: boolean }>();

  useEffect(() => {
    if (navigation.state === 'idle' && actionData) {
      formRef.current?.reset();
      alert('Supplier Created Successfully')
    }
  }, [navigation.state, actionData])

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-10">

        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Supplier</h2>

          <Form ref={formRef} method="post" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input type="tel" name="phone" id="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input type="text" name="age" id="age" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm">
                Submit Supplier
              </button>
            </div>
          </Form>
        </div>

        <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800">Suppliers List</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold tracking-wider border-b border-gray-200">
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Phone</th>
                  <th className="px-6 py-3">Age</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600 text-sm">
                {suppliersList?.map((supplier, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-gray-900">{supplier.name}</td>
                    <td className="px-6 py-4">{supplier.email}</td>
                    <td className="px-6 py-4">{supplier.phone}</td>
                    <td className="px-6 py-4">{supplier.age}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}