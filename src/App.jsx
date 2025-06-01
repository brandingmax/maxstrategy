import React from 'react'
import { Container, Box, CssBaseline, useTheme, useMediaQuery } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Navbar from './components/Navbar'
import HeroSplit from './components/HeroSplit'
import Features from './components/Features'
import Sobre from './components/Sobre'
import MissaoVisaoValores from './components/MissaoVisaoValores'
import Diferenciais from './components/Diferenciais'
import ComoAtuamos from './components/ComoAtuamos'
import UniqueSection from './components/UniqueSection'
import CTA from './components/CTA'
import Footer from './components/Footer'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  // hooks usados aqui, dentro do componente funcional
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  // Agora você pode usar isMobile para renderizar algo condicional, alterar estilos etc

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <HeroSplit />
          <ComoAtuamos />
          <UniqueSection />
          <Sobre />
          <Diferenciais />
          <MissaoVisaoValores />
          <CTA />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
