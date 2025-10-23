const stats = [
    { name: 'Number of Clients', value: '405' },
    { name: 'Years of Experience', value: '10', unit: 'Years' },
    { name: 'Google Reviews', value: '5/5' },
    { name: 'Success rate', value: '100%' },
  ]
  
  export default function SalesStats() {
    return (
      <div className="">
        <div className="mx-auto">
          <div className="grid grid-cols-1 gap-[1px] py-[1px] bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="bg-gray-900 px-4 py-6 sm:px-8 lg:px-10">
                <p className="text-sm/6 font-medium text-gray-200">{stat.name}</p>
                <p className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-semibold tracking-tight text-[#f0b000]">{stat.value}</span>
                  {stat.unit ? <span className="text-sm text-gray-200">{stat.unit}</span> : null}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  