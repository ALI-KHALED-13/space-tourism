

export const getBreakPoint =(BPString)=> {
  const breakpoints = {
    "md": 768,
    "lg": 1440
  }
  return breakpoints[BPString]
}

export const mediaQuery =(breakPoint)=> {
  return `@media only screen and (min-width: ${getBreakPoint(breakPoint)}px)`;
}