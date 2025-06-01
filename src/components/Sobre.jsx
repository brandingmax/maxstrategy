import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

const Sobre = () => {
  return (
    <Box sx={{ py: 3, backgroundColor: '#222',}}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" columns={{ xs: 4, sm: 12, md: 12 }}>

          {/* Coluna direita - imagem */}
          <Grid size={{ xs: 5, sm: 12, md: 5 }} alignItems="center">
            <Box
              component="img"
              src="/img/man2.png"
              alt="MaxStrategy"
              sx={{
                width: '100%',
                objectFit: 'contain',
                maxHeight: 300,
              }}
            />
          </Grid>
          {/* Coluna esquerda - texto */}
          <Grid size={{ xs: 7, sm: 12, md: 7 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
              Consultoria que Impulsiona Resultados
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ whiteSpace: 'pre-line' }}>
              {`A MaxStrategy é uma consultoria estratégica de marketing e publicidade que conecta inteligência de mercado, criatividade e performance. Atuamos como uma extensão do seu negócio, desenhando estratégias personalizadas para acelerar vendas, fortalecer sua marca e gerar resultados consistentes e escaláveis.

Nossa equipe alia experiência e tecnologia para analisar dados, identificar oportunidades e planejar ações focadas no crescimento sustentável do seu negócio. Com métodos ágeis e inovadores, entregamos soluções que vão desde o posicionamento de marca até a execução de campanhas digitais e off-line.
`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Sobre
