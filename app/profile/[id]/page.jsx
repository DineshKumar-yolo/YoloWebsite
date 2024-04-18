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
          <div className='custom-border my-5'>
          <div className="flex flex-col justify-center items-center m-[3px] w-[360px] py-5 px-4 gap-6 bg-[#0D0D0D]" >
            <div className="share-bg absolute h-[200px] top-5 w-[360px]" />
            <div className='card-round' >
              <Image src={data.profile} alt='profile' width={100} height={100} className='rounded-full p-1' />
            </div>
            <p className='text-[#ffffff] text-[16px] font-semibold' >{data.name}</p>
            {
              data.visibility.bio && (
                <div className='self-start bg-[#121212] w-full px-4 py-6 flex-1' >
                  <p className='text-[#ffffff] text-[12px]' >about me</p>
                  <div className='line-stroke my-4' />
                  <p className='text-[#ffffff50] text-[12px]' >{data.bio}</p>
                </div>
              )
            }
            <div className='flex-row flex gap-4 w-full' >
              {
                data.visibility.emailId && (
                  <Link href={`mailto:${data.emailId}`} className='px-3 py-4 share button flex flex-row text-[#ffffff] gap-4 flex-1' >
                    <p className='bg-[#ffffff10] rounded-full h-[33px] w-[33px] text-xl flex justify-center items-center' ><MdOutlineEmail /></p>
                    <button className='text-[12px]' >Email</button>
                  </Link>
                )
              }
              {
                data.visibility.whatsapp && (
                  <Link href={data.whatsapp} className='px-3 py-4 share button flex flex-row text-[#ffffff] gap-4 flex-1' >
                    <p className='bg-[#ffffff10] rounded-full h-[33px] w-[33px] text-xl flex justify-center items-center' ><FaWhatsapp /></p>
                    <button className='text-[12px]' >whatsapp</button>
                  </Link>
                )
              }
            </div>
            <div className='self-start' >
              <p className='text-[#ffffff50] mt-2 text-[12px]' >LINKS</p>
              <p className='text-[#ffffff] text-[18px] font-semibold' >let&apos;s connect on<br />the social media</p>
            </div>
            <div className='grid grid-flow-row grid-cols-3 gap-4 items-center justify-between' >
              {
                data.visibility.phoneNumber && (
                  <Link href={`tel:${data.phoneNumber}`} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                    <p className='bg-[#ffffff10] rounded-full h-[33px] w-[33px] text-xl flex justify-center items-center' ><FiPhone /></p>
                    <button className='text-[12px]' >mobile</button>
                  </Link>
                )
              }

              {
                data.visibility.facebook && (
                  <Link href={data.facebook} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                    <p className='bg-[#ffffff10] rounded-full h-[33px] w-[33px] text-[25px] flex justify-center items-center' ><TiSocialFacebookCircular /></p>
                    <button className='text-[12px]' >facebook</button>
                  </Link>
                )
              }
              {
                data.visibility.instagram && (
                  <Link href={data.instagram} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                    <p className='bg-[#ffffff10] rounded-full h-[33px] w-[33px] text-xl flex justify-center items-center' ><FaInstagram /></p>
                    <button className='text-[12px]' >instagram</button>
                  </Link>
                )
              }
              {
                data.visibility.twitter && (
                  <Link href={data.twitter} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                    <p className='bg-[#ffffff10] rounded-full h-[33px] w-[33px] text-xl flex justify-center items-center' ><FaXTwitter /></p>
                    <button className='text-[12px]' >twitter</button>
                  </Link>
                )
              }

              {
                data.visibility.snapchat && (
                  <Link href={data.snapchat} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                    <p className='bg-[#ffffff10] rounded-full h-[33px] w-[33px] text-xl flex justify-center items-center' ><FaSnapchat /></p>
                    <button className='text-[12px]' >snapchat</button>
                  </Link>
                )
              }
              {
                data.visibility.discord && (
                  <Link href={data.discord} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                    <p className='bg-[#ffffff10] rounded-full h-[33px] w-[33px] text-xl flex justify-center items-center' ><RiDiscordLine /></p>
                    <button className='text-[12px]' >discord</button>
                  </Link>
                )
              }
            </div>
          </div>
          </div>
        </div>
      )
      :
      (
        <div className="flex h-screen justify-center items-center">
          <p className='text-[#ffffff] text-[25px] font-semibold' >
            sorry, we couldn&apos;t found the user.
          </p>
        </div>
      )
}

export default Profile;