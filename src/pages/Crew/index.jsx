import { Carousel } from "../../components/Carousel"
import { Heading5 } from "../../components/Typo"

export const Crew =({data, pageOrder})=> {
  return (
    <section>
      <Heading5>
        {data.title}
      </Heading5>

      <Carousel data={data}/>
    </section>
  )
}