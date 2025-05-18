import React from "react";
import { useState } from "react";

function Contact() {
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [massage, setmassage] = useState("")
  return (
    <div className="flex justify-center my-25">
      <form onSubmit={(e)=> e.preventDefault }>
        <h1 className="flex justify-center text-4xl my-6">Contact</h1>
        <label className="block  mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          placeholder="name"
          name="name"
          autoComplete="off"
          required
          onChange={(e) => setname(e.target.value)}
          className="border-gray-400 border-2 rounded-md text-white px-2 py-1  "
        ></input>
        <label className="block mt-2 mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          placeholder="email"
          name="email"
          autoComplete="off"
          onChange={(e) => setemail(e.target.value)}
          className="border-gray-400 border-2 rounded-md text-white px-2 py-1"
        ></input>
        <label className="block mt-2 mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          placeholder="message"
          onChange={(e) => setmassage(e.target.value)}
          className="border-gray-400 border-2 rounded-md text-white px-2 py-1 block w-50"
        ></textarea>
        <button className="bg-blue-400 w-50 border-white border-2 text-black px-4 py-1 my-4  rounded-3xl ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
