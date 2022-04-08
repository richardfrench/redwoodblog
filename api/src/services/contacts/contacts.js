import { db } from 'src/lib/db'
import { validate, validateUniqueness } from '@redwoodjs/api'
export const contacts = () => {
  return db.contact.findMany()
}

export const contact = ({ id }) => {
  return db.contact.findUnique({
    where: { id },
  })
}

export const createContact = ({ input }) => {
  validate(input.email, 'email', { email: true })
  return validateUniqueness(
    'contact',
    { email: input.email },
    { message: 'Your email is already in use' },
    (db) => db.contact.create({ data: input })
  )

}

export const updateContact = ({ id, input }) => {
  return db.contact.update({
    data: input,
    where: { id },
  })
}

export const deleteContact = ({ id }) => {
  return db.contact.delete({
    where: { id },
  })
}
