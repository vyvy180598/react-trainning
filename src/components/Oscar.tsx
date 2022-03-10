// Prop children

type OscarProps = {
  children: React.ReactNode
}

export function Oscar(props: OscarProps) {
  return <div>{props.children}</div>;
}
