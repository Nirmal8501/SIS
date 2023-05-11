// // import React from 'react';

// // function ContactCard(props) {
// //   const { name, email, phone } = props;
  
// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-4">
// //       <h2 className="text-xl font-medium mb-2">{name}</h2>
// //       <p className="text-gray-700 mb-2">{email}</p>
// //       <p className="text-gray-700">{phone}</p>
// //     </div>
// //   );
// // }

// // export default ContactCard;

// import React from 'react';

const ContactCard = ({contactInfo}) => {
  // const contactInfo = 
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  //   phone: '555-555-5555',
  //   address: '123 Main St, Anytown, USA',
  // };

  return (
    <div className="bg-blue-500 p-4 text-white">
      <h2 className="text-lg font-bold">{contactInfo.name}</h2>
      <p className="text-gray-700">{contactInfo.email}</p>
      <p className="text-gray-700">{contactInfo.phone}</p>
      <p className="text-gray-700">{contactInfo.address}</p>
    </div>
  );
};

export default ContactCard;


// import React from "react";



// const ContactCard = ({ data }) => {
//   return (
//     <div className="bg-blue-500 p-4 text-white">
//       <h2 className="text-lg font-bold mb-2">{data.name}</h2>
//       <p className="text-gray-200 mb-2">{data.email}</p>
//       <p className="text-gray-200">{data.phone}</p>
//     </div>
//   );
// };

// export default ContactCard;
