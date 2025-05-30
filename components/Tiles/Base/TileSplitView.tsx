import { cx } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

export function TileSplitView(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cx('flex flex-col gap-10 lg:flex-row', props.className)}
    />
  )
}

TileSplitView.Left = function LeftView(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className={cx(props.className, 'flex-1')} />
}

TileSplitView.Right = function Rightiew(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} className="lg:max-w-[272px]" />
}
