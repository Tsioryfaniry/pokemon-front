import React from 'react'
import { Form, Link } from 'react-router-dom'
import Heading from '../components/heading/Heading'
import Input from '../components/input/Input'

export default function SignUp() {
  return (
    <>
      <Heading component='h1' variant='h1'className='text-center'>Sign up</Heading>

        <Form action='/signup' method='post' className="max-w-sm mx-auto pt-4">
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <Input type="text" placeholder='email' />
        </div>
         <div className="mb-5">
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your phone number</label>
            <Input type="number" placeholder='phone number' />
        </div>
        <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <Input type="text" placeholder='*******' />           
        </div>
        <div className="mb-5">
            <label htmlFor="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
            <Input type="text" placeholder='**********' />
        </div>
        
        <button type="submit" className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
        </Form>

    </>
  )
}
