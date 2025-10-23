import Image from "next/image"

const stats = [
    { stat: '100%', description: 'Client Satisfaction' },
    { stat: '85', description: 'Body Transformations' },
    { stat: '100%', description: 'Goal Achievement' }
  ]
export default function StatsWithImage() {
    return(
        <div className="hidden md:block p-15 bg-gray-100/10 mb-20 backdrop-blur-xl">
              <div className="md:flex lg:flex-row gap-10">
                {stats.map((item, index) => 
                  <div className="flex-1 text-center lg:text-left" key={index}>
                    <div>
                      <div className="text-red-700 text-3xl font-bold">
                        {item.stat}
                      </div>
                      <p className="text-lg">
                        {item.description}
                      </p>
                    </div>
                    
                  </div>
                  
                )}
                <Image
                  alt="Fitness"
                  src={'/images/curls.jpg'}
                  width={200}
                  height={100}
                  className="hidden lg:flex md:-m-15 md:w-auto"
                />
              </div> 
                
                  
          </div>
    )
}
