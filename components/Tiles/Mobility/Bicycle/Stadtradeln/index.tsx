import { Spacer } from '@/components/Elements/Spacer'
import Title from '@/components/Elements/Title'
import MobilityTile from '@/components/Tiles/Mobility/MobilityTile'
import { format } from 'date-fns'
import ChartContainer from './ChartContainer'

export default async function StadtradelnTile() {
  return (
    <MobilityTile
      dataRetrieval={format(new Date(), '01.MM.yyyy')}
      dataSource="Stadtradeln"
      embedId="mobility-stadtradeln"
      moreInfoText={
        <div className="font-normal">
          <div className="font-semibold">
            STADTRADELN – Geradelte Kilometer in Pforzheim im Städtevergleich
          </div>
          <br />
          <div>
            Die Grafik zeigt,{' '}
            <span className="font-semibold">
              wie viele Kilometer beim STADTRADELN in Pforzheim
            </span>{' '}
            in den jeweiligen Jahren insgesamt mit dem Fahrrad zurückgelegt
            wurden. Zusätzlich wird dargestellt,{' '}
            <span className="font-semibold">
              wie Pforzheim im Vergleich zu anderen Städten abgeschnitten hat.
            </span>
          </div>
          <br />
          <div>
            STADTRADELN ist eine bundesweite Aktion, bei der Bürger und
            Bürgerinnen 21 Tage lang möglichst viele Alltagswege mit dem Fahrrad
            zurücklegen. Die gefahrenen Kilometer werden digital erfasst und
            fließen in die Wertung einzelner Teams, Städte und Kommunen ein.
          </div>
          <br />
          <div>
            Der Vergleich macht sichtbar,{' '}
            <span className="font-semibold">
              wie aktiv Pforzheim im Radverkehr ist
            </span>{' '}
            und wie sich das Engagement über die Jahre entwickelt hat.
            Gleichzeitig zeigt er, wie sich die Stadt im bundesweiten Wettbewerb
            positioniert.
          </div>
        </div>
      }
      subtitle="auf der Überholspur"
      title="Stadtradeln"
    >
      <ChartContainer />
      <Spacer />
      {/* <Title as="h5">{infoText}</Title> */}
      <Title as="h5">
        Auf die Plätze, fertig, los! Für mehr Radverkehr, Klimaschutz und
        Lebensqualität in die Pedale treten: Seit 2020 beteiligt sich die Stadt
        Pforzheim an der jährlich stattfindenden, dreiwöchigen bundesweiten
        Aktion „STADTRADELN“ des globalen Netzwerks „Klima-Bündnis“.
      </Title>
    </MobilityTile>
  )
}
