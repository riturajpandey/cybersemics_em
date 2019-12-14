import { head } from './head.js'

/** Sums the length of all items in the list of items. */
// works on children with key or context
export const sumChildrenLength = children => children.reduce((accum, child) =>
  accum + (
    'key' in child ? child.key.length
    : child.context.length > 0 ? head(child.context).length
    : 0
  )
, 0)