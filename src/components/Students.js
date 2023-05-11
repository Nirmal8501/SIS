import React from 'react'

function handleSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
  
    fetch('/submit-form', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  }
  




const Students = () => {
  return (
    // -------------------------------------------------

    <div
    className="min-h-screen flex items-center justify-center"
    style={{ backgroundImage: `url("college.jpg")`, backgroundSize: 'cover' }}
  >
    <div className="max-w-md w-full space-y-8 px-4 py-6 bg-white rounded-lg shadow-lg">
      <div>
        <h2 className="text-3xl font-bold text-center mb-4">Personal Info</h2>
      </div>
      <form onSubmit={handleSubmit} className="bg-gray-100 rounded-lg shadow-lg p-8">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label htmlFor="class" className="block text-gray-700 font-bold mb-2">
            Class
          </label>
          <input
            type="text"
            id="class"
            name="class"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter your Class"
            required
          />
        </div>

        <div>
          <label htmlFor="rollNo" className="block text-gray-700 font-bold mb-2">
            Roll No
          </label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter your roll number"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
            <label className="block mb-2 font-bold text-gray-600">Date of Birth</label>
            <input type="date" id="dob" name="dob" required className="block w-full p-2 border rounded-lg bg-gray-100 outline-none" />
          </div>

        <div>
          <label htmlFor="bloodGroup" className="block text-gray-700 font-bold mb-2">
            Blood Group
          </label>
          <input
            type="text"
            id="bloodGroup"
            name="bloodGroup"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter your blood group"
            required
          />
        </div>
        <div>
          <label htmlFor="mobileNumber" className="block text-gray-700 font-bold mb-2">
            Mobile Number
          </label>
          <div className="relative">
            <select
              name="countryCode"
              className="appearance-none block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="+91">+91</option>
            </select>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              className="w-full p-2 border border-gray-400 rounded-lg mb-4 pl-20"
              placeholder="Enter your mobile number"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <textarea
            type="text"
            id="address"
            name="address"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter your Address"
            required
          />
        </div>

        <div>
        <h2 className="text-3xl font-bold text-center mb-4">Parents Info</h2>
      </div>
      <div>
      <label htmlFor="fathersName" className="block text-gray-700 font-bold mb-2">
            Father's Name
          </label>
          <input
            type="text"
            id="fathersName"
            name="fathersName"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter Name"
            required
          />
        </div>

        <div>
          <label htmlFor="feducation" className="block text-gray-700 font-bold mb-2">
            Education
          </label>
          <input
            type="text"
            id="feducation"
            name="feducation"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Education details"
            required
          />
        </div>

        <div>
          <label htmlFor="foccupation" className="block text-gray-700 font-bold mb-2">
            Occupation
          </label>
          <input
            type="text"
            id="foccupation"
            name="foccupation"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter Occupation"
            required
          />
        </div>

        <div>
          <label htmlFor="faddress" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <textarea
            type="text"
            id="faddress"
            name="faddress"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter Address"
            required
          />
        </div>

        <div>
          <label htmlFor="femail" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="femail"
            name="femail"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter Father's email"
            required
          />
        </div>

        <div>
      <label htmlFor="mothersName" className="block text-gray-700 font-bold mb-2">
            Mother's Name
          </label>
          <input
            type="text"
            id="mothersName"
            name="mothersName"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter Name"
            required
          />
        </div>

        <div>
          <label htmlFor="meducation" className="block text-gray-700 font-bold mb-2">
            Education
          </label>
          <input
            type="text"
            id="meducation"
            name="meducation"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Education details"
            required
          />
        </div>

        <div>
          <label htmlFor="moccupation" className="block text-gray-700 font-bold mb-2">
            Occupation
          </label>
          <input
            type="text"
            id="moccupation"
            name="moccupation"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter Occupation"
            required
          />
        </div>

        <div>
          <label htmlFor="maddress" className="block text-gray-700 font-bold mb-2">
            Address
          </label>
          <textarea
            type="text"
            id="maddress"
            name="maddress"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter Address"
            required
          />
        </div>

        <div>
          <label htmlFor="memail" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="memail"
            name="memail"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter Mother's email"
            required
          />
        </div>

        <div>
          <label htmlFor="fmobileNumber" className="block text-gray-700 font-bold mb-2">
            Father's Mobile Number
          </label>
          <div className="relative">
            <select
              name="countryCode"
              className="appearance-none block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="+91">+91</option>
            </select>
            <input
              type="text"
              id="fmobileNumber"
              name="fmobileNumber"
              className="w-full p-2 border border-gray-400 rounded-lg mb-4 pl-20"
              placeholder="Enter mobile number"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="mmobileNumber" className="block text-gray-700 font-bold mb-2">
            Mother's Mobile Number
          </label>
          <div className="relative">
            <select
              name="countryCode"
              className="appearance-none block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="+91">+91</option>
            </select>
            <input
              type="text"
              id="mmobileNumber"
              name="mmobileNumber"
              className="w-full p-2 border border-gray-400 rounded-lg mb-4 pl-20"
              placeholder="Enter mobile number"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="dos" className="block text-gray-700 font-bold mb-2">
            Details of Siblings
          </label>
          <textarea
            type="text"
            id="dos"
            name="dos"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter Details"
            required
          />
        </div>

        <div>
        <h2 className="text-3xl font-bold text-center mb-4">Educational Information</h2>
        </div>

        <div>
          <label htmlFor="educationalInfo" className="block text-gray-700 font-bold mb-2">
            Educational Info
          </label>
          <textarea
            type="text"
            id="educationalInfo"
            name="educationalInfo"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter Educational Details mentioning SSC, HSC, and all semester CGPA"
            required
          />
        </div>

        <div>
          <label htmlFor="extraCurricular" className="block text-gray-700 font-bold mb-2">
            Extra-Curricular Activities and Achievements
          </label>
          <textarea
            type="text"
            id="educationalInfo"
            name="educationalInfo"
            className="w-full p-2 border border-gray-400 rounded-lg mb-4"
            placeholder="Enter any Achievements of yours along with any Extra-Curricular activities participated in"
            
          />
        </div>


        <div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
    </form>
    </div>
    </div>



  )
}

export default Students