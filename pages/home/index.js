import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = ({ userData }) => {
  // console.log(userData)
  const [data, setData] = useState({ name: "", email: "", product: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/myapi",
        data
      );
      console.log(response?.data?.message);

      const newData = await axios.get("http://localhost:3000/api/myapi");
      setData({ ...data, name: "", email: "", product: "" }); // clear input fields
      userData = newData?.data;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="text-center w-full">
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Products</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, i) => {
            return (
              <tr key={i}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.product}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="product"
            name="product"
            value={data.product}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const data = await axios.get("http://localhost:3000/api/myapi");

  return {
    props: {
      userData: data?.data,
    },
  };
};
export default Home; 
