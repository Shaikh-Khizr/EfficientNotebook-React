import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Signup = (props) => {
    
    const [credentials, setCredentials] = useState({name: "", email: "", password: "", cpassword: ""});
    let history = useHistory();

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
                headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
              // Save the auth token and redirect
              localStorage.setItem('efficientnotebook_token', json.authToken);
              history.push("/");
              props.showAlert("Account Created Successfully", "success");
          } else {
            props.showAlert("Invalid details", "danger");
          }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form className="container my-3" onSubmit={handleSignupSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={onChange} name="name" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={onChange} name="email" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={onChange} name="password" id="password" required minLength={8} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" onChange={onChange} name="cpassword" id="cpassword" required minLength={8} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
