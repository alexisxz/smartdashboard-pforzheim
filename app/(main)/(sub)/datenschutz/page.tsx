import Title from '@/components/Elements/Title'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'

// @ts-ignore
import datenschutzText from './datenschutz.md'

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-[1136px]">
      <ReactMarkdown
        components={{
          h1: props => (
            <Title as={'h2'} className="mb-2" variant={'primary'} {...props} />
          ),
          h2: props => (
            <Title as={'h3'} className="mb-2" variant={'primary'} {...props} />
          ),
          h3: props => (
            <Title as={'h4'} className="mb-2" variant={'primary'} {...props} />
          ),
          h4: props => (
            <Title as={'h5'} className="mb-2" variant={'primary'} {...props} />
          ),
          h5: props => (
            <Title as={'h6'} className="mb-2" variant={'primary'} {...props} />
          ),
          h6: props => <Title as={'h7'} className="mb-2" {...props} />,
          ul: props => <ul className="px-6 list-disc" {...props} />,
          li: props => (
            <li className="px-6 list-disc">
              <Title as="h5" className="mb-4" font={'normal'} {...props} />
            </li>
          ),
          p: props => <p className="mb-4" {...props} />,
          a: props => <a className="underline" {...props} />,
        }}
        linkTarget={'_blank'}
        remarkPlugins={[remarkGfm]}
      >
        {datenschutzText}
      </ReactMarkdown>

      {/* REMINDER: MATONO ACTIVE DATENSCHUTZ */}
      {/* <Title as={'h3'} className="mb-2" variant={'primary'}>
        Matomo Opt Out
      </Title>
      <div id="matomo-opt-out"></div>
      <Script src="https://internet-webanalyse.stadt-muenster.de/index.php?module=CoreAdminHome&action=optOutJS&divId=matomo-opt-out&language=auto&showIntro=1" /> */}
    </main>
  )
}
