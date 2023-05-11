// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ContactCard from "./ContactCard";

// const Mentor = () => {
//   const [sidebarData, setSidebarData] = useState({});
//   const [mainBodyData, setMainBodyData] = useState([]);

  
//   useEffect(() => {
//     axios
//       .get("http://backend.com/sidebarData")
//       .then((response) => {
//         setSidebarData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     axios
//       .get("http://backend.com/mainBodyData")
//       .then((response) => {
//         setMainBodyData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <div className="flex flex-col w-64 bg-white border-r-2 border-gray-200">
//         <div className="p-5">
//           <h3 className="font-semibold text-gray-600">Mentor</h3>
//         </div>
//         <div className="p-5 border-t-2 border-gray-200">
//           <ContactCard data={sidebarData} />
//         </div>
//       </div>
//       <div className="flex-1 flex flex-col">
//         <div className="p-5">
//           <h3 className="font-semibold text-gray-600">Student</h3>
//         </div>
//         <div className="flex-1 p-5 overflow-y-auto">
//           {mainBodyData.map((data) => (
//             <ContactCard key={data.id} data={data} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mentor;


// // import React, { useState, useEffect } from "react";
// // import Sidebar from "./Sidebar";
// // import ContactCard2 from "./ContactCardd";
// // import StudentCard from "./StudentCard";
// // import axios from "axios";

// // function Mentor() {
// //   const [mentorData, setMentorData] = useState({});
// //   const [studentData, setStudentData] = useState([]);

// //   useEffect(() => {
// //     // Fetch mentor data from backend
// //     axios.get("<MENTOR_API_URL>").then((response) => {
// //       setMentorData(response.data);
// //     });

// //     // Fetch student data from backend
// //     axios.get("<STUDENT_API_URL>").then((response) => {
// //       setStudentData(response.data);
// //     });
// //   }, []);

// //   return (
// //     <div className="flex flex-row h-screen">
// //       {/* Sidebar */}
// //       <Sidebar>
// //         {/* Mentor Contact Card */}
// //         <ContactCard2 data={mentorData} />
// //       </Sidebar>

// //       {/* Student Cards */}
// //       <div className="flex flex-col w-full p-10">
// //         <h1 className="text-3xl font-bold mb-10">Student Records</h1>
// //         <div className="grid grid-cols-3 gap-8">
// //           {studentData.map((student) => (
// //             <StudentCard key={student.id} data={student} />
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Mentor;






import React from "react";

const Mentor = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="bg-blue-600 w-64 px-4 pt-4 pb-8">
        {/* Sidebar content */}
        <h2 className="text-white text-xl font-bold mb-4">Contact Info</h2>
        <div className="flex flex-col space-y-4">
          {/* Contact card */}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h3 className="text-lg font-bold mb-2">Mentor Name</h3>
            <p className="text-gray-600">Email: mentor@example.com</p>
            <p className="text-gray-600">Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-10">
        {/* Card outside sidebar */}
        <div className="bg-white rounded-lg p-4 shadow-md">
          <h3 className="text-lg font-bold mb-2">Student Name</h3>
          <p className="text-gray-600">Email: student@example.com</p>
          <p className="text-gray-600">Phone: 987-654-3210</p>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
