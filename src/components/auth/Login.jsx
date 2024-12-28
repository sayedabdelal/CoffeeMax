import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { fetchUsers } from "../../util/http";
import "./auth.css";

function Login() {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const loginMutation = useMutation({
        mutationFn: fetchUsers,
        onSuccess: (data) => {
            console.log(data.message);
            localStorage.setItem("user", JSON.stringify(data.user));
            localStorage.setItem("isAuthenticated", true);
            navigate("/");
        },
        onError: (error) => {
            setErrors({ general: error.message });
        },
    });

    function validateLogin(data) {
        const formErrors = {};
        if (!data.email) {
            formErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            formErrors.email = "Email address is invalid";
        }
        if (!data.password) {
            formErrors.password = "Password is required";
        }
        return formErrors;
    }

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        const formErrors = validateLogin(data);
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        loginMutation.mutate(data);
    }

    return (
        <div className="login grid" id="login-content">
            <form onSubmit={handleSubmit} className="login__form grid">
                <h3 className="login__title">Log In</h3>
                <div className="login__group grid">
                    <div>
                        <label htmlFor="login-email" className="login__label">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Write your email"
                            className="login-input"
                            id="login-email"
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="login-pass" className="login__label">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your Password"
                            id="login-pass"
                            className="login-input"
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>
                </div>
                <div>
                    {errors.general && <span className="error">{errors.general}</span>}
                    <span className="login__signup">
                        Don't have an account? <Link to="../signup" id="sign-up">Sign Up</Link>
                    </span>
                    <button type="submit" className="login__button button">Log In</button>
                </div>
            </form>
            <Link to="../" className="ri-close-line login__close" id="login-close"></Link>
        </div>
    );
}

export default Login;
