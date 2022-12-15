import styled, { ThemeProvider } from 'styled-components'
import { color } from 'styled-system'
import styledMap from 'styled-map'

const theme = {
  colors: {
    primary: 'blue',
  },
}

const Item = styled.div`
  color: ${(props) => props.theme.colors.primary};
`
const Box = styled.div`
  padding: 10px;
  ${color}
`

const buttonColor = styledMap`
  primary: #0c0;
  warning: #c00;
  info: #0cc;
  default: #ccc;
`

const Button = styled.button`
  color: ${buttonColor};
  border: 2px solid ${buttonColor};
  font-size: ${styledMap`
    large: 32px;
    small: 8px;
    medium: 18px;
    default: 16px;
  `};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Box color="#fff" bg="tomato">
          Tomato
        </Box>
        <Box color="white" bg="primary">
          Tomato
        </Box>
        <Item>Item 1</Item>
        <Button primary large>
          Submit
        </Button>
      </>
    </ThemeProvider>
  )
}

export default App
