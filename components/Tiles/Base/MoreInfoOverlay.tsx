'use client'

import MoreDetails from '@/components/Elements/MoreDetails'
import Title from '@/components/Elements/Title'
import useDevice from '@/hooks/useDevice'
import { AnimatedProps } from '@react-spring/web'
import { cx, VariantProps } from 'class-variance-authority'
import React, { ComponentPropsWithRef } from 'react'
import BaseOverlay, { overlayStyle } from './BaseOverlay'

type MoreInfoOverlayProps = VariantProps<typeof overlayStyle> &
  AnimatedProps<ComponentPropsWithRef<'div'>> & {
    onClose?: () => void
    children?: React.ReactNode | React.ReactNode[]
    isFullWidth?: boolean
  }

export default function MoreInfoOverlay({
  onClose,
  children,
  isFullWidth,
  ...props
}: MoreInfoOverlayProps) {
  const device = useDevice()

  return (
    <BaseOverlay onClose={onClose} {...props}>
      <div className="flex flex-col h-full">
        <div
          className={cx(
            'no-scrollbar h-full flex-1 overflow-scroll',
            isFullWidth && device === 'desktop' ? 'column-fill-auto ' : '',
          )}
        >
          <Title as="h5" variant={'inverse'}>
            {children}
          </Title>
        </div>
        <div className="flex justify-center w-full mt-2">
          <MoreDetails
            lessDetails={true}
            onClick={onClose}
            variant={'inverse'}
          />
        </div>
      </div>
    </BaseOverlay>
  )
}
