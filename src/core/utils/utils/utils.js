let id = 0
export function resetID() {
  id = 0
}
export function idgen() {
  const oldId = id
  id += 1
  return oldId
}
