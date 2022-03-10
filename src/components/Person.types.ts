// Extract type Name for reusing
export type Name = {
  first?: string
  last: string
}

export type PersonProps = {
  name: Name
  job: string
  age: number
  isLoggedIn: boolean
}
