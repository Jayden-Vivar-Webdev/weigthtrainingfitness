'use client'

import ServiceContent from "@/app/components/content/service-content";
import MobilePt from "@/app/components/content/service-mobile";
import ServicesHero from "@/app/components/hero-sections/hero-services";
import ServiceList from "@/app/components/services/services-list";

export default function Services(){
  return(
    <>
        <ServicesHero/>
        <ServiceList/>
        <ServiceContent />
        <MobilePt />
        
    </>
  )
}