import React from 'react'

const Hero = () => {
  return (
    <div className="bg-[#F8F8F8] px-[100px] pt-[80px] pb-[184px]">
      <div className="flex w-[1240px] flex-col items-start gap-16">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-black font-poppins text-[44px] font-semibold leading-[150%]">
            YOLO Terms of Service
          </h1>
          <p className="text-black font-poppins text-xl leading-[170%] font-normal tracking-[-0.165px]">
            Last Updated : 2 Aug 2023
          </p>
        </div>
        <div className="text-black font-poppins text-base font-normal leading-[180%] tracking-[-0.165px]">
                  <p>{`Your use of the Yolo website, yolo.com (the “Website”), the Yolo application for a mobile phone, tablet, or any other portable device (the “Application”), and the Yolo Services (defined below) are subject to your compliance with Yolo’s terms and conditions of service (the “Terms of Service”). These Terms of Service constitute a legally binding agreement between Yolo Financial Technology, Inc. (“Yolo,” “we,” “our,” or “us”) and you, and describe the terms under which you agree to use the services, products, features, functions, technologies, or content offered on the Website, the Application, and all related sites and applications, regardless of how accessed, including by computer, mobile phone, tablet, or any other device (collectively, the “Yolo Services”). “Yolo Account” means the non-monetary service account in the Application, established by the Primary Accountholder, through which the Yolo Services are provided with regard to the Primary Account and any associated Secondary Account(s). The Yolo Account does not hold any consumer funds; any consumer funds related to the Yolo program described in these Terms of Service are held in the Card Account (as defined below) established and maintained by Community Federal Savings Bank on behalf of the Primary Accountholder, or in the Invest Account held by DriveWealth, LLC. PLEASE READ THESE TERMS OF SERVICE CAREFULLY.`}</p>
                  <br />
                  <h5 className='font-semibold'>Yolo Services Overview: </h5>
                  <br />
                  <p>{`Yolo Services include a prepaid account service operated and managed by Yolo that, among other features, provides the Primary Accountholder with the ability to control and monitor the Card(s), including specifically the ability to set spending parameters and approve purchases for any Secondary Account(s). “Primary Account” means the Primary Accountholder’s Card Account. The “Primary Accountholder” is the individual who opens and is responsible for the Card(s), the Primary Account, and any Secondary Account(s). A “Secondary Account” is a Card Account that serves as a sub-account of the Primary Account, established by the Primary Accountholder and utilized for the purpose of identifying, monitoring, and approving Card transactions initiated by a Secondary Cardholder. A “Secondary Cardholder” is any child or other individual for whom the Primary Accountholder serves as a legal guardian or trustee and who is authorized by the Primary Accountholder to use a Secondary Account. A “Card” means the Yolo Prepaid MasterCard issued to the Primary Accountholder by Community Federal Savings Bank (“CFSB” or the “Bank”) for a Secondary Cardholder’s use and governed by the terms and conditions of the Community Federal Savings Bank Cardholder Agreement (the “Cardholder Agreement”). “Card Account” means the records that Community Federal Savings Bank maintains to account for the value of any loads and claims associated with each Card.  These Terms of Service also cover the use of the Application to access the optional Invest Account Services (defined below) described in Schedule A. In order to offer the Invest Account Services, Yolo Investment Advisors, LLC, a Delaware limited liability company and wholly-owned subsidiary of Yolo (“Yolo Advisors”), will serve as a Securities and Exchange Commission (“SEC”) registered investment adviser, and DriveWealth, LLC (“DriveWealth”) will serve as an SEC registered broker-dealer and a member of the Financial Industry Regulatory Authority, Inc. (“FINRA”) and the Securities Investor Protection Corporation (“SIPC”). Both Yolo and Yolo Advisors do not hold any consumer funds; any funds that you may add to your Card Account are solely held by Community Federal Savings Bank, and any funds that you may add/transfer to your Invest Account (as defined below) are solely held by DriveWealth.  In addition, Virginia Surety Company, Inc., an Illinois corporation (“Virginia Surety”), will provide certain insurance coverage services in connection with the Yolo Max Plan and any higher tier plans as further described in Schedule A below. Finally, Experian Information Solutions, Inc. and/or its affiliates (collectively, “Experian”) will provide certain credit monitoring, child dark web monitoring, and full-service identity restoration services in connection with the Yolo Max Plan and any higher tier plans as further described in Schedule A below. Yolo has no ownership interest in DriveWealth, Virginia Surety, or Experian.`}</p>
        </div>
      </div>
    </div>
  );
}

export default Hero
