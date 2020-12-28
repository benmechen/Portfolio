import React, { useState } from "react"
import Layout from "../../layout"
import Form from "./form"

const ContactPage = (_, ref) => {
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (name, email, message, token) => {
        await fetch(process.env.SES_ENDPOINT, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": process.env.SES_API_KEY
            },
            body: JSON.stringify({
                toEmails: [process.env.EMAIL],
                subject: "BM - New Message",
                message: `
                    <p><span style="font-weight: bold">From: </span>${name}</p>
                    <p><span style="font-weight: bold">Email: </span>${email}</p>
                    <p><span style="font-weight: bold">Message: <br /></span>${message}</p>
                `,
                token
            })
        })

        setSuccess(true)
    }

    return (
        <Layout
            className="bg-black h-full flex flex-col justify-between items-center pb-24"
            ref={ref}
        >
            {success ? (
                <div className="h-full flex items-center justify-center">
                    <p className="text-white">Thanks for your message!</p>
                </div>
            ) : (
                <>
                    <h1 className="text-2xl text-white mt-12">Contact</h1>
                    <p className="text-white">
                        Have an idea for a new app or website? Get in touch
                        below 😃
                    </p>
                    <Form onSubmit={handleSubmit} />
                </>
            )}
        </Layout>
    )
}

export default React.forwardRef(ContactPage)
