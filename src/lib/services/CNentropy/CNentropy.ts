import zxcvbn from 'zxcvbn'

const CNentropy = (input: any) => {
  const minScore = 3

  const entropy = zxcvbn(input, ['Consortium']).score
  return entropy >= minScore
}

export default CNentropy
