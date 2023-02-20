
import { Heading2 } from "../../components/Typo"
import { StyledSection, StyledOrder} from "./styled"

export const SpaceSection =({title, order, children})=> {
  return (
    <StyledSection>
      <Heading2>
        <StyledOrder>{(order + "").padStart(2, "0")}</StyledOrder>
        {title}
      </Heading2>
      {children}
    </StyledSection>
  )
}