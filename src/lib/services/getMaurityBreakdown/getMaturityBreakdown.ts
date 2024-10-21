export const getMaturityBreakdown = (mtmNist: any) => {
  const maturityBreakdown: any = {}
  if (mtmNist && mtmNist.functions) {
    mtmNist.functions.forEach((item: any) => {
      maturityBreakdown[item.name.toLowerCase()] = item
    })
  }
  return maturityBreakdown
}
