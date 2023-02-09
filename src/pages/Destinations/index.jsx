import { Carousel } from "../../components/Carousel"
import { Heading5 } from "../../components/Typo"
import { StyledSection, StyledOrder} from "./styled"

export const Destinations =({data, pageOrder})=> {
  return (
    <StyledSection>
      <Heading5>
        <StyledOrder> 0{pageOrder} </StyledOrder>
        {data.title}
      </Heading5>

      <Carousel data={data}/>
    </StyledSection>
  )
}