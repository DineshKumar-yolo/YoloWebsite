import React from 'react'
import smu from "@/public/smu.png"
import amity from "@/public/amity.png"
import lpu from "@/public/lpu.png"
import ashoka from "@/public/ashoka.png"
import gu from "@/public/gu.png"
import nu from "@/public/nalanda.png"
import university from "@/public/university.png"
import nmims from "@/public/nmims.png"
import iim from "@/public/iim.png"
import Image from 'next/image'

const EducationPartners = () => {
    return (
        <div className='bg-[#F8F8F8]'>
            <div className='max-w-[1240px] flex flex-col items-start gap-12 mx-auto px-10 xl:px-0 py-14'>
                <h2 className='text-[#212426] text-2xl not-italic font-normal leading-[170%]'>Our School & University Partners</h2>
                <div className="flex flex-wrap items-center gap-12 mix-blend-darken">
                    <Image src={smu} alt='Edu' />
                    <Image src={amity} alt='Edu' />
                    <Image src={lpu} alt='Edu' />
                    <Image src={ashoka} alt='Edu' />
                    <Image src={gu}  alt='Edu'/>
                    <Image src={nu} alt='Edu' />
                    <Image src={university} alt='Edu' />
                    <Image src={nmims} alt='Edu' />
                    <Image src={iim} alt='Edu' />
                </div>
            </div>
        </div>
    )
}

export default EducationPartners
