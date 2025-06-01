import React from 'react'
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material'

const featuresData = [
  {
    title: 'Consultoria Estratégica',
    description:
      'Desenvolvemos planejamentos de marketing, posicionamento e crescimento, alinhando seu negócio à performance e escalabilidade.',
  },
  {
    title: 'Inteligência de Mercado',
    description:
      'Análise de dados, tendências e comportamento de mercado para orientar decisões e acelerar resultados.',
  },
  {
    title: 'Gestão de Performance',
    description:
      'Estratégias para tráfego pago, funis de vendas e campanhas que geram conversões, otimizando investimentos.',
  },
  {
    title: 'Operação de Marketing',
    description:
      'Estruturamos e gerenciamos sua operação de marketing digital, integrando processos, ferramentas e execução ágil.',
  },
]

const Features = () => {
  return (
    <Box sx={{ py: 5}}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Soluções MaxStrategy
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          Estratégia, inteligência e performance para transformar negócios em marcas líderes e lucrativas.
        </Typography>

        <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }}>
          {featuresData.map(({ title, description }) => (
            <Grid size={{ xs: 4, sm: 12, md: 6 }}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  px: 2,
                  py: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: '600' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Features
