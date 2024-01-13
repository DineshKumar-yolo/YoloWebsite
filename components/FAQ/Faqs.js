"use client";

import React, { useState } from 'react'
import { RiAddLine } from "react-icons/ri";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'

const deals = [
    {
        id: 1,
        question: "How can I avail of the deals and coupons on Yolo?",
        answer: "Navigate to the 'Deals' section, choose your preferred brand, and click on the available deals. Follow the instructions to redeem the coupon and enjoy exclusive offers.",
    },
    {
        id: 2,
        question: "Are the deals updated regularly?",
        answer: "Yes, we constantly update our deals to provide fresh and exciting offers. Keep checking the 'Deals' section for the latest discounts from various brands.",
    },
    {
        id: 3,
        question: "Can I use Yolo Coins to enhance my deal benefits?",
        answer: "Absolutely! You can use Yolo Coins to unlock additional benefits and discounts when availing deals. Maximize your savings with Yolo.",
    },
    {
        id: 4,
        question: "What happens if a deal is expired?",
        answer: "Expired deals are promptly removed from the platform. We recommend checking regularly for the latest deals to ensure you don't miss out on great offers.",
    },
    {
        id: 5,
        question: "Can I share the deals with my friends?",
        answer: "Currently, the sharing feature for deals is not available. We're continually enhancing our features, and your feedback is valuable for future updates.",
    },
];

const giveaways = [
    {
        id: 1,
        question: "How do I participate in Yolo's Giveaway events?",
        answer: "Participating is easy! Go to the 'Giveaways' section, play the lottery spin, and if your ticket matches, you win the giveaway. If not, you can try again in the next round.",
    },
    {
        id: 2,
        question: "How often are new giveaways introduced?",
        answer: "We regularly introduce new giveaways to keep the excitement alive. Check the 'Giveaways' section frequently for the latest opportunities to win exciting prizes.",
    },
    {
        id: 3,
        question: "Can I accumulate multiple lottery tickets for better chances?",
        answer: "Absolutely! The more you play, the more tickets you accumulate, increasing your chances of winning. Collect tickets and enhance your odds in Yolo's Giveaways.",
    },
    {
        id: 4,
        question: "What happens if I win a giveaway?",
        answer: "Congratulations! If you win, you'll be notified immediately, and the prize will be credited to your account. Enjoy your rewards and keep participating for more!",
    },
    {
        id: 5,
        question: "Is there a limit on the number of giveaway spins per day?",
        answer: "Yes, there is a limit of 5 spins per day for each giveaway. This ensures fair participation and distribution of chances among all users. Good luck with your spins!",
    },
];

const contactSharing = [
    {
        id: 1,
        question: "How do I create and share my contact on Yolo?",
        answer: "Visit the 'Contact Sharing' feature, enter your social media handles, email, and phone number. Once created, you can easily share your Yolo contact details with others.",
    },
    {
        id: 2,
        question: "Can I customize the information I share in my Yolo contact?",
        answer: "Absolutely! You have full control over what information you share. Customize your Yolo contact to include only the details you're comfortable sharing with others.",
    },
    {
        id: 3,
        question: "Is my contact information on Yolo private and secure?",
        answer: "Yes, we prioritize the security of your information. Your contact details are encrypted and shared only with your consent, ensuring privacy and safety.",
    },
    {
        id: 4,
        question: "Can I revoke access to my contact information?",
        answer: "Yes, you have the option to revoke access to your contact information at any time. Manage your sharing preferences in the 'Contact Sharing' section of your profile.",
    },
    {
        id: 5,
        question: "Can I see who has viewed my Yolo contact?",
        answer: "Currently, the platform doesn't provide a feature to view who has accessed your Yolo contact. We respect user privacy and prioritize confidentiality.",
    },
];

const profile = [
    {
        id: 1,
        question: "How can I check my cashback, Yolo Coins, and voucher ledgers?",
        answer: "Visit the 'Profile' section, and you'll find detailed ledgers for your cashback, Yolo Coins, and vouchers. Stay informed about your earnings and savings.",
    },
    {
        id: 2,
        question: "Can I update my personal information in the profile?",
        answer: "Certainly! In the 'Profile' section, you can manage and update your personal information, ensuring that your account details are always accurate.",
    },
    {
        id: 3,
        question: "How do I enhance the security of my Yolo account?",
        answer: "Navigate to the 'Profile' section, choose 'Security,' and follow the prompts to enhance your account security. Enable two-factor authentication for added protection.",
    },
    {
        id: 4,
        question: "Can I track my transaction history in the profile?",
        answer: "Yes, your transaction history is available in the 'Profile' section. Review your past transactions, ensuring transparency and keeping track of your financial activities.",
    },
    {
        id: 5,
        question: "Are there any benefits to completing my profile on Yolo?",
        answer: "Absolutely! Completing your profile not only enhances security but also allows us to tailor personalized offers and recommendations based on your preferences and usage.",
    },
];

const kyc = [
    {
        id: 1,
        question: "What is the difference between Min KYC and Full KYC on Yolo?",
        answer: "Min KYC has lower transaction limits, while Full KYC offers higher limits. Choose the KYC level that suits your needs and provides the desired transaction limits.",
    },
    {
        id: 2,
        question: "How can I upgrade from Min KYC to Full KYC?",
        answer: "To upgrade, visit the 'KYC' section, select 'Upgrade,' and follow the instructions. Ensure you have the necessary documents for a smooth transition.",
    },
    {
        id: 3,
        question: "What are the monthly and daily transaction limits for Min KYC?",
        answer: "With Min KYC, the monthly limit is 10,000, and the daily limit is 2,000. This level is suitable for users with moderate transaction requirements.",
    },
    {
        id: 4,
        question: "What are the monthly and daily transaction limits for Full KYC?",
        answer: "With Full KYC, the monthly limit is 200,000, and the daily limit is 100,000. Opt for Full KYC if you require higher transaction limits for your financial activities.",
    },
    {
        id: 5,
        question: "Is my KYC information on Yolo secure and confidential?",
        answer: "Yes, we take the privacy and security of your KYC information seriously. Your details are encrypted and stored securely, adhering to strict data protection standards.",
    },
];

const membership = [
    {
        id: 1,
        question: "What benefits come with the Yolo membership?",
        answer: "Yolo membership, with a fixed one-time cost for a year, provides exclusive deals, exciting giveaways, and access to health benefits and insurance. Enjoy a comprehensive package for an entire year.",
    },
    {
        id: 2,
        question: "How do I activate the Yolo membership for a year?",
        answer: "To activate your Yolo membership, make a one-time payment for the fixed annual cost. Visit the 'Membership' section, follow the prompts, and unlock a year of exclusive benefits.",
    },
    {
        id: 3,
        question: "Can I enjoy the Yolo membership benefits immediately after payment?",
        answer: "Yes, your Yolo membership benefits are activated immediately upon successful payment. Start enjoying the perks, from deals and giveaways to health benefits and insurance coverage, right away!",
    },
    {
        id: 4,
        question: "Is the fixed cost for Yolo membership refundable?",
        answer: "The fixed one-time cost for Yolo membership is non-refundable. Make the most of your membership by exploring the diverse range of benefits throughout the year.",
    },
    {
        id: 5,
        question: "Are there any hidden fees associated with Yolo membership?",
        answer: "No hidden fees! The fixed one-time cost for Yolo membership covers all the listed benefits for a year. Enjoy transparency and convenience as you maximize your savings and lifestyle enhancements.",
    },
];

const Items = [
    { label: "Deals", link: deals },
    { label: "Giveaways", link: giveaways },
    { label: "Contact Sharing", link: contactSharing },
    { label: "Profile", link: profile },
    { label: "KYC", link: kyc },
    { label: "Membership", link: membership },
];

const Faqs = () => {
    const [activeItem, setActiveItem] = useState(Items[0].label);

    function List({ Data }) {
        const [activeIndex, setActiveIndex] = useState(null);

        const toggleAccordion = (index) => {
            if (activeIndex === index) {
                setActiveIndex(null);
            } else {
                setActiveIndex(index);
            }
        };

        return (
            <div className='flex flex-col items-center justify-center w-full pt-24 pb-20'>
                <div className='flex max-w-[1240px] flex-col items-start w-full px-4'>
                    <div className="flex flex-col items-start w-full self-stretch">
                        {Data.map((item, index) => (
                            <div
                                key={item.id}
                                className={`flex flex-col relative justify-center w-full items-stretch px-5 py-6 transition-all  duration-700 ease-in-out hover:bg-[#121212] border-b-[0.3px] border-[#1E1E1E] cursor-pointer ${activeIndex === index ? "bg-[#121212]" : ""}`}
                                onClick={() => toggleAccordion(index)}
                            >
                                <div key={index} className="flex justify-between items-stretch transition-all ease-in-out duration-700" >
                                    <p className={`${activeIndex === index ? "text-[#676767] text-xs" : "text-white text-sm"} transition-all ease-in-out duration-700`}>{item.question}</p>
                                    {
                                        activeIndex === index ? (
                                            <>
                                                <FiMinus
                                                    className="text-white text-[24px] transition-all duration-700"
                                                />
                                            </>
                                        ) : (
                                            <>
                                                <RiAddLine
                                                    className="text-white text-[24px] transition-all duration-700"
                                                />
                                            </>
                                        )
                                    }
                                </div>
                                <div
                                    className={`${activeIndex === index ? "relative z-10 h-14 xs:h-20" : "-z-10 h-0"
                                        } transition-all linear duration-700 overflow-y-auto xs:pr-2`}
                                >
                                    <p className={`text-white text-sm font-normal pt-3 transition-all linear duration-700`}>{item.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div className="flex xl:justify-center items-center px-4 xl:px-0 mx-auto overflow-x-scroll bg-[#151515]">
                <div className="flex justify-center py-3 items-start gap-9">
                    <div className="flex items-center gap-1">
                        {Items.map((item) => (
                            <button
                                key={item.label}
                                className={`flex text-white px-5 py-[10px] justify-center items-center rounded-[72px] ${activeItem === item.label ? "bg-[#2C2C2C]" : "bg-transparent"
                                    } transition-all`}
                                onClick={() => setActiveItem(item.label)}
                            >
                                {item.label}
                            </button>
                        ))}
                        <div
                            className={`absolute bg-[#2C2C2C] h-1 w-1/8 rounded-full transition-transform ease-in-out duration-300 ${activeItem === "Deals"
                                ? "left-0"
                                : activeItem === "Giveaways"
                                    ? "left-1/6"
                                    : activeItem === "Contact Sharing"
                                        ? "left-2/6"
                                        : activeItem === "Profile"
                                            ? "left-3/6"
                                            : activeItem === "KYC"
                                                ? "left-4/6"
                                                : "left-5/6"
                                }`}
                        ></div>
                    </div>
                    <div className="flex px-3 py-[14px] justify-center items-end bg-white gap-1">
                        <input type="text" placeholder="Search by topic" className="text-[#BEBEBE] font-poppins text-sm font-normal leading-[150%] lowercase outline-none focus:outline-none" />
                        <CiSearch className="text-[#7e7e7e] text-lg" />
                    </div>
                </div>
            </div>
            <List
                Data={activeItem === "Deals"
                ? deals
                : activeItem === "Giveaways"
                    ? giveaways
                    : activeItem === "Contact Sharing"
                        ? contactSharing
                        : activeItem === "Profile"
                            ? profile
                            : activeItem === "KYC"
                                ? kyc
                                : membership
                }
            />
        </div>
    )
}

export default Faqs