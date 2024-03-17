"use client"

import React from 'react'

const profile = ({ params }) => {
  const dealId = params.id;

  return (
    <div className="flex h-screen overflow-hidden">
      <div className={`w-1/6`}>
        <SideNavbar />
      </div>
      <div className={`w-5/6 bg-[#F8F8F8]`}>
        <EditDeals dealId={dealId} />
      </div>
    </div>
  );
}

export default profile;