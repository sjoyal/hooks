const TEAL = 'teal'

export const bodyStyle = {
  display: 'flex',
  height: '100vh',
  width: '100vw',
}

export const buttonStyle = {
  marginRight: '.5rem',
  padding: '.8rem 1.6rem',
  border: 'none',
  borderRadius: '.3rem',
  backgroundColor: TEAL,
  color: '#fff',
  cursor: 'pointer',
}

export const contentStyle = {
  height: '100%',
  width: 'calc(100% - 30rem)',
}

export const ellipsisStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}

export const gutterStyle = {
  padding: '0 1.5rem',
}

export const headerStyle = {
  margin: '0',
  padding: '1.5rem',
}

export const inputStyle = {
  width: '20rem',
  marginRight: '1rem',
  padding: '.8rem .4rem',
}

export const linkStyle = {
  padding: '.5rem 0',
  fontStyle: 'italic',
}

export const listStyle = {
  padding: 0,
  width: '30rem',
}

export const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '.5rem',
  padding: '.8rem',
  backgroundColor: '#f5f5f5',
  borderRadius: '.2rem',
}

export const navStyle = {
  height: '100%',
  width: '30rem',
  backgroundColor: '#f5f5f5',
}

export const strippedButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'transparent',
  color: 'inherit',
  cursor: 'pointer',
  textDecoration: 'underline',
}

export const navHeaderStyle = {
  ...headerStyle,
  backgroundColor: TEAL,
  color: '#fff',
}

export const subHeaderStyle = {
  ...headerStyle,
  padding: '.75rem 0',
  fontWeight: 500,
}

export const checkboxStyle = {
  ...inputStyle,
  width: 'auto',
}
