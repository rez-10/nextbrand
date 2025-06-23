import React from 'react'
import lang from '../../assets/lang.png'
import { motion } from 'motion/react'
import { transition } from '../../utils/utils'
import { useState } from 'react'


function H4() {

    const [formData, setFormData] = useState({
        description: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    // Error state for each field
    const [errors, setErrors] = useState({});
    // Submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    // Server response message
    const [serverMessage, setServerMessage] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error for the field on change
        setErrors((prev) => ({ ...prev, [name]: '' }));
        setServerMessage('');
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.description.trim()) {
            newErrors.description = 'Business description is required';
        } else if (formData.description.length < 10) {
            newErrors.description = 'Description must be at least 10 characters';
        }
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        return newErrors;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            await submitForm(formData);
            setServerMessage('Form submitted successfully!');
            setFormData({ description: '', firstName: '', lastName: '', email: '' });
        } catch (error) {
            setServerMessage(error.message || 'Submission failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='h-fit px-10 text-white xl:mt-20'>
            <div>
                <div className='flex items-center justify-center gap-2'>
                    <motion.img src={`${lang}`} alt="lang" className='h-10 sm:h-12 p-1 bg-blue-600 rounded-full'
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={transition}
                    />
                    <motion.h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-center'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={transition}
                    >Talk to an expert</motion.h1>
                </div>
                <motion.p className='text-center text-2xl mt-4 lg:text-3xl text-white/40'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={transition}
                    viewport={{
                        amount: 1
                    }}
                >“Connect with professionals to optimize your business success.”</motion.p>
            </div>
            {/* <div className='flex justify-center mt-10 items-center flex-wrap w-[80%] m-auto'>
          
                 <motion.textarea name="" id="" placeholder='a brief description about your buisness/company' className='h-50 min-w-75 w-200 flex-1/2 border-1 border-amber-400/30 rounded outline-0 p-2'
                 initial={{opacity:0 , x:-100}}
                 whileInView={{opacity:1,x:0}}
                 transition={transition}
                 ></motion.textarea>
 
                <form action="" method='post'>
                    <motion.div className='flex flex-col gap-2 w-fit p-2'
                    initial={{opacity:0 , x:40}}
                    whileInView={{opacity:1 , x:0}}
                    transition={transition}
                    >
                        <input type="text" name="firstName" id="FirstName" placeholder='first name' className='rounded outline-0 px-5 py-2 text-xl font-bold min-w-75  bg-zinc-900' />
                        <input type="text" name="lastName" id="lastName" placeholder='last name' className=' rounded outline-0  px-5 py-2 text-xl font-bold min-w-75 bg-zinc-900' />
                        <input type="email" name="email" id="email" placeholder='email' className=' rounded outline-0 px-5 py-2 text-xl font-bold min-w-75 bg-zinc-900' />
                        <input type="submit" value="send" className='text-xl font-bold bg-amber-600 py-2 rounded transition-all cursor-pointer hover:transition-all hover:bg-blue-600' />
                    </motion.div>
                </form>
            </div> */}

            <div className="flex justify-center mt-10 items-center flex-wrap w-[80%] m-auto">
                <motion.textarea
                    name="description"
                    id="description"
                    placeholder="A brief description about your business/company"
                    className={`h-50 min-w-75 w-200 flex-1/2 border-1 rounded outline-0 p-2 ${errors.description ? 'border-amber-600' : 'border-amber-400/30'
                        }`}
                    value={formData.description}
                    onChange={handleChange}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={transition}
                    aria-describedby={errors.description ? 'description-error' : undefined}
                />
                {errors.description && (
                    <span
                        id="description-error"
                        className="text-amber-600 text-sm mt-1 w-full flex-1/2"
                        role="alert"
                    >
                        {errors.description}
                    </span>
                )}

                {/* Using div instead of form to avoid sandbox restrictions */}
                <motion.div
                    className="flex flex-col gap-2 w-fit p-2"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={transition}
                >
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="First name"
                        className={`rounded outline-0 px-5 py-2 text-xl font-bold min-w-75 bg-zinc-900 ${errors.firstName ? 'border-2 border-amber-600' : ''
                            }`}
                        value={formData.firstName}
                        onChange={handleChange}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                    />
                    {errors.firstName && (
                        <span
                            id="firstName-error"
                            className="text-amber-600 text-sm"
                            role="alert"
                        >
                            {errors.firstName}
                        </span>
                    )}

                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Last name"
                        className={`rounded outline-0 px-5 py-2 text-xl font-bold min-w-75 bg-zinc-900 ${errors.lastName ? 'border-2 border-amber-600' : ''
                            }`}
                        value={formData.lastName}
                        onChange={handleChange}
                        aria-describedby={errors.lastName ? 'lastName-error' : undefined}
                    />
                    {errors.lastName && (
                        <span
                            id="lastName-error"
                            className="text-amber-600 text-sm"
                            role="alert"
                        >
                            {errors.lastName}
                        </span>
                    )}

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className={`rounded outline-0 px-5 py-2 text-xl font-bold min-w-75 bg-zinc-900 ${errors.email ? 'border-2 border-amber-600' : ''
                            }`}
                        value={formData.email}
                        onChange={handleChange}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                        <span id="email-error" className="text-amber-600 text-sm" role="alert">
                            {errors.email}
                        </span>
                    )}

                    {serverMessage && (
                        <span
                            className={`text-sm ${serverMessage.includes('success')
                                    ? 'text-green-500'
                                    : 'text-amber-600'
                                }`}
                            role="status"
                        >
                            {serverMessage}
                        </span>
                    )}

                    <button
                        type="button"
                        onClick={handleSubmit}
                        className={`text-xl font-bold py-2 rounded transition-all cursor-pointer ${isSubmitting
                                ? 'bg-amber-400/50 cursor-not-allowed'
                                : 'bg-amber-600 hover:bg-blue-600'
                            }`}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </motion.div>
            </div>
        </div>
    )
}

export default H4