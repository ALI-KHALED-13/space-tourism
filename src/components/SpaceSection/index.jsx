
import { Heading2 } from "../../components/Typo"
import { StyledSection, StyledOrder} from "./styled"

export const SpaceSection =({title, order, children})=> {
  return (
    <StyledSection>
      <Heading2>
        <StyledOrder>{order > 9 ? order: "0" + order}</StyledOrder>
        {title}
      </Heading2>
      {children}
    </StyledSection>
  )
}