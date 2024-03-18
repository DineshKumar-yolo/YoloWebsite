"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridLoader } from 'react-spinners';
import Image from 'next/image';
import Link from 'next/link';
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaSnapchat } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";

const Profile = ({ params }) => {
  const dealId = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const getUser = async () => {
    const result = await axios.get(`https://uat-api-iam.getyolo.in/user/user-profile/${dealId}`)
      .then(res => {
        console.log({ result: res.data });
        setData(res.data);
      }).catch(err => {
        console.log(err)
      }).finally(() => {
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getUser()
  })


  return isLoading ?
    (
      <div className="flex h-screen justify-center items-center">
        <GridLoader color="#660B0B" />
      </div>
    )
    :
    data !== null ?
      (
        <div className="flex justify-center items-center w-screen">
          <div className="flex flex-col justify-center items-center my-5 lg:w-[50%] md:w-[60%] sm:w-[75%] w-[90%] gap-4" >
            <div className='card-round' >
              <Image src={data.profile} alt='profile' width={100} height={100} className='rounded-full p-1' />
            </div>
            <p className='text-[#ffffff] text-[25px] font-semibold' >{data.name}</p>
            {
              data.visibility.bio && (
                <p className='text-[#ffffff50]' >{data.bio}</p>
              )
            }
            {
              data.visibility.phoneNumber && (
                <div className='button w-full text-[#ffffff]' >
                  <Link href={`tel:${data.phoneNumber}`} className='flex gap-2 justify-center items-center' >
                    <FiPhone />  
                    <button>phone number</button>
                  </Link>
                </div>
              )
            }
            {
              data.visibility.emailId && (
                <div className='button w-full text-[#ffffff]' >
                  <Link href={`mailto:${data.emailId}`} className='flex gap-2 justify-center items-center' >
                    <MdOutlineEmail />
                    <button>Email</button>
                  </Link>
                </div>
              )
            }
            <div className='flex flex-row gap-4 flex-wrap w-full items-center justify-center' >
              {
                data.visibility.facebook && (
                  <div className='share button w-1/4 text-[#ffffff]' >
                    <Link href={data.facebook} className='px-3' >
                      <TiSocialFacebookCircular />
                    </Link>
                  </div>
                )
              }
              {
                data.visibility.instagram && (
                  <div className='share button w-1/4 text-[#ffffff]' >
                    <Link href={data.instagram} >
                      <FaInstagram />
                    </Link>
                  </div>
                )
              }
                {
                  data.visibility.twitter && (
                    <div className='share button w-1/4 text-[#ffffff]' >
                      <Link href={data.twitter} >
                        <FaXTwitter />
                      </Link>
                    </div>
                  )
                }
              {
                data.visibility.whatsapp && (
                  <div className='share button w-1/4 text-[#ffffff]' >
                    <Link href={data.whatsapp} >
                      <FaWhatsapp />
                    </Link>
                  </div>
                )
              }
              {
                data.visibility.snapchat && (
                  <div className='share button w-1/4 text-[#ffffff]' >
                    <Link href={data.snapchat} >
                      <FaSnapchat />
                    </Link>
                  </div>
                )
              }
              {
                data.visibility.discord && (
                  <div className='share button w-1/4 text-[#ffffff]' >
                    <Link href={data.discord} >
                      <RiDiscordLine />
                    </Link>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      )
      :
      (
        <div className="flex h-screen justify-center items-center">
          <p className='' >
            sorry, we couldn&apos;t found the user.
          </p>
        </div>
      )
}

export default Profile;