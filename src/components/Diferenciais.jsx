import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

const Diferenciais = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" columns={{ xs: 4, sm: 8, md: 12 }}>

{/* Coluna direita - texto */}
          <Grid size={{ xs: 6, sm: 12, md: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Porque Somos Diferentes?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line', pb: 3 }}>
              {`Somos mais do que uma consultoria — somos parceiros estratégicos na construção de negócios sólidos, escaláveis e preparados para o futuro.\n\nUnimos dados, criatividade e tecnologia para oferecer soluções personalizadas, que conectam marcas aos seus públicos e aos seus resultados.`}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
              {`Com uma metodologia própria, alinhamos planejamento, branding e performance, garantindo que cada cliente alcance previsibilidade, autoridade e crescimento sustentável no mercado.`}
            </Typography>
          </Grid>

          {/* Coluna esquerda - imagem */}
          <Grid size={{ xs: 6, sm: 12, md: 6 }}>
            <Box
              component="img"
              src="img/world.png"
              alt="MaxStrategy"
              sx={{
                width: '100%',
                objectFit: 'contain',
                maxHeight: 300,
              }}
            />
          </Grid>

          

        </Grid>
      </Container>
    </Box>
  )
}

export default Diferenciais