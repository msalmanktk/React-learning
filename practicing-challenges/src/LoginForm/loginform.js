import { useState } from "react";

export default function AppLogin() {
  const [formdata, setFormdata] = useState({ name: "", email: "", phone: "" });
  const [submitdata, setsubmitdata] = useState([]);
  const [show, setShow] = useState(true);
  const style = {
    width: "400px",
    height: "300px",
    border: "1px solid red",
    margin: "100px 400px",
  };
  function handleclick() {
    setShow((show) => !show);
  }

  return (
    <div style={style}>
      {show && <Title />}
      {show && (
        <Form
          setsubmitdata={setsubmitdata}
          formdata={formdata}
          setFormdata={setFormdata}
          handledata={handleclick}
        />
      )}
      <FormShown setshow={setShow} formdata={submitdata} />
    </div>
  );
}

function Title() {
  return (
    <>
      <h1>Create Your Account</h1>
      <p style={{ marginTop: "-20px" }}>Fill in your details to get started.</p>
    </>
  );
}
function Form({ handledata, setsubmitdata, formdata, setFormdata }) {
  const [agree, setagree] = useState(false);

  //   const [formdata, setFormdata] = useState({ name: "", email: "", phone: "" });//up lifted
  //   console.log(formdata);
  function handleSubmit(e) {
    e.preventDefault();
    if (!agree) {
      alert("Hello agree with me or not ?");
      return;
    }
    setsubmitdata((pre) => [...pre, formdata]);
    handledata();
    console.log("Form Submitted Successfully ", formdata);
    setFormdata({ name: "", email: "", phone: "" });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Full Name:</label>
      <div>
        <input
          required
          type="text"
          placeholder="Enter Your full name"
          value={formdata.name}
          onChange={(e) => {
            setFormdata((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
      </div>

      <label>Email Address:</label>
      <div>
        <input
          required
          type="text"
          value={formdata.email}
          placeholder="Enter your email address"
          onChange={(e) => {
            setFormdata((pre) => ({ ...pre, email: e.target.value }));
          }}
        />
      </div>
      <label>Phone Number:</label>
      <div>
        <input
          required
          type="text"
          value={formdata.phone}
          placeholder="Enter phone number"
          onChange={(e) => {
            setFormdata((pre) => {
              return { ...pre, phone: +e.target.value };
            });
          }}
        />
      </div>
      <input
        onChange={(e) => {
          setagree(e.target.checked);
        }}
        type="checkbox"
      />
      <span>I agree to Terms&Conditions and privacy policy</span>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

function FormShown({ setshow, formdata }) {
  return (
    <div>
      {formdata.map((formdata) => (
        <div key={formdata.phone} style={{ marginTop: "50px" }}>
          <p>
            Name is :<span>{formdata.name}</span>
          </p>
          <p>
            Email is :<span>{formdata.email}</span>
          </p>
          <p>
            Phone no :<span>{formdata.phone}</span>
          </p>
          <button onClick={() => setshow(true)}>add more forms</button>
        </div>
      ))}
    </div>
  );
}
