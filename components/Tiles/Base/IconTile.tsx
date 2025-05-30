import 'server-only'

import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import getTileData from '@/lib/api/getTileData'
import { cva, cx, VariantProps } from 'class-variance-authority'
import { ForwardRefExoticComponent, SVGProps } from 'react'
import { BaseTile, EmbedTileProps } from './BaseTile'
import { TileSplitView } from './TileSplitView'

const iconTileTitleStyle = cva('', {
  variants: {
    variant: {
      primary: 'text-primary',
      mobility: 'text-mobility',
      successStory: 'text-primary',
      climate: 'text-climate',
      building: 'text-buildings',
      energy: 'text-energy',
      data: 'text-secondary',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export type DataSourceProps = {
  dataRetrieval?: string
  dataSource: string
}

export type IconTileProps = VariantProps<typeof iconTileTitleStyle> &
  DataSourceProps &
  EmbedTileProps & {
    children: React.ReactElement | React.ReactElement[]
    title?: string | React.ReactElement
    subtitle?: string | React.ReactElement
    icon:
      | ForwardRefExoticComponent<SVGProps<SVGSVGElement>>
      | ((_props: SVGProps<SVGSVGElement>) => JSX.Element)
    live?: boolean
    rightAlignedExtra?: React.ReactElement
  }

/**
 * A tile that has an icon on top right
 * @param IconTileProps properties of the Icon tile
 * @returns Mobility Tile
 */
export default async function IconTile({
  children,
  live,
  title,
  subtitle,
  icon,
  variant,
  dataRetrieval,
  dataSource,
  embedId,
  rightAlignedExtra,
}: IconTileProps) {
  const Icon = icon

  const data = await getTileData(embedId!)

  return (
    <BaseTile
      embedId={embedId}
      isFullWidth={data?.full_width}
      // REMINDER: Removed the more info and source to be downloaded
      // moreInfo={data?.details}
      // source={data?.data_url}
      variant={variant}
    >
      <div className="px-2.5">
        <div className="absolute hidden right-16 top-16 lg:block">
          <Icon
            className={cx(
              'h-[29px] w-auto flex-shrink-0 opacity-40 md:h-[50px]',
              iconTileTitleStyle({ variant }),
            )}
          />
        </div>
        {title && (
          <div className="relative flex items-center justify-between">
            <div className="flex flex-wrap items-center justify-start gap-x-4 lg:max-w-[87%]">
              <Title
                as={'h1'}
                className={cx('min-w-fit', iconTileTitleStyle({ variant }))}
                font={'normal'}
              >
                {title}
              </Title>
              {subtitle && (
                <Title
                  as={'subtitle'}
                  className="2xl:max-w-[85%]"
                  color={'dark'}
                >
                  {subtitle}
                </Title>
              )}
            </div>

            {/* <Icon
              className={cx(
                'absolute right-0 top-0 hidden h-[29px] w-auto flex-shrink-0 opacity-40 md:h-[50px] 2xl:block',
                iconTileTitleStyle({ variant }),
              )}
            /> */}
          </div>
        )}
        {(title || subtitle) && <Spacer />}
      </div>
      <>
        {!title && !subtitle && (
          <div className={cx('relative', iconTileTitleStyle({ variant }))}>
            <Icon className=" absolute right-0 top-0 hidden h-[50px] w-auto opacity-40 2xl:block" />
          </div>
        )}
      </>

      <>{children}</>
      <Spacer />
      <TileSplitView>
        <TileSplitView.Left>
          <div className="flex flex-wrap justify-between">
            <div className="space-x-2 text-xs ">
              <Title
                as="h7"
                className="inline"
                font="semibold"
                variant={'primary'}
              >
                Datenstand: {dataRetrieval ?? (live ? 'live' : 'undefined')}
              </Title>
              <Title
                as="h7"
                className="inline"
                font="normal"
                variant={'primary'}
              >
                Quelle: {dataSource}
              </Title>
            </div>
            <div>{rightAlignedExtra}</div>
          </div>
        </TileSplitView.Left>
        {/* @TODO : Check if we needed this, removing fixes layout issues. */}
        {/* <div className="w-[272px]" /> */}
      </TileSplitView>
    </BaseTile>
  )
}
