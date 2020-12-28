import React, { useState } from "react"
import PropTypes from "prop-types"
import Input from "./input"
import Button from "./button"

const Form = ({ onSubmit }) => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit(name, email, message)
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
            <Button title="Send" />
        </form>
    )
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
export default Form
