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
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";
import { FaXTwitter, FaSnapchat } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";
import { LuSlack } from "react-icons/lu";
import { SlSocialSpotify } from "react-icons/sl";
import { TiDocumentText } from "react-icons/ti";
import { CiGlobe } from "react-icons/ci";
require('dotenv').config()

const Profile = ({ params }) => {
  const dealId = params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState()
  const [education, setEducation] = useState(false);
  const [data, setData] = useState(null);
  const getUser = async () => {
    await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_IAM}/user/user-profile/${dealId}`)
      .then(res => {
        setData(res.data);
      }).catch(err => {
        setError(err.response.data)
      }).finally(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1000)
      })
  }

  const sendClick = async (keyName) => {
    await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_IAM}/user/contact-sharing-analytical/${dealId}?keyName=${keyName}`)
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
                <Image src={data.profile.includes("storage.googleapis.com") ?data.profile : data.gender == 'male'? require('@/public/ProfilePic.png') : data.gender == 'female'? require('@/public/Female.png') : require('@/public/User.png')} alt='profile' width={100} height={100} className='rounded-full p-1 w-[100px] h-[100px] object-contain' />
              </div>
              <p className='text-[#ffffff] text-[16px] font-semibold' >{data.name}</p>
              {
                data.bio !== '' && data.visibility.bio && (
                  <div className='self-start bg-[#121212] w-full px-4 py-6 flex-1' >
                    <p className='text-[#ffffff] text-[12px]' >about me</p>
                    <div className='line-stroke my-4' />
                    <p className='text-[#ffffff50] text-[12px]' >{data.bio}</p>
                  </div>
                )
              }
              <div className='flex-row flex gap-4 w-full' >
                {
                  data.alternateEmails.length !== 0 && data.alternateEmails[0] !== '' && data.visibility.alternateEmails && (
                    <Link href={`mailto:${data.alternateEmails[0]}`} onClick={() => sendClick('emailId')} className='px-3 py-4 share button flex flex-row text-[#ffffff] gap-4 flex-1' >
                      <p className='bg-[#ffffff10] rounded-full h-[40px] w-[40px] text-xl flex justify-center items-center' ><MdOutlineEmail /></p>
                      <button className='text-[12px]' >Email</button>
                    </Link>
                  )
                }
                {
                  data.whatsapp !== '' && data.visibility.whatsapp && (
                    <Link target='_blank' href={data.whatsapp} onClick={() => sendClick('whatsapp')} className='px-3 py-4 share button flex flex-row text-[#ffffff] gap-4 flex-1' >
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
                  data.phoneNumber !== '' && data.visibility.phoneNumber && (
                    <Link href={`tel:${data.phoneNumber}`} onClick={() => sendClick('phoneNumber')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <p className='bg-[#ffffff10] rounded-full h-[40px] w-[40px] text-xl flex justify-center items-center' ><FiPhone /></p>
                      <button className='text-[12px]' >mobile</button>
                    </Link>
                  )
                }

                {
                  data.facebook !== '' && data.visibility.facebook && (
                    <Link target='_blank' href={data.facebook} onClick={() => sendClick('facebook')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Facebook.png')} width={50} height={50} />
                      <button className='text-[12px]' >facebook</button>
                    </Link>
                  )
                }
                {
                  data.instagram !== '' && data.visibility.instagram && (
                    <Link target='_blank' href={data.instagram} onClick={() => sendClick('instagram')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Instagram-logo.png')} width={40} height={40} />
                      <button className='text-[12px]' >instagram</button>
                    </Link>
                  )
                }
                {
                  data.twitter !== '' && data.visibility.twitter && (
                    <Link target='_blank' href={data.twitter} onClick={() => sendClick('twitter')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Twitter-logo.png')} width={30} height={30} />
                      <button className='text-[12px]' >twitter</button>
                    </Link>
                  )
                }

                {
                  data.snapchat !== '' && data.visibility.snapchat && (
                    <Link target='_blank' href={data.snapchat} onClick={() => sendClick('snapchat')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Snapchat.png')} width={30} height={30} />
                      <button className='text-[12px]' >snapchat</button>
                    </Link>
                  )
                }
                {
                  data.discord !== '' && data.visibility.discord && (
                    <Link target='_blank' href={data.discord} onClick={() => sendClick('discord')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Discord.png')} width={40} height={40} />
                      <button className='text-[12px]' >discord</button>
                    </Link>
                  )
                }
                {
                  data.portfolio !== '' && data.visibility?.portfolio && (
                    <Link target='_blank' href={data.portfolio} onClick={() => sendClick('portfolio')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <p className='bg-[#ffffff10] rounded-full h-[35px] w-[35px] text-2xl flex justify-center items-center' ><TiDocumentText /></p>
                      <button className='text-[12px]' >portfolio</button>
                    </Link>
                  )
                }
                {
                  data.spotify !== '' && data.visibility?.spotify && (
                    <Link target='_blank' href={data.spotify} onClick={() => sendClick('spotify')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Spotify-logo.png')} width={30} height={30} />
                      <button className='text-[12px]' >spotify</button>
                    </Link>
                  )
                }
                {
                  data.slack !== '' && data.visibility?.slack && (
                    <Link target='_blank' href={data.slack} onClick={() => sendClick('slack')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Slack.png')} width={30} height={30} />
                      <button className='text-[12px]' >slack</button>
                    </Link>
                  )
                }
                {
                  data.linkedIn !== '' && data.visibility?.linkedIn && (
                    <Link target='_blank' href={data.linkedIn} onClick={() => sendClick('linkedIn')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Linkedin-logo.png')} width={30} height={30} />
                      <button className='text-[12px]' >linkedin</button>
                    </Link>
                  )
                }
                {
                  data.bumble !== '' && data.visibility?.bumble && (
                    <Link target='_blank' href={data.bumble} onClick={() => sendClick('bumble')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Bumble.png')} width={30} height={30} />
                      <button className='text-[12px]' >bumble</button>
                    </Link>
                  )
                }
                {
                  data.behance !== '' && data.visibility?.behance && (
                    <Link target='_blank' href={data.behance} onClick={() => sendClick('behance')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Behance.png')} width={30} height={30} />
                      <button className='text-[12px]' >behance</button>
                    </Link>
                  )
                }
                {
                  data.github !== '' && data.visibility?.github && (
                    <Link target='_blank' href={data.github} onClick={() => sendClick('github')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <p className='bg-[#ffffff10] rounded-full h-[35px] w-[35px] text-2xl flex justify-center items-center' ><FaGithub /></p>
                      <button className='text-[12px]' >github</button>
                    </Link>
                  )
                }
                {
                  data.quora !== '' && data.visibility?.quora && (
                    <Link target='_blank' href={data.quora} onClick={() => sendClick('quora')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Quora.png')} width={30} height={30} />
                      <button className='text-[12px]' >quora</button>
                    </Link>
                  )
                }
                {
                  data.youtube !== '' && data.visibility?.youtube && (
                    <Link target='_blank' href={data.youtube} onClick={() => sendClick('youtube')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <Image src={require('@/public/Youtube.png')} width={30} height={30} />
                      <button className='text-[12px]' >youtube</button>
                    </Link>
                  )
                }
                {
                  data.website !== '' && data.visibility?.website && (
                    <Link target='_blank' href={data.website} onClick={() => sendClick('website')} className='px-3 share button w-[98px] h-[118px] flex flex-col text-[#ffffff] gap-4' >
                      <p className='bg-[#ffffff10] rounded-full h-[35px] w-[35px] text-2xl flex justify-center items-center' ><CiGlobe /></p>
                      <button className='text-[12px]' >website</button>
                    </Link>
                  )
                }
              </div>
              {
                ((data.school !== '' && data.visibility.school) || ((data.undergraduate?.collageName !== '' && data?.undergraduate !== undefined) && data.visibility.undergraduate) || ((data.postgraduate?.collageName !== '' && data?.postgraduate !== undefined) && data.visibility.postgraduate)) && (
                  <div className='self-start' >
                    <p className='text-[#ffffff50] mt-2 text-[12px]' >EDUCATION</p>
                    {/* <p className='text-[#ffffff] text-[18px] font-semibold' >let&apos;s know more<br />about me</p> */}
                  </div>
                )
              }
              <div className='self-start flex flex-col gap-3 w-full' >
                {
                  data.school !== '' && data.visibility.school && (
                    <div className='p-4 custom-edu flex items-start justify-start gap-4' >
                      <p className='text-[#ffffff50] text-[13px] w-[100px]' >12<sup>th</sup> college name</p>
                      <p className='text-[#ffffff] text-[14px] font-normal' >{data.school}</p>
                    </div>
                  )
                }
                {
                  (data.undergraduate?.collageName == '' || data?.undergraduate == undefined) || !data.visibility.undergraduate ? null : (
                    <div className='p-4 custom-edu flex flex-col items-start justify-start gap-2' >
                      <p className='text-[#ffffff] text-[13px] w-[120px]' >under-graduation</p>
                      <div className='flex items-start justify-start gap-4'>
                        <p className='text-[#ffffff50] text-[13px] w-[100px]' >college name{'\n'}semester{'\n'}branch{'\n'}passing year</p>
                        <p className='text-[#ffffff] text-[14px] font-normal' >
                          {data.undergraduate?.collageName}{'\n'}
                          {data.undergraduate?.semester}{'\n'}
                          {data.undergraduate?.branch}{'\n'}
                          {data.undergraduate?.passingYear}
                        </p>
                      </div>
                    </div>
                  )
                }
                {
                  (data.postgraduate?.collageName == '' || data?.postgraduate == undefined) || !data.visibility.postgraduate ? null : (
                    <div className='p-4 custom-edu flex flex-col items-start justify-start gap-2' >
                      <p className='text-[#ffffff] text-[13px] w-[120px]' >post-graduation</p>
                      <div className='flex items-start justify-start gap-4'>
                        <p className='text-[#ffffff50] text-[13px] w-[100px]' >college name{'\n'}semester{'\n'}branch{'\n'}passing year</p>
                        <p className='text-[#ffffff] text-[14px] font-normal' >
                          {data.postgraduate?.collageName}{'\n'}
                          {data.postgraduate?.semester}{'\n'}
                          {data.postgraduate?.branch}{'\n'}
                          {data.postgraduate?.passingYear}
                        </p>
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
            {error.message}
          </p>
        </div>
      )
}

export default Profile;