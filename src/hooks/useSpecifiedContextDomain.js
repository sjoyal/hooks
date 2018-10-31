import { useContext } from 'react'

export default function useSpecifiedContextDomain(ctxObj, domain) {
  const ctx = useContext(ctxObj)

  return [].concat(domain).reduce(
    (prevObj, d) => ({
      ...prevObj,
      [d]: ctx[d] || [],
    }),
    {},
  )
}
