export const AT_LEAST_ONE_LETTER_UPPERCASE_REGEXP = createRegExp(oneOrMore(letter.uppercase))
export const AT_LEAST_ONE_DIGIT_REGEXP = createRegExp(oneOrMore(digit))

const REQUIRED_CHARS = '!@#$%^&*...'
export const AT_LEAST_ONE_SPECIAL_CHARACTER_REGEXP = createRegExp(
  exactly('')
    .before(char.times.any().and(charIn(REQUIRED_CHARS)))
    .and(charIn(REQUIRED_CHARS))
)
