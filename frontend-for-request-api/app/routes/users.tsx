import { PencilIcon, TrashIcon, PlusIcon } from 'lucide-react'; // Optional: For icons
import type { Route } from '../+types/root';
import { Form } from 'react-router';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "User Management | Practice" },
    { name: "description", content: "User Form and List for Express API practice" },
  ];
}

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();
  const userDetail = Object.entries(formData.entries());

  try {
    const response = await fetch('http://localhost:3000/api/v1/user', {
      method: 'post',
      headers: {
        'content-type': "application/json",
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

export default function Users() {
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
          <Form method='post' className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">

            {/* Name Input */}
            <div className="flex flex-col gap-y-2">
              <label htmlFor='name' className="text-xs font-medium text-slate-400 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
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
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Email</th>
                  <th className="px-6 py-4">Phone</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm text-slate-300">
                {/* Dummy Row 1 */}
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="px-6 py-4 font-medium text-white">Haseeb Ur Rehman</td>
                  <td className="px-6 py-4 text-slate-400">haseeb@example.com</td>
                  <td className="px-6 py-4 text-slate-400">+92 300 1234567</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-violet-400 hover:bg-slate-800 rounded-lg transition" title="Edit">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition" title="Delete">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
                {/* Dummy Row 2 */}
                <tr className="hover:bg-slate-800/30 transition">
                  <td className="px-6 py-4 font-medium text-white">Ali Ahmed</td>
                  <td className="px-6 py-4 text-slate-400">ali@example.com</td>
                  <td className="px-6 py-4 text-slate-400">+92 321 7654321</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-violet-400 hover:bg-slate-800 rounded-lg transition" title="Edit">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition" title="Delete">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}