export const RE_UPPERCASE = createRegExp(oneOrMore(letter.uppercase))
export const RE_INTEGER = createRegExp(oneOrMore(digit))

const REQUIRED_CHARS = '!@#$%^&*()-_+={}[]|:;,?'
export const RE_SPECIAL_CHAR = createRegExp(
  exactly('')
    .before(char.times.any().and(charIn(REQUIRED_CHARS)))
    .and(charIn(REQUIRED_CHARS))
)
