import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const clear = () => {
    setName(""), setEmail(""), setSubscribed(false);
  };

  return (
    <>
      <div className="container mt-5">
        {!subscribed ? (
          <form className="border border-2 rounded border- p-4">
            <h1 className="d-flex">Newsletter Subscription</h1>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="p-2 border border-2 rounded "
              />
            </div>
            <div className="d-flex pb-2 pt-2">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded border border-"
              />
            </div>
            <button
              onClick={() => setSubscribed(email)}
              className="bg-primary text-white fw-bold d-flex px-3 py-2 rounded border-0"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div
            className="alert alert-success d-flex align-items-center mt-3 flex-column"
            role="alert"
          >
            <span>Please check your email ( {email} )for confirmation.</span>
            <div className="pt-3">
              <button className="btn btn-warning" onClick={clear}>
                Subscribe to another email
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
