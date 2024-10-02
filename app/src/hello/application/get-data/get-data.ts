import Data from '../../domain/model/data'

export function getData(name: string = 'world'): Data | false {
  if (name === 'null') {
    throw new Error('name cannot be null')
  }

  return {
    text: `Hello ${name}`,
  }
}
