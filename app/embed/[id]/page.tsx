import MSLogo from '@/assets/logos/stadtlogo-muenster.png'
import Title from '@/components/Elements/Title'
import TileFactory, { TileType } from '@/utils/TileFactory'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export const revalidate = 10

export default async function Embed({ params }: { params: { id: TileType } }) {
  const { id } = params

  if (!id) {
    return notFound()
  }

  return (
    <div className="relative">
      <TileFactory type={id} />
      <div className="sticky bottom-0 right-0 flex flex-col justify-end gap-4 bg-white py-2 md:flex-row md:items-center">
        <Image
          alt="Logo der Stadt Münster"
          className="h-10 w-fit"
          src={MSLogo}
        />
        <Title as="h7" className="leading-normal" variant={'primary'}>
          Mehr Daten zum Klimaschutz und zur Klimaanpassung
          <br />
          in Münster gibt es auf{' '}
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
