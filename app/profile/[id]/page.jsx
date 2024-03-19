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
        setTimeout(() => {
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
          <div className="flex flex-col justify-center items-center my-5 lg:w-[50%] md:w-[60%] sm:w-[75%] w-[90%] gap-4 max-w-[600px]" >
            <div className="share-bg absolute h-[200px] top-0 lg:w-[50%] md:w-[60%] sm:w-[75%] w-[90%] gap-4 max-w-[600px]" />
            <div className='card-round' >
              <Image src={data.profile} alt='profile' width={100} height={100} className='rounded-full p-1' />
            </div>
            <p className='text-[#ffffff] text-[25px] font-semibold' >{data.name}</p>
            {
              data.visibility.bio && (
                <div>
                  <p className='text-[#ffffff] text-[20px] text-center' >about me</p>
                  <p className='text-[#ffffff50] text-center' >{data.bio}</p>
                </div>
              )
            }
            <div>
              <p className='text-[#ffffff50] text-center mt-2' >LINKS</p>
              <p className='text-[#ffffff] text-[25px] font-semibold text-center leading-7' >let&apos;s connect on<br />the social media</p>
            </div>
            <div className='flex flex-row gap-4 flex-wrap w-full items-center justify-around' >
              {
                data.visibility.phoneNumber && (
                  <Link href={`tel:${data.phoneNumber}`} className='px-3 share button sm:min-w-[30%] min-w-[40%] text-[#ffffff] flex-1 flex flex-col gap-2' >
                    <FiPhone />
                    <button>mobile</button>
                  </Link>
                )
              }
              {
                data.visibility.emailId && (
                  <Link href={`mailto:${data.emailId}`} className='px-3 share button sm:min-w-[30%] min-w-[40%] text-[#ffffff] flex-1 flex flex-col gap-2' >
                    <MdOutlineEmail />
                    <button>Email</button>
                  </Link>
                )
              }
              {
                data.visibility.facebook && (
                  <Link href={data.facebook} className='px-3 share button sm:min-w-[30%] min-w-[40%] text-[#ffffff] flex-1 flex flex-col gap-2' >
                    <p className='text-[30px]' ><TiSocialFacebookCircular /></p>
                    <button>facebook</button>
                  </Link>
                )
              }
              {
                data.visibility.instagram && (
                  <Link href={data.instagram} className='px-3 share button sm:min-w-[30%] min-w-[40%] text-[#ffffff] flex-1 flex flex-col gap-2' >
                    <FaInstagram />
                    <button>instagram</button>
                  </Link>
                )
              }
              {
                data.visibility.twitter && (
                  <Link href={data.twitter} className='px-3 share button sm:min-w-[30%] min-w-[40%] text-[#ffffff] flex-1 flex flex-col gap-2' >
                    <FaXTwitter />
                    <button>twitter</button>
                  </Link>
                )
              }
              {
                data.visibility.whatsapp && (
                  <Link href={data.whatsapp} className='px-3 share button sm:min-w-[30%] min-w-[40%] text-[#ffffff] flex-1 flex flex-col gap-2' >
                    <FaWhatsapp />
                    <button>whatsapp</button>
                  </Link>
                )
              }
              {
                data.visibility.snapchat && (
                  <Link href={data.snapchat} className='px-3 share button sm:min-w-[30%] min-w-[40%] text-[#ffffff] flex-1 flex flex-col gap-2' >
                    <FaSnapchat />
                    <button>snapchat</button>
                  </Link>
                )
              }
              {
                data.visibility.discord && (
                  <Link href={data.discord} className='px-3 share button sm:min-w-[30%] min-w-[40%] text-[#ffffff] flex-1 flex flex-col gap-2' >
                    <RiDiscordLine />
                    <button>discord</button>
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