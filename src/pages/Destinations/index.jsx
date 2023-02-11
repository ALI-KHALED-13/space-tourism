import { Carousel } from "../../components/Carousel"
import { SpaceSection } from "../../components/SpaceSection"

export const Destinations =({data, pageOrder})=> {
  return (
    <SpaceSection order={pageOrder} title={data.title}>
      <Carousel data={data} className="destinations"/>
    </SpaceSection>
  )
}