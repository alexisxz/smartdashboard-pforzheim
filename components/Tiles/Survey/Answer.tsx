'use client'

import AnimatedNumber from '@/components/Elements/Animated/AnimatedNumber'
import Title from '@/components/Elements/Title'
import { animated, AnimatedProps } from '@react-spring/web'
import { ComponentPropsWithRef } from 'react'

export type SurveyAnswerProps = AnimatedProps<ComponentPropsWithRef<'div'>> & {
  percent: number
  text: string
}

export default function SurveyAnswer({
  percent,
  text,
  ...props
}: SurveyAnswerProps) {
  return (
    <animated.div className="absolute left-0 top-0 w-full" style={{ ...props }}>
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <Title as="h1" className="whitespace-nowrap">
          {typeof percent === 'number' ? (
            <AnimatedNumber decimals={1}>{percent}</AnimatedNumber>
          ) : (
            <span>--</span>
          )}
          <span className="font-normal">%</span>
        </Title>
        <Title as="h4">{text}</Title>
      </div>
    </animated.div>
  )
}
