"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GridLoader } from 'react-spinners';
import Image from 'next/image';
import Link from 'next/link';
import { FaGraduationCap } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter, FaSnapchat } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";
import { LuSlack } from "react-icons/lu";
import { SlSocialSpotify } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";

const Profile = ({ params }) => {
  const dealId = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [education, setEducation] = useState(false);
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
            <div className="flex flex-col justify-center items-center m-[1.5px] w-[360px] py-5 px-4 gap-6 bg-[#0D0D0D]" >
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
                      <p className='bg-[#ffffff10] rounded-full h-[40px] w-[40px] text-xl flex justify-center items-center' ><MdOutlineEmail /></p>
                      <button className='text-[12px]' >Email</button>
                    </Link>
                  )
                }
                {
                  data.visibility.whatsapp && (
                    <Link href={data.whatsapp} className='px-3 py-4 share button flex flex-row text-[#ffffff] gap-4 flex-1' >
                      <p className='bg-[#ffffff10] rounded-full h-[40px] w-[40px] text-xl flex justify-center items-center' ><FaWhatsapp /></p>
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
                      <p className='bg-[#ffffff10] rounded-full h-[40px] w-[40px] text-xl flex justify-center items-center' ><FiPhone /></p>
                      <button className='text-[12px]' >mobile</button>
                    </Link>
                  )
                }

                {
                  data.visibility.facebook && (
                    <Link href={data.facebook} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Facebook.png')} width={50} height={50} />
                      <button className='text-[12px]' >facebook</button>
                    </Link>
                  )
                }
                {
                  data.visibility.instagram && (
                    <Link href={data.instagram} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Instagram-logo.png')} width={40} height={40} />
                      <button className='text-[12px]' >instagram</button>
                    </Link>
                  )
                }
                {
                  data.visibility.twitter && (
                    <Link href={data.twitter} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Twitter-logo.png')} width={30} height={30} />
                      <button className='text-[12px]' >twitter</button>
                    </Link>
                  )
                }

                {
                  data.visibility.snapchat && (
                    <Link href={data.snapchat} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Snapchat.png')} width={30} height={30} />
                      <button className='text-[12px]' >snapchat</button>
                    </Link>
                  )
                }
                {
                  data.visibility.discord && (
                    <Link href={data.discord} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Discord.png')} width={40} height={40} />
                      <button className='text-[12px]' >discord</button>
                    </Link>
                  )
                }
                {
                  !data.visibility?.portfolio && (
                    <Link href={data.discord} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <p className='bg-[#ffffff10] rounded-full h-[35px] w-[35px] text-2xl flex justify-center items-center' ><TiDocumentText /></p>
                      <button className='text-[12px]' >portfolio</button>
                    </Link>
                  )
                }
                {
                  data.visibility?.spotify && (
                    <Link href={data.discord} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Spotify-logo.png')} width={30} height={30} />
                      <button className='text-[12px]' >spotify</button>
                    </Link>
                  )
                }
                {
                  data.visibility?.slack && (
                    <Link href={data.discord} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Slack.png')} width={30} height={30} />
                      <button className='text-[12px]' >slack</button>
                    </Link>
                  )
                }
              </div>
              {
                (data.visibility.school || data.visibility?.education) && (
                  <div className='self-start' >
                    <p className='text-[#ffffff50] mt-2 text-[12px]' >EDUCATION</p>
                    {/* <p className='text-[#ffffff] text-[18px] font-semibold' >let&apos;s know more<br />about me</p> */}
                  </div>
                )
              }
              <div className='self-start flex flex-col gap-3 w-full' >
                {
                  data.visibility.school && (
                    <div className='p-4 custom-edu flex items-start justify-start gap-4' >
                      <p className='text-[#ffffff50] text-[13px] w-[100px]' >12<sup>th</sup> college name</p>
                      <p className='text-[#ffffff] text-[14px] font-normal' >{data.school}</p>
                    </div>
                  )
                }
                {
                  data.visibility?.education && (
                    <div className='p-4 custom-edu flex flex-col items-start justify-start gap-4' >
                      <div className='flex items-start justify-start gap-4'>
                        <p className='text-[#ffffff50] text-[13px] w-[100px]' >current college name</p>
                        <p className='text-[#ffffff] text-[14px] font-normal' >{data.university.name}</p>
                      </div>
                      <div className='line-stroke w-full' />
                      <div className='flex items-start justify-start gap-4'>
                        <p className='text-[#ffffff50] text-[13px] w-[100px]' >year, branch & program</p>
                        <p className='text-[#ffffff] text-[14px] font-normal' >{data.university.details}</p>
                      </div>
                    </div>
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