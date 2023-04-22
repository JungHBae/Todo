import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Signup.css";
import { useState } from "react";
import axios from "axios";
export const Signup = () => {
  const [user, setUser] = useState({ id: "", password: "" });
  const signupUser = async (user) => {
    await axios.post("http://3.38.191.164/register", user);
  };

  // use goal state to warn empty input
  const handleValueChange = (e) => {
    const changedValue = e.target.value;
    const targetInput = e.target.name;
    switch (targetInput) {
      case "id":
        setUser({ ...user, id: changedValue });
        break;
      case "password":
        setUser({ ...user, password: changedValue });
        break;
      default:
        break;
    }
  };
  return (
    <motion.div
      className="details"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h3>Signup</h3>

      <div>
        <form
          className="signup-form"
          onSubmit={(e) => {
            e.preventDefault();
            signupUser(user);
          }}
        >
          <input type="text" name="id" placeholder="ID" autoComplete="off" onChange={handleValueChange} value={user.title} maxLength="30" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            onChange={handleValueChange}
            value={user.password}
            maxLength="30"
          />

          <button type="submit"></button>
        </form>
      </div>
      <span>
        <Link to="/">{`> 돌아가기! <`}</Link>
      </span>
    </motion.div>
  );
};
