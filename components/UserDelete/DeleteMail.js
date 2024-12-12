"use client";

import Link from 'next/link'
import Script from 'next/script'
import React, { useState } from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import Button from '../modules/Button'
import { BsChatLeftText } from "react-icons/bs"
import { toast } from 'react-toastify';

const DeleteMail = () => {

    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("Fname", fName);
        formData.append("Lname", lName);
        formData.append("email", email);
        formData.append("Phone", phone);
        formData.append("message", message);
        formData.append("_next", "#");
        formData.append("_subject", `New delete account from ${fName} ${lName} ${email}!`);
        formData.append("_captcha", "false");
        formData.append("_template", "table");

        try {
            const response = await fetch("https://formsubmit.co/283a4f7628bbd586749a9fd843d4b74d", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                toast.success("Your request has been submitted successfully!");
                // Clear the form
                setfName("");
                setlName("");
                setemail("");
                setPhone("");
                setmessage("");
            } else {
                toast.error("There was an issue submitting your request. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            toast.error("An unexpected error occurred. Please try again.");
        }
    };

    return (
        <div className='w-full py-20 flex justify-center items-center'>
            <div className='flex flex-col mlg:flex-row justify-center items-center max-w-[1240px] min-h-[398px] w-full shrink-0 rounded-2xl bg-[#121213] bg-design'>
                <div className='md:mx-28 flex flex-col items-start gap-10 my-14 xl:px-0 px-6'>
                    <div className="flex max-w-[505px] flex-col justify-center items-start gap-4">
                        <h2 className='text-white font-poppins text-[40px] xs:text-[30px] font-semibold leading-normal tracking-[-0.165px]'>
                            In order to delete account
                        </h2>
                        <p className="font-poppins text-[#878787] text-lg font-normal leading-[150%]">
                            mail us your account details.
                        </p>
                    </div>
                    <div className='flex items-start gap-5'>
                        <a href="mailto:admin.tech@getyolo.in" className='border-gradient-right flex min-w-[168px] px-6 py-4 justify-center items-center gap-3 border bg-[#121213]'>
                            <p className='text-white font-poppins text-sm font-medium leading-[131.429%]'>Email Us</p>
                            <FaRegEnvelope className="text-white text-lg" />
                        </a>
                    </div>
                </div>
                <div className="h-[2px] w-full mlg:min-h-[398px] mlg:w-[2px] mlg:bg-gradient-to-b bg-gradient-to-r from-transparent via-white to-transparent z-10" />
                <div className='md:mx-28 flex flex-col items-start gap-10 my-14 xl:px-0 px-6'>
                    <div className="flex max-w-[505px] w-full flex-col justify-center items-start gap-4">
                        <h2 className='text-left text-white font-poppins text-[32px] xs:text-[25px] font-semibold leading-normal tracking-[-0.165px]'>
                            Or Fill this form
                        </h2>
                    </div>
                    <form className='flex flex-col gap-6' onSubmit={handleSubmit} >
                        <div className='flex flex-col lg:flex-row gap-6' >
                            <div className='flex flex-col gap-1' >
                                <label htmlFor="Fname" className="font-poppins text-[#6E6E6E] text-[14px] font-medium leading-[150%] tracking-[-0.165px]" >
                                    First name
                                </label>
                                <input type='text' name='Fname' value={fName} placeholder='Enter First Name' required onChange={(e) => setfName(e.target.value)} className="font-poppins bg-transparent input-border-gradient-right text-[#A0A0A1] text-[16px] font-semibold leading-[150%] tracking-[-0.165px]" />
                            </div>
                            <div className='flex flex-col gap-1' >
                                <label htmlFor="Lname" className="font-poppins text-[#6E6E6E] text-[14px] font-medium leading-[150%] tracking-[-0.165px]" >
                                    Last name
                                </label>
                                <input type='text' name='Lname' value={lName} placeholder='Enter Last Name' required onChange={(e) => setlName(e.target.value)} className="font-poppins bg-transparent input-border-gradient-right text-[#A0A0A1] text-[16px] font-semibold leading-[150%] tracking-[-0.165px]" />
                            </div>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-6' >
                            <div className='flex flex-col gap-1' >
                                <label htmlFor="email" className="font-poppins text-[#6E6E6E] text-[14px] font-medium leading-[150%] tracking-[-0.165px]" >
                                    Work Email
                                </label>
                                <input type='email' name='email' value={email} placeholder='i.e. xyz@gmail.com' required onChange={(e) => setemail(e.target.value)} className="font-poppins bg-transparent input-border-gradient-right text-[#A0A0A1] text-[16px] font-semibold leading-[150%] tracking-[-0.165px]" />
                            </div>
                            <div className='flex flex-col gap-1' >
                                <label htmlFor="Phone" className="font-poppins text-[#6E6E6E] text-[14px] font-medium leading-[150%] tracking-[-0.165px]" >
                                    Phone Number
                                </label>
                                <input type='number' name='Phone' max={9999999999} maxLength={10} value={phone} placeholder='Enter Phone Numer' required onChange={(e) => setPhone(e.target.value)} className="font-poppins bg-transparent input-border-gradient-right text-[#A0A0A1] text-[16px] font-semibold leading-[150%] tracking-[-0.165px]" />
                            </div>
                        </div>
                        <div className='flex flex-col gap-1' >
                            <label htmlFor="message" className="font-poppins text-[#6E6E6E] text-[14px] font-medium leading-[150%] tracking-[-0.165px]" >
                                Reason for leaving us ?
                            </label>
                            <input type='text' name='message' value={message} placeholder='Type here' required onChange={(e) => setmessage(e.target.value)} className="font-poppins bg-transparent input-border-gradient-right text-[#A0A0A1] text-[16px] font-semibold leading-[150%] tracking-[-0.165px]" />
                        </div>
                        {/* <input type="hidden" name="_next" value="https://getyolo.in/user-account-delete" />
                        <input type="hidden" name="_subject" value={`New delete account from ${fName}${lName} ${email} !`} />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" /> */}
                        <div className='flex items-start gap-5'>
                            <Button buttonName={"Submit"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DeleteMail
