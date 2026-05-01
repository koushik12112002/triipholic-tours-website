import PackageCard from '../cards/PackageCard.jsx'

export default function PackagesCarousel({ packages }) {
  const displayCards = packages.slice(0, 4)

  return (
    <div className="mt-12 w-full px-7 sm:px-10 max-w-[1500px] mx-auto pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayCards.map((pkg) => (
          <div key={pkg.id}>
            <PackageCard pkg={pkg} />
          </div>
        ))}
      </div>
    </div>
  )
}
