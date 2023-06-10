import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Update() {
  // const [data, setData] = useState([]);
  const { id } = useParams();

  const [values, setValue] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/users" + id)
      .then((res) => setValue(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/users", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="container-fluid updateBox bg-light">
        <div className="col-9 mx-auto shadow bg-white">
          <h1>Update a User</h1>
          <form action="" className="mx-5" onSubmit={handleUpdate}>
            <div className="my-3">
              <label htmlFor="">Name : </label>
              <input
                type="text"
                placeholder="Enter Name"
                value={values.name}
                onChange={(e) => {
                  setValue({ ...values, name: e.target.value });
                }}
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Email : </label>
              <input
                type="email"
                placeholder="Enter Email"
                value={values.email}
                onChange={(e) => setValue({ ...values, email: e.target.value })}
              />
            </div>
            <div className="my-3">
              <label htmlFor="">Phone : </label>
              <input
                type="number"
                placeholder="Enter Phone Number"
                value={values.phone}
                onChange={(e) => setValue({ ...values, phone: e.target.value })}
              />
            </div>
            <div className="my-3">
              <label htmlFor="">City : </label>
              <input
                type="text"
                placeholder="Enter Name"
                value={values.city}
                onChange={(e) => {
                  setValue({ ...values, name: e.target.value });
                }}
              />
            </div>
            <div className="py-3">
              <button className="btn btn-success">Update</button>
              <Link to="/" className="btn btn-dark text-light mx-3">
                Back
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;