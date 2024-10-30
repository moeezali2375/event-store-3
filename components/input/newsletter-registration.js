import { useRef } from "react";
import classes from "./newsletter-registration.module.css";
import axios from "axios";

function NewsletterRegistration() {
  const email = useRef();

  async function registrationHandler(event) {
    event.preventDefault();
    // fetch user input (state or refs)
    const e = email.current.value;
    // send valid data to API
    const obj = {
      email: e,
    };

    // fetch("/api/register", {
    //   method: "POST",
    //   body: JSON.stringify(obj),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    const res = await axios.post("/api/register", obj);
    console.log(res.data.message);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={email}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;

