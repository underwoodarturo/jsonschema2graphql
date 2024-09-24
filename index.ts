import { printSchema } from 'graphql'
import convert from './src/index'

const jsonSchema = {
  $id: '#/person',
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    age: {
      type: 'integer',
    },
  },
} as any

const schema = convert({ jsonSchema })

console.log(printSchema(schema))