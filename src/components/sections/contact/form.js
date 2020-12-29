import React, { useState } from "react"
import Reaptcha from "reaptcha"
import PropTypes from "prop-types"
import Input from "./input"
import Button from "./button"

const Form = ({ onSubmit }) => {
    const [token, setToken] = useState(null)
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    const onVerify = (token) => {
        setToken(token)
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                if (token) onSubmit(name, email, message, token)
            }}
            className="flex flex-col"
        >
            <div className="flex flex-row flex-wrap mb-2">
                <Input
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mb-2"
                />
                <Input
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <Input
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mb-2"
                rows="6"
                large
            />
            <div className="mb-2">
                <Reaptcha
                    sitekey={process.env.GATSBY_RECAPTCHA_KEY}
                    onVerify={onVerify}
                />
            </div>
            <Button
                title="Send"
                disabled={!token}
                className={`${
                    !token && "opacity-25 cursor-not-allowed"
                } transition-opacity duration-200`}
            />
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
export default Form
