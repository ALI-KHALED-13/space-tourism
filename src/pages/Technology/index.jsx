import { Carousel } from "../../components/Carousel"
import { SpaceSection } from "../../components/SpaceSection"

export const Technology =({data, pageOrder})=> {
  return (
    <SpaceSection order={pageOrder} title={data.title}>
      <Carousel data={data} className="technology"/>
    </SpaceSection>
  )
}