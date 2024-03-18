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
        setTimeout(()=>{
          setIsLoading(false);
        }, 1000)
      })
  }

  useEffect(() => {
    getUser()
  }, [])


  return isLoading ?
    (
      <div className="flex h-screen justify-center items-center">
        <GridLoader color="#fff" loading={isLoading} />
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
                <Link href={`tel:${data.phoneNumber}`} className='button w-full text-[#ffffff] flex gap-2 justify-center items-center' >
                  <FiPhone />
                  <button>phone number</button>
                </Link>
              )
            }
            {
              data.visibility.emailId && (
                <Link href={`mailto:${data.emailId}`} className='button w-full text-[#ffffff] flex gap-2 justify-center items-center' >
                  <MdOutlineEmail />
                  <button>Email</button>
                </Link>
              )
            }
            <div className='flex flex-row gap-4 flex-wrap w-full items-center justify-around' >
              {
                data.visibility.facebook && (
                  <Link href={data.facebook} className='px-3 share button min-w-[25%] text-[#ffffff] flex-1 text-[35px]' >
                    <TiSocialFacebookCircular />
                  </Link>
                )
              }
              {
                data.visibility.instagram && (
                  <Link href={data.instagram} className='px-3 share button min-w-[25%] text-[#ffffff] flex-1 text-[35px]' >
                    <FaInstagram />
                  </Link>
                )
              }
              {
                data.visibility.twitter && (
                  <Link href={data.twitter} className='px-3 share button min-w-[25%] text-[#ffffff] flex-1 text-[35px]' >
                    <FaXTwitter />
                  </Link>
                )
              }
              {
                data.visibility.whatsapp && (
                  <Link href={data.whatsapp} className='px-3 share button min-w-[25%] text-[#ffffff] flex-1 text-[35px]' >
                    <FaWhatsapp />
                  </Link>
                )
              }
              {
                data.visibility.snapchat && (
                  <Link href={data.snapchat} className='px-3 share button min-w-[25%] text-[#ffffff] flex-1 text-[35px]' >
                    <FaSnapchat />
                  </Link>
                )
              }
              {
                data.visibility.discord && (
                  <Link href={data.discord} className='px-3 share button min-w-[25%] text-[#ffffff] flex-1 text-[35px]' >
                    <RiDiscordLine />
                  </Link>
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