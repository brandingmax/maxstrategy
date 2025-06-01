import React from 'react'
import { Box, Grid, Typography, Button, Container } from '@mui/material'

const HeroSplit = () => {
  return (
    <Box sx={{ backgroundColor: '#0D0D0D', color: '#fff', mt: 5, py: 4, px: 2 }}>
      <Container maxWidth="lg" alignItems="center">
        <Grid container spacing={4} alignItems="center" columns={{ xs: 4, sm: 12, md: 12 }}>
          {/* Coluna esquerda */}
          <Grid size={{ xs: 6, sm: 12, md: 6 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              Estratégia, Performance e Resultado
            </Typography>
            <Typography variant="body" color="" paragraph>
              Aceleramos negócios com estratégias personalizadas, unindo marketing, publicidade e inteligência de mercado. Potencializamos sua marca, ampliamos suas vendas e posicionamos você com clareza no mercado.
            </Typography>
                <Button
                component="a"
                href="https://wa.me/5511950604767"
                target="_blank"
                rel="noopener noreferrer"
                variant="contained"
                sx={{
                    mt: 3,
                    backgroundColor: '#e6003c',
                    color: '#fff',
                    '&:hover': {
                    backgroundColor: '#e6003c',
                    color: '#fff',
                    boxShadow: '0 0 8px 3px #99002a'
                    },
                }}
                >
                Fale com um Especialista
                </Button>

          </Grid>

          {/* Coluna direita - vídeo ou imagem */}
          <Grid size={{ xs: 6, sm: 12, md: 6 }}>
            <Box
              component="img"
              src="/img/headerimg.png"
              alt="MaxStrategy"
              sx={{
                width: '100%',
                objectFit: 'contain',
                maxHeight: 300,
              }}
            />
              {/*
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Vídeo Institucional"
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 'none',
  }}
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
</Box>
*/}
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default HeroSplit
