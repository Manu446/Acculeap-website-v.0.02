'use client'

import { Phone, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface CoverageLocation {
  city: string
  country: string
  tag: string
  address: string
  phone: string
  image: string
}

export function CoverageCard({ location }: { location: CoverageLocation }) {
  const addressLine = location.address.split('\n')[0]
  const telHref = `tel:${location.phone.replace(/\s/g, '')}`

  return (
    <article
      className={cn(
        'group relative h-[300px] rounded-[1.75rem] overflow-hidden cursor-pointer',
        'border-2 border-border bg-card shadow-md',
        'transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        'hover:h-[440px] hover:border-[5px] hover:border-white hover:shadow-2xl hover:-translate-y-2',
      )}
    >
      <img
        src={location.image}
        alt={location.city}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Collapsed state */}
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-2">
        <span className="text-xl mb-0.5" aria-hidden="true">{location.country}</span>
        <h4 className="font-sora font-bold text-xl text-white">{location.city}</h4>
      </div>

      {/* Expanded hover state — travel-card layout */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
        <div className="absolute inset-x-0 bottom-0 h-[72%] bg-gradient-to-t from-black/95 via-black/65 to-transparent backdrop-blur-[2px]" />

        <div className="relative z-10 space-y-4">
          <div>
            <h3 className="font-sora font-extrabold text-[1.75rem] leading-tight text-white">
              {location.city}
            </h3>
            <p className="text-white/75 text-sm mt-1 font-medium">{location.tag}</p>
          </div>

          <div className="space-y-2.5 text-white/90 text-sm">
            <span className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 shrink-0 opacity-90" />
              {location.phone}
            </span>
            <span className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 shrink-0 opacity-90" />
              <span className="line-clamp-1">{addressLine}</span>
            </span>
          </div>

          <a
            href={telHref}
            className="block w-full py-3.5 px-6 rounded-full bg-white text-gray-900 text-center font-sora font-bold text-sm shadow-lg transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Contact office
          </a>
        </div>
      </div>
    </article>
  )
}
