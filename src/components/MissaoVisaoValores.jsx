import React from 'react'
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material'

const MissaoVisaoValores = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} columns={{ xs: 4, sm: 12, md: 12 }}>
          {/* Card Missão */}
          <Grid size={{ xs: 4, sm: 12, md: 4 }}>
            <Card sx={{ height: '100%', border: '1px solid #e6003c'}}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Missão
                </Typography>
                <Typography variant="body1" color="text.secondary" whiteSpace="pre-line">
                  {`A nossa missão é impulsionar negócios, marcas e pessoas através de estratégias sólidas, inteligência de mercado e performance, gerando resultados escaláveis e sustentáveis.`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card Visão */}
          <Grid size={{ xs: 4, sm: 12, md: 4 }}>
            <Card sx={{ height: '100%', border: '1px solid #e6003c'}}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Visão
                </Typography>
                <Typography variant="body1" color="text.secondary" whiteSpace="pre-line">
                  {`Ser reconhecida como a consultoria estratégica que transforma empresas em marcas líderes, rentáveis e preparadas para os desafios do futuro digital.`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Card Valores */}
          <Grid size={{ xs: 4, sm: 12, md: 4 }}>
            <Card sx={{ height: '100%', border: '1px solid #e6003c' }}>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                  Valores
                </Typography>
                <Typography variant="body1" color="text.secondary" whiteSpace="pre-line">
                  {`Estratégia: Cada decisão é orientada por dados, planejamento e visão de mercado.\nTransparência: Relacionamentos baseados em clareza, ética e confiança.\nResultado: Foco total em performance, crescimento e escalabilidade.`}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default MissaoVisaoValores
