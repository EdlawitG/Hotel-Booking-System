const contactData = [
  {
    fullName: "Aylech",
    email: "ayelech@gmail.com",
    contactNumber: "+2519401210239",
    message: "Your Hotel is good thank you for your service",
  },
  {
    fullName: "Aylech",
    email: "ayelech@gmail.com",
    contactNumber: "+2519401210239",
    message: "Your Hotel is good thank you for your service",
  },
  {
    fullName: "Aylech",
    email: "ayelech@gmail.com",
    contactNumber: "+2519401210239",
    message: "Your Hotel is good thank you for your service",
  },
  {
    fullName: "Aylech",
    email: "ayelech@gmail.com",
    contactNumber: "+2519401210239",
    message: "Your Hotel is good thank you for your service",
  },
  {
    fullName: "Aylech",
    email: "ayelech@gmail.com",
    contactNumber: "+2519401210239",
    message: "Your Hotel is good thank you for your service",
  },
];

const ContactUsInfo = () => {
  return (
    <main className="flex-1 p-8">
      <h1 className="text-2xl font-semibold mb-6">Contact Us Info</h1>
      <table className="min-w-full bg-white border-gray-300 border-separate" style={{ borderSpacing: "0 10px" }}>
      <thead>
          <tr className="bg-[#AE885B] text-white">
            <th className="py-2 px-4">Full Name</th>
            <th className="py-2 px-4">Email</th>
            <th className="py-2 px-4">Contact Number</th>
            <th className="py-2 px-4">Message</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact, index) => (
            <tr key={index} className="bg-gray-200">
              <td className="py-2 px-4 border">{contact.fullName}</td>
              <td className="py-2 px-4 border">{contact.email}</td>
              <td className="py-2 px-4 border">{contact.contactNumber}</td>
              <td className="py-2 px-4 border">{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ContactUsInfo;
