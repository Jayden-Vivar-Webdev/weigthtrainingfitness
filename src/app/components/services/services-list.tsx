'use client'
import EnhancedProductGrid from "./styled-list"
import Image from "next/image"
export default function ServiceList() {
    return (
        <>
        <div className="relative min-h-[600px] lg:pb-40">
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
  