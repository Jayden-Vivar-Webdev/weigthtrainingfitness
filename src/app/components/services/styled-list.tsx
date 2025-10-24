import React from 'react';

const services = [
    {
      id: 1,
      name: '1 x Personal Training Session',
      href: '/services#pt',
      price: '$100',
      description: 'Personalised Session',
      imageSrc: '/images/personal-training.jpg',
      imageAlt: 'Full personalised session based on clients needs',
    },
    {
      id: 2,
      name: '5 x Personal Training Sessions',
      href: '/services#weeklypt',
      price: '$250',
      description: 'Locked In Price',
      imageSrc: '/images/5xsessions.jpg',
      imageAlt: 'Full Week Personal Training',
    },
    {
      id: 3,
      name: 'Mobile Personal Training',
      href: '/services#mobilept',
      price: 'Contact',
      description: 'Bringing Personal Training To You',
      imageSrc: '/images/mobile-personal-trainer.jpg',
      imageAlt: 'Fully customised personal training that is Mobile',
    },
    {
      id: 4,
      name: 'In House Pantry Clear Out',
      href: '/services#pantryclearout',
      price: 'Contact',
      description: 'Customised Clean Out & Groceries List',
      imageSrc: '/images/pantry.jpg',
      imageAlt: 'Full customised pantry clean out with groceries list',
    },
  ]

export default function StyledServiceList() {
  return (
    <div className="bg-black">
      <div className="mx-auto">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 pt-10">
          {services.map((product) => (
            <a 
              key={product.id} 
              href={product.href} 
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full overflow-hidden rounded-lg object-cover sm:aspect-[2/3] transition-all duration-500 group-hover:scale-105"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(198, 2, 2, 0.2)'
                  }}
                />
                
                {/* Shine effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)',
                    transform: 'translateX(-100%)',
                    animation: 'shine 1.5s ease-in-out infinite'
                  }}
                ></div>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-base font-medium text-white">
                <h3 className="transition-all duration-300 text-red-500" style={{
                  textShadow: '0 0 10px rgba(198, 2, 2, 0.5)'
                }}>
                  {product.name}
                </h3>
                <p className="font-bold transition-all duration-300" style={{
                }}>
                  {product.price}
                </p>
              </div>
              
              <p className="mt-1 text-sm italic text-gray-100 transition-colors duration-300">
                {product.description}
              </p>
              
              {/* Red accent line at bottom */}
              <div 
                className="mt-3 h-0.5 w-0 w-full transition-all duration-500 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #ff0000 0%, #cc0000 100%)',
                  boxShadow: '0 0 10px rgba(198, 2, 2, 0.8)'
                }}
              ></div>
            </a>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}