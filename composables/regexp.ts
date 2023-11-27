export const RE_UPPERCASE = createRegExp(oneOrMore(letter.uppercase))
export const RE_INTEGER = createRegExp(oneOrMore(digit))

const SPECIAL_CHARS = '!@#$%^&*()-_+={}[]|:;,?\\/`~,<>'
export const RE_SPECIAL_CHAR = createRegExp(
  exactly('')
    .before(char.times.any().and(charIn(SPECIAL_CHARS)))
    .and(charIn(SPECIAL_CHARS))
)

// TODO: Fetch the data from the database for comparing names of the greenhouses
const greenhousesNames = ['Nazwa1', 'Nazwa2', 'Nazwa2']
export const RE_NEW_GRHOUSE_NAME = createRegExp(
  exactly(greenhousesNames[0])
)
