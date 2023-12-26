import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Popup from "./contact/Popup";

const ContactEmail = () => {
  const [popUp, setPopUp] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i0hkg5u",
        "template_sly16dq",
        form.current,
        "orNB5epRXxGEEY1XI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    openPop();
    e.target.reset();
  };

  function openPop() {
    setPopUp(true);
  }

  return (
    <>
      <div className="hero min-h-screen bg-[#F2F4F8]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="card-body bg-white w-[480px] rounded-sm shadow-md"
          >
            <div className="form-control">
              <label className="label" id="label-nama">
                <span className="label-nama">Nama</span>
              </label>
              <input
                type="text"
                placeholder="Nama"
                name="user_name"
                id="label-nama"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                id="label-email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Pesan</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered"
                placeholder="Pesan"
                required
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-color-primary90" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Popup trigger={popUp}>
        <h2>Success!</h2>
        <br></br>
        <h3>Form submitted</h3>
      </Popup>
    </>
  );
};

export default ContactEmail;
