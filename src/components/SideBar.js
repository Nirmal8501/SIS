import React from 'react';
import ContactCard from './ContactCard';

const Sidebar = ({ mentorData, studentData }) => {
  return (

    
    <div className="flex h-screen bg-gray-200">
      <div className="flex flex-col justify-between w-1/5 py-8 bg-gray-700">
        <div>
          <ContactCard data={mentorData} bgColor="bg-blue-500" />
        </div>
      </div>
      <div className="w-4/5 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {studentData.map((data) => (
            <ContactCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
