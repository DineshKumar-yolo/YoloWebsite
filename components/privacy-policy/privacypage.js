import React from "react";

const data = [
  {
    Particulars: "Device Information",
    "Data Collected":
      "When you sign up to use YOLO Pay Services, your computer, smartphone, or any other access device sends us your information. The data you send us may include, but is not limited to, your computer’s IP address, device ID or unique identification, device type, geo-location information, computer and connection information, mobile network information, statistics on page views, traffic to and from the sites, referral URL, ad data, standard web log data, and any other relevant information. If you allow YOLO Pay access to your mobile device’s contact list and address book, YOLO Pay may use that access to collect and store the names and contact details in your address book in order to facilitate invitations, social interactions, and payments/transfers to your contacts through our Platform as well as other uses outlined in this Policy.",
  },
  {
    Particulars: "Subscription",
    "Data Collected":
      "When you sign up, you give us the information related to subscribing for our services and features and buying our subscription packages on the platform.",
  },
  {
    Particulars: "User Profile Data",
    "Data Collected":
      "This includes your name, contact information, login name, profile image (if applicable), email address, birthday, and any other relevant information.",
  },
  {
    Particulars: "Demographic/ Geolocation Data",
    "Data Collected":
      "This includes your name, age, gender, income, occupation, and address (including city). If you enable location services, we will be able to gather location information from your mobile device, or when our Platform is running in the background on your mobile device. If you disable location services, you won’t be able to access the Platform’s crucial functions.",
  },
  {
    Particulars: "Feedback Data",
    "Data Collected":
      "This includes the data you actively put into the platform to facilitate a better quality of services and how you interact with our services: User Feedback; Calls made to our call centers that may be recorded for training and quality assurance purposes. Personal information that you enter regarding the user you have recommended when you take part in our referral programs; Account holders who make service requests on behalf of, or allow other users to make service requests for or receive service through their accounts.",
  },
  {
    Particulars: "Usage Data",
    "Data Collected":
      "This information includes the dates and times of access, the features or pages that were seen on the Platform, any system activity such as crashes, the type of browser that was used, and any third-party websites or services that were accessed prior to using our Services. We utilize web beacons and cookies to gather anonymous information as well. When you use YOLO Pay Services, including when you add information to a web form, update your account information, take part in community discussions, chats, or dispute resolutions, or when you otherwise contact us regarding YOLO Pay Services, we may collect and keep any information you give us.",
  },
  {
    Particulars: "Wallet Data",
    "Data Collected":
      "The Wallet Data may be used by us in line with the provisions of this Policy. We may gather information from you about how you use your wallet, including your transaction history, information about any services you apply for or use, loads, transfers, and spends made with the wallet, KYC information, balances, and payment information needed to transfer money through the various payment channels we offer.",
  },
  {
    Particulars: "Data from Other Sources",
    "Data Collected":
      "We could also have close relationships with outside parties (such, for instance, commercial partners, technical partners, analytics service providers, and search information providers), and we might get information about you from them. Such information might be integrated with information gathered on this platform and distributed internally.",
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#F8F8F8] xl:px-[100px] px-10 xs:px-4 pt-[80px] xs:pt-10  pb-[184px]">
      <div className="flex w-full flex-col items-start gap-16">
        <div className="flex flex-col items-start gap-2">
          <h1 className="text-black font-poppins text-[48px] font-Medium leading-[150%]">
            PRIVACY POLICY
          </h1>
          <p className="text-black font-poppins text-xl leading-[170%] font-normal tracking-[-0.165px]">
            Last Updated : 28 Oct 2023
          </p>
        </div>
        <div className="text-black font-poppins text-base font-normal leading-[180%] tracking-[-0.165px] text-justify">
          <p className="font-poppins">
            Trivy Technology Services Private Limited, a company incorporated
            under the Companies Act, 2013 vide CIN – U63030MH2020PTC336556, –
            having its corporate office at 404 B-WING,GREEN TOWER, CTS NO-216,
            NR PURAB PASCHIM BLDG GILBERT HILL ANDHERI WEST MUMBAI Mumbai City
            MH 400058 IN, hereinafter referred to as the &quot;YOLO&quot; or &quot;YOLO Pay&quot; or
            “Company” or “We” (which expression shall, unless it be repugnant to
            the context or meaning thereof, include its successors and assigns)
            owns and operates (“Website”) https://getyolo.in/privacy and our
            mobile application YOLO Pay (jointly referred to as &quot;Platform&quot;).
            Subject to the terms and conditions and user agreement set out on
            the Platform (available at: https://getyolo.in/privacy) shall be
            read along with this privacy policy (“Privacy Policy”) for any
            purpose associated with the Services. Kindly check this page
            frequently to be informed of any updates we make as we may alter our
            Policy and our Services and Platform. Please discontinue using our
            Services if you disagree with any portion of this Policy. We
            understand the importance of protecting your privacy. In order to
            provide our users (“you”, “your”) with the best quality Services, we
            need to access and retain certain information about you. The
            collection, handling, retention, and deletion of such information we
            gather from you is governed by this YOLO Pay user privacy policy. We
            are committed to safeguarding the privacy of the personal
            identifiable information that we collect, possess, use, process,
            record, store, transfer, disclose, deal, handle and receive, by and
            on behalf of our Users (as defined under the Terms and Conditions
            set out on the Platform) while rendering services to our users
            through the Platform. Accordingly, below is our Privacy Policy
            setting out how we intend to safeguard such personal identifiable
            information received and used by us as aforesaid. The Company has
            adhered to appropriate security policies and procedures and intends
            to provide the highest level of security with regard to the
            Sensitive Personal Information or Data given by the User. This is in
            compliance with the prevailing Information Technology Act, 2000 and
            the Information Technology (Reasonable Security Practices And
            Procedures And Sensitive Personal Data Or Information) Rules, 2011
            under the Information Technology Act, 2000 (“IT Act”). This Privacy
            Policy describes our privacy practices for all websites, products
            and services that are linked to it. However this policy does not
            apply to those affiliates and partners that have their own privacy
            policy. In such situations, we recommend that you read the privacy
            policy on the applicable site. Any capitalised terms not defined
            hereunder shall hold the same definition as provided under the Terms
            of Use.
          </p>
          <br />
          <h5 className="font-semibold">Information You provide us</h5>
          <br />
          <p>
            When you start using the YOLO Pay App, we ask you to provide certain
            information as part of the registration process, and in the course
            of your interface with the YOLO Pay App. We will collect this
            information through various means and in various places through the
            YOLO Pay App, including account registration forms, contact us
            forms, or when you otherwise interact with YOLO including at
            customer support. At the time of registration, we ask for the
            following personal information. Name (First Name, Last Name); Mobile
            Number; Email ID; Date of Birth; Address; Aadhaar Card/PAN Card;
            Avail of Subscription Services; Access the content on the platform.
            Pursuant to the services consumed by You from time to time, we may
            explicitly seek additional information including, payment or banking
            information, debit card details and any other governmental
            identification numbers or documents. You may choose to provide such
            information if you wish to use the services provided by the App. We
            will also maintain a record of the information you provide to us
            when using customer support services. From time to time, during your
            use of the YOLO App, YOLO may require access to certain additional
            information such as SMS and contact details. Prior to accessing any
            such additional information, explicit consent shall be sought from
            you. Please note that even after consent has been provided by you,
            we only read transactional or promotional SMS and do not open,
            access or read any personal SMS. Where you opt to provide device
            permissions such as contact list access, storage access including
            image and other media files, location and/or NFC access permission,
            YOLO may collect data from the same, store it in compliance with
            privacy laws in India and utilize the same for providing various
            services including UPI and card payment services. You retain the
            right to revoke the aforementioned access by updating access
            permissions within your device &apos;s settings. Certain features
            may be restricted, unavailable or unusable if you choose not to
            provide certain information. For example: You would not be able to
            complete e-commerce transactions involving delivery if you choose to
            not share a delivery address. YOLO may require you to provide
            Aadhaar/PAN details before claiming certain rewards. We use your
            personal information in our business operations to deliver our goods
            and services and To carry out, among other things, the following:
            <br />
            1. To speed up transactions or provide reports on them.
            <br />
            2. To enable our Services and update our Platform social features;
            services, automated actions to be triggered in certain events as
            well as their security and level of service (i.e. detecting fraud,
            account termination).
            <br />
            3. Create, update, and personalize YOLO Pay Accounts and Wallet
            Accounts, enable Wallet and other Services.
            <br />
            4. To conduct research and analytics to improve or enhance our
            product.
            <br />
            5. To provide you with information on changes to the
            products/services and their terms and conditions.
            <br />
            6. To examine and process your needs for products/services that you
            have submitted to us, or
            <br />
            7. To receive instructions or requests from you regarding these
            products/services.
            <br />
            8. To address or look into any complaints, claims, or disputes.
            <br />
            9. To enable Customer Support and related services in case of
            queries and emergencies.
            <br />
            10. To confirm your identification in order for us to deliver
            products or services to you.
            <br />
            11. To monitor periodically and review products/services.
            <br />
            12. To develop automated decision-making capabilities.
            <br />
            13. To engage in financial/regulatory/management reporting; create,
            and maintain different risk management models.
            <br />
            14. To carry out audits; To make judicious offers and promotions.
          </p>
          <p>
            Based on your requests and in accordance with our Privacy Policy and
            any other necessary confidentiality and security measures, we may
            disclose your personal information to our affiliates, other reliable
            companies, people, or service providers we engage, or institutions
            that we partner with to help us provide you with products and
            services to better meet your needs and interests. Additionally, we
            use your Personal Data to comply with any relevant laws, rules,
            court orders, or regulatory instructions that have been given to us.
            For your review, we have listed the categories of data we gather
            below.
            <br />
          </p>

          <table border={2} >
            <thead>
              <tr>
                <th>Particulars</th>
                <th>Data Collected</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index}>
                  <td><div className="my-1.5 text-left " >{item.Particulars}</div></td>
                  <td><div className="my-1.5" >{item["Data Collected"]}</div></td>
                </tr>
              ))}
            </tbody>
          </table>

          <br />
          <h5 className="font-semibold">
            Information created when You use the YOLO Pay App
          </h5>
          <br />

          <p>
            We collect information relating to your use of our website/app
            through the use of various technologies. This includes transaction
            details related to your use of our services including the type of
            services you requested, the payment method, amount and other related
            transactional and financial information. Further, depending on the
            rewards claimed by you on the transactions, we may also collect the
            reward details, transaction category etc. Further, when you visit
            our website/app, we may log certain information such as your IP
            address, browser type, mobile operating system, manufacturer and
            model of your mobile device, geolocation, preferred language, access
            time, and time spent. We will also collect information about the
            pages you view within our sites and other actions you take while
            visiting our website/app. We also maintain some records of users who
            contact us for support, for the purpose of responding to such
            queries and other related activities. However, we do not provide
            this information to any third party without your permission, or
            utilize the same for any purposes not set out hereunder. We use your
            personal information in our business operations to deliver our goods
            and services and To carry out, among other things, the following:
          </p>
          <br />
          <h5 className="font-semibold">
            Information We Collect from Third Parties
          </h5>
          <br />
          <p>
            We may, on your consent, request certain third parties to provide
            information about you to further personalize your experience on our
            website/app, and provide certain services that cannot be accessed by
            all users of the website/app. YOLO is currently open only to GenZ
            users who are in the age group 13-30 years, determined by third
            party service providers that are expressly authorised by you to
            process such information and distribute the same. If you choose to
            link and connect your email account with YOLO, we may access the
            said account for purposes including collecting your prepaid card
            transaction details such as total amount, transaction location,
            category of transaction, and balance amount, and such other
            financial and transactional information to be able to do the
            following:
            <br />
            1. Manage all your prepaid card information at one place, including
            reminders of the cash limits and spending analysis at regular
            intervals.
            <br />
            2. Curate offers and rewards that are tailored to you.
            <br />
            3. Provide an insight into your spending pattern(s) to ensure you
            are aware of your spending and can make wiser decisions basis the
            same;
            <br />
            4. Identify utility billers and insurers / insurance service
            providers you transact with to fetch your utility bill and/or
            insurance details
            <br />
            5. Curate specific financial/investment/other products for you based
            on your financial transactions, investments, and past financial
            behaviour.
            <br />
            YOLO’s access to the email account(s) is authorized through the
            email provider’s access mechanism. If you permit the YOLO
            website/app to track your prepaid card account, the YOLO website/app
            will securely store account details for each of your email accounts,
            including your sign-in user name and authorisation tokens for
            tracked accounts. You can choose to enable us to access one or more
            of your email accounts by explicitly consenting to each single
            account separately. Please note that your consent to any of the
            above is purely voluntary. You can de-link the access to your email
            any time you wish. We only read emails related to financial services
            such as prepaid card statements, wallet balance statements,
            insurance policies, biller details etc and do not open, read or
            access any personal e-mails. For the sake of clarity, YOLO employs
            automated processes for accessing and analysing information provided
            by you; where we may need to use our algorithm to access a
            password-protected document utilizing information provided by you.
            For further information on how we process email and the security
            protocol we follow click here. We may receive additional information
            about you, such as information to help detect fraud and safety
            issues, from third party service providers and/or partners, and
            combine it with information we have about you. We may receive
            information about you and your activities through partnerships, or
            about your experiences and interactions from our partner ad
            networks.
          </p>
          <br />
          <h5 className="font-semibold">
            Third Parties/ Links to Other Platforms
          </h5>
          <br />
          <p>
            Our website may contain links to other websites which are not
            maintained by us. This privacy policy only applies to us. You are
            requested to read the other websites’ privacy policies when visiting
            these websites.
          </p>
          <br />
          <h5 className="font-semibold">Subsidiaries and Holding Companies</h5>
          <br />

          <p>
            We share data with our subsidiaries and affiliates to help us
            provide our Services or conduct data processing on our behalf.
            Financial Institutions Financial institutions and Banks that we
            partner with to jointly create and offer a product. These financial
            institutions may only use this information to market YOLO Pay
            related products, unless you have given consent for other uses.
            Change in Control We could be required to divulge the databases and
            information we’ve collected during the course of our business during
            negotiations or in connection with a change in corporate control,
            such as a reorganisation, merger, or sale of our assets. Law
            Enforcement,only if required. Law enforcement, government officials,
            or other third parties pursuant to a subpoena/summon, court order,
            or other legal process or requirement applicable to YOLO Pay or one
            of its affiliates; when we need to do so to comply with law or
            debit/ credit card rules; or when we believe, in our sole
            discretion, that the disclosure of personal information is necessary
            to prevent physical harm or financial loss, to report suspected
            illegal activity or to investigate violations of our User Agreement.
          </p>
          <br />
          <h5 className="font-semibold">Control Your Data</h5>
          <br />

          <p>
            It’s crucial that you maintain control over your data. Your personal
            information belongs to you alone, and you have the right to limit
            how we use it in the ways described below. Additionally, you need to
            be aware of your legal options when it comes to how we can utilise
            your data and information. Following are some important disclaimers
            for you to consider: The owner of the third party website or
            application will get any information you provide on that website or
            application (and not directly on an YOLO Pay website) if you wish to
            establish a YOLO Pay account directly through that website or
            application. You are recommended to evaluate these sites’ privacy
            policies before supplying them with personal information since they
            are controlled by their own privacy rules. The information practises
            or the content of such third parties are not the responsibility of
            YOLO Pay. No matter where the data is stored, YOLO Pay is dedicated
            to appropriately securing your personal information and to offer the
            right level of security. Additionally, you can ask for the
            cancellation of your account by contacting the YOLO Pay Customer
            Service. If you close your YOLO Pay account, we will mark it as
            “Closed” in our database, but we may keep your personal information
            for a while in order to: collect any fees owed; settle disputes;
            troubleshoot issues; help with investigations; prevent fraud;
            enforce our User Agreement; or take other actions as required or
            permitted by law. We may ask you for your friend’s name, phone
            number, and email address if you decide to utilise our referral
            programme to let a friend know about the Website or the YOLO Pay
            Services. Your friend will instantly receive a message from us
            asking them to visit the website. We just save this data in order to
            send this message and monitor the effectiveness of our referral
            programme. The following is a list of your rights regarding your
            data: Right to Confirmation You have the right to ask us to confirm
            if we are processing any of your personal information, including
            your name, address, age, and credit/debit card numbers. Right to
            Rectification If you believe that any personal information you have
            supplied to us is erroneous, you have the right to update it and
            request that we correct it right away. To guarantee that your usage
            of our Services is perfect, we kindly ask that you always give us
            with precise and complete information/data. Right to Purge Your
            Information If the data is no longer required by us, you have the
            right to request that we purge it without undue delay, and we shall
            comply with your request. However, be assured that as soon as the
            justification for processing your personal data expires, we will
            remove it from our databases automatically. Please be aware that
            there may be many legal basis for processing your personal data
            concurrently, and we may still be required to keep part of your
            personal data on file. Right to the Restriction of Data Processing
            You have the right to require us to restrict the usage of data when
            the use of such data may be illegal or when such data is inaccurate.
            Right to Withdraw Consent You always have the choice to revoke or
            withdraw your consent for us to handle your data when using our
            services or in another way. However, we retain the right not to
            offer the Services for which such information was obtained if you
            withdraw your permission. You can write an email to us at
            team@getyolo.in to revoke your permission. Upon receiving a
            confirmation from us, your withdrawal will take effect. Right to Opt
            Out By emailing us at team@getyolo.in, you may tell us that you no
            longer want to receive promotional communications from us. By
            following the unsubscribe instructions in such messages, you may
            also choose not to receive emails and other communications from us.
            However, we will still send you non-promotional emails even if you
            have chosen not to receive information from us. Right to Restrict
            Location Information While you can prevent your device from sharing
            location information at any time through its operating system
            settings, sharing such location is core to how the Platform works
            and without it, we cannot provide our Services accurately and
            efficiently to you.
          </p>
          <br />
          <h5 className="font-semibold">Refund and Cancellations</h5>
          <br />

          <p>
            Complete client satisfaction is what we prioritise. If you are
            unhappy with our services, we will return your money as long as your
            complaints are valid after a thorough investigation. The following
            is our cancellation and refund policy: Policy on Cancellations:
            Please email us with any cancellation requests at team@getyolo.in.
            Customers are free to cancel their YOLO Pay cards and ask for a
            refund if they are unhappy with our services. After deducting the
            cost of the card’s printing and logistics, a refund will be given.
          </p>
          <br />
          <h5 className="font-semibold">
            Updates or Modifications to this Policy
          </h5>
          <br />

          <p>
            This Policy may occasionally be updated. To the extent permitted by
            law, using our services following an update implies acceptance of
            the new notice. If we make any major changes, we’ll let you know
            ahead of time. For up-to-date details on our privacy policies,
            kindly take the time to periodically check our Policy.
          </p>
          <br />
          <h5 className="font-semibold">Contact Us</h5>
          <br />

          <p>
            We may from time to time send you service-related announcements when
            we consider it necessary to do so (such as when we temporarily
            suspend the Platform for maintenance, security, privacy, or
            administrative-related communications). We send these to you via SMS
            or email, as we deem fit. We have appointed a grievance officer to
            address your concerns regarding data safety, and privacy with regard
            to your YOLO Pay Account. You may contact us on any aspect of this
            policy or for any discrepancies/grievances with respect to your
            Personal Data, by contacting our Grievance Officer at: Email
            address: team@getyolo.in Office hours: 10:00 A.M. to 06:30 P.M.
          </p>
          <br />
          <h5 className="font-semibold">Grievance Redressal Officer</h5>
          <br />

          <p>
            In the event that you have a grievance regarding our privacy policy
            or data usage practices, you may reach out to our Grievance
            Redressal Officer at the details below: Grievance Redressal Officer:
            Mr. Shivansh Agarwal Email: grievanceofficer@getyolo.in Grievance
            Redressal Officer shall redress the grievances within one month from
            the date of receipt of the said grievance.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
