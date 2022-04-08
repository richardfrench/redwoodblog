import {
  Form,
  TextField,
  TextAreaField,
  Label,
  Submit,
  FieldError,
  useForm,
  FormError
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast} from "@redwoodjs/web/toast"
const CREATE_CONTACT = gql`
mutation CreateContactMutation($input: CreateContactInput!) {
  createContact(input:$input) {
    id
  }
}
`
const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading,error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your message!');
      formMethods.reset();
    }
  })
  const onSubmit = (data) => {
    console.log(data)
    create(
      {
        variables: {
          input:data
        }
      }
    )
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <Toaster/>
      <Form onSubmit={onSubmit} formMethods={formMethods} error={error}>
        <FormError error={error} wrapperClassName="form-error" />
        <Label>Name</Label>
        <TextField name="name" validation={{ required: true }} />
        <FieldError name="name" style={{ color: 'red' }} />
        <Label>Message</Label>
        <TextAreaField name="message" validation={{ required: true }} />
        <FieldError name="message" style={{ color: 'red' }} />
        <Label>Email</Label>
        <TextField name="email" validation={{ required: true }} />
        <FieldError name="email" style={{ color: 'red' }} />
        <Submit disabled={ loading}>Send message!</Submit>
      </Form>
    </>
  )
}

export default ContactPage
