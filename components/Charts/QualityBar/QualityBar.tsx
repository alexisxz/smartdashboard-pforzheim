'use client'

import { cva, VariantProps } from 'class-variance-authority'

const QualityBarStyle = cva(
  'flex h-full rounded-full duration-300 ease-in-out',
  {
    variants: {
      variant: {
        primary: 'bg-white',
        mobility: 'bg-mobility',
        climate: 'bg-climate',
        building: 'bg-buildings',
        energy: 'bg-energy',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
)

type QualityBarProps = VariantProps<typeof QualityBarStyle> & {
  progress: number
}

function QualityBar({ progress }: QualityBarProps) {
  return (
    <div className="pt-4">
      <div className="relative rounded-full border-2 border-primary p-[.25rem]">
        <div className="h-5 w-full rounded-full bg-gradient-to-l from-[#f28443] via-yellow-400 to-[#34c17b]">
          <div className="relative box-border h-full w-full px-2">
            <div className="relative h-full">
              <div
                className="absolute top-[-5%] h-[110%] translate-x-[-1px] border-l-2 border-l-primary"
                style={{ left: `${progress}%` }}
              ></div>
              <div
                className="absolute top-[-22px]  translate-x-[-50%] px-2"
                style={{ left: `${progress}%` }}
              >
                <div
                  className="h-0 w-0
              border-l-[15px] border-r-[15px]
              border-t-[15px] border-climate
              border-l-transparent border-r-transparent"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between text-primary">
        <span>Geringe Belastung</span>
        <span className="text-right">Starke Belastung</span>
      </div>
    </div>
  )
}

export default QualityBar
