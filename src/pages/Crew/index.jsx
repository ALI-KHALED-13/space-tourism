import { Carousel } from "../../components/Carousel"
import { SpaceSection } from "../../components/SpaceSection"

export const Crew =({data, pageOrder})=> {
  return (
    <SpaceSection order={pageOrder} title={data.title}>
      <Carousel data={data} className="crew"/>
    </SpaceSection>
  )
}