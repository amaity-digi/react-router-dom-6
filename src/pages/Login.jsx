import { useState } from "react"

const initialValue = {
    email: "",
    password: "",
}
function Login() {
    const [formData, setFormData] =useState(initialValue);

    const handleChange = (e) => {
       const {name, value} = e.target
       setFormData(pre => ({
        ...pre,
        [name]: value
       }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("999", formData)
    }

  return (
    <div>
        <h2>Sign in to your Account</h2>
        <form onSubmit={handleSubmit}>
            <input 
            name= "email"
            type="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            />

            <input 
             name= "password"
             type="password"
             placeholder="Enter your password"
             value={formData.password}
             onChange={handleChange}
            />
          <button>Login</button>
        </form>
    </div>
  )
}

export default Login