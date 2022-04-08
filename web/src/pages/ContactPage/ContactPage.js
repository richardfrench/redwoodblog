import {
  Form,
  TextField,
  TextAreaField,
  Label,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <Form onSubmit={onSubmit}>
        <Label>Name</Label>
        <TextField name="name" validation={{ required: true }} />
        <FieldError name="name" style={{ color: 'red' }} />
        <Label>Message</Label>
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError name="message" style={{ color: 'red' }} />
        <Label>Email</Label>
        <TextField name="email" validation={{ required: true }} />
        <FieldError name="email" style={{ color: 'red' }} />
        <Submit>Send message!</Submit>
      </Form>
    </>
  )
}

export default ContactPage
