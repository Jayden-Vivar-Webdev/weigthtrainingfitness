'use client'
import EnhancedProductGrid from "./styled-list"
import Image from "next/image"
export default function ServiceList() {
    return (
        <>
        {/* <div className="tag-wrap">
          <span className="tag-sm">
          </span>
          <span className="tag tag">
              Professional Services
          </span>
        </div> */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-10 pt-10 md:pt-25 space-y-6 z-[10]">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base py-5 font-semibold text-red-400">Professional Services</h2>
          <p className="lg:mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-balance sm:text-5xl">
            Our Services
          </p>
          <p className="mt-6 para-text">
            We will help you get in shape. We have proven results with clients. Reach out and if you have time book an in person PT session.
          </p>
        </div>
        
        
        </div>

        <div className="relative min-h-[600px] pb-40">
          <Image
            alt="Personal Training Programs"
            src="/images/push-press.jpg"
            fill
            className="absolute inset-0 size-full object-cover opacity-[0.15] [mask-image:linear-gradient(to_top,black_50%,transparent_100%)]"
          />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
        
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-16 lg:px-8">

            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            
            <EnhancedProductGrid/>
          </div>
        </div>
        
      </>
    )
  }
  