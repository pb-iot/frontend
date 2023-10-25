export const useAtLeastOneLetterUppercase = () => {
  return createRegExp(oneOrMore(letter.uppercase))
}

export const useAtLeastOneDigit = () => {
  return createRegExp(oneOrMore(digit))
}

export const useAtLeastOneSpecialCharacter = () => {
  return createRegExp(oneOrMore('.')
    .or(oneOrMore('!'))
    .or(oneOrMore('@'))
    .or(oneOrMore('#'))
    .or(oneOrMore('$'))
    .or(oneOrMore('%'))
    .or(oneOrMore('^'))
    .or(oneOrMore('&'))
    .or(oneOrMore('*'))
    .or(oneOrMore('('))
    .or(oneOrMore(')'))
    .or(oneOrMore('-'))
    .or(oneOrMore('_'))
    .or(oneOrMore('+'))
    .or(oneOrMore('='))
    .or(oneOrMore('{'))
    .or(oneOrMore('}'))
    .or(oneOrMore('['))
    .or(oneOrMore(']'))
    .or(oneOrMore('|'))
    .or(oneOrMore('\\'))
    .or(oneOrMore(':'))
    .or(oneOrMore(';'))
    .or(oneOrMore('"'))
    .or(oneOrMore('\''))
    .or(oneOrMore('<'))
    .or(oneOrMore('>'))
    .or(oneOrMore(','))
    .or(oneOrMore('.'))
    .or(oneOrMore('/'))
    .or(oneOrMore('?')))
}
