import Title from '@/components/Elements/Title'
import TileFactory, { TileType } from '@/utils/TileFactory'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import MSLogo from '@/assets/logos/stadtlogo-muenster.png'
import Image from 'next/image'

export const revalidate = 10

export default async function Embed({ params }: { params: { id: TileType } }) {
  const { id } = params

  if (!id) {
    return notFound()
  }

  return (
    <div>
      <TileFactory type={id} />
      <div className="mt-4 flex h-full w-full flex-col justify-end gap-4 md:flex-row md:items-center">
        <Image
          alt="Logo der Stadt Münster"
          className="h-10 w-fit"
          src={MSLogo}
        />
        <Title as="h7" className="leading-normal" variant={'primary'}>
          mehr Infos zu den Klimadaten aus Münster
          <br />
          findet ihr auf{' '}
          <Link
            className="underline"
            href="https://klimadashboard.ms/"
            target="_blank"
          >
            klimadashboard.ms
          </Link>
        </Title>
      </div>
    </div>
  )
}
