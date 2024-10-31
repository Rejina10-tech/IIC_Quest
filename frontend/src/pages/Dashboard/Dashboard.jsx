import React from 'react'

export default function Dashboard() {
    
    const handleLogout = () => {
        window.location.href = '/login'; // Redirect to login page
      };
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard </title>
  {/* Include Tailwind CSS */}
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
  <div className="flex h-screen">
    {/* Sidebar */}
    <div className="w-64 bg-gray-800 text-gray-100">
      <div className="p-4">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <ul className="mt-4">
          <li className="py-2">
            <a href="#" className="block hover:bg-gray-700 px-4">Home</a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:bg-gray-700 px-4">Analytics</a>
          </li>
          <li className="py-2">
            <a href="#" className="block hover:bg-gray-700 px-4">Settings</a>
          </li>
          <li className="py-2">
                <a href="#" onClick={handleLogout} className="block hover:bg-gray-700 px-4">
                  Logout
                </a>
              </li>
        </ul>
      </div>
    </div>
    {/* Content Area */}
    <div className="flex-1 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Card 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Card 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Card 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}


