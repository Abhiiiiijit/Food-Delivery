import React, { useState } from "react";

export default function Login() {
  const [credential, setcredential] = useState({
    name: "",
    email: "",
    password: "",
    geoLocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.geoLocation,
      }))
    const response = fetch("http://localhost:4000/api/creatuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        password: credential.password,
        location: credential.geoLocation,
      }),
      //   Parameter should same to Client
    });
    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter Valid Credentials");
    }
  };
  const onChange = async (event) => {
    setcredential({ ...credential, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div>Login</div>
    </>
  );
}
