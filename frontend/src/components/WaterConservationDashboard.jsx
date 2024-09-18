import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Droplet } from 'lucide-react';

// Custom Card Component
const Card = ({ children, className }) => {
  return (
    <div className={`bg-white shadow rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

const CardHeader = ({ children }) => {
  return (
    <div className="mb-4">
      {children}
    </div>
  );
};

const CardContent = ({ children, className }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

const WaterConservationDashboard = () => {
  const username = "$username"; // Replace with MongoDB fetch logic
  const waterSaved = 1000; // liters

  const profileData = [
    { label: "Daily Goal", value: "100 L" },
    { label: "Weekly Savings", value: "650 L" },
    { label: "Monthly Savings", value: "2800 L" },
    { label: "Carbon Offset", value: "50 kg" },
  ];

  const waterUsageData = [
    { day: 1, usage: 90 },
    { day: 2, usage: 85 },
    { day: 3, usage: 110 },
    { day: 4, usage: 75 },
    { day: 5, usage: 95 },
    { day: 6, usage: 80 },
    { day: 7, usage: 70 },
  ];

  const conservationMethodsData = [
    { method: "Irrigation", efficiency: 80, reuse: 60 },
    { method: "Household", efficiency: 70, reuse: 50 },
    { method: "Rainwater", efficiency: 90, reuse: 80 },
    { method: "Greywater", efficiency: 60, reuse: 90 },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto bg-blue-50">
      <div className="flex items-center mb-4">
        <Droplet className="w-12 h-12 text-blue-500 mr-4" />
        <div>
          <h2 className="text-2xl font-bold">Hello, <span className="text-blue-500">{username}</span> 👋😊</h2>
          <h3 className="text-lg italic">How're you feeling today?</h3>
          <p className="text-sm text-green-600">You are saving {waterSaved} liters of water! 💧</p>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <h3 className="text-xl font-semibold">Your Water Conservation Profile:</h3>
        </CardHeader>
        <CardContent className="flex justify-between">
          {profileData.map((item, index) => (
            <div key={index} className="text-center">
              <p className="font-bold">{item.label}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <h3 className="text-xl font-semibold">Water Usage Trends:</h3>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={waterUsageData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Line type="monotone" dataKey="usage" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-xl font-semibold">Conservation Techniques:</h3>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={conservationMethodsData}>
              <XAxis dataKey="method" />
              <YAxis />
              <Bar dataKey="efficiency" fill="#3b82f6" name="Efficiency" />
              <Bar dataKey="reuse" fill="#34d399" name="Reuse" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterConservationDashboard;
