import React from 'react'
import { Container, Typography, Grid, Paper, Box } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import BrushIcon from '@mui/icons-material/Brush'
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark'

const uniqueCards = [
  {
    icon: <CodeIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'NeoCodify - Desenvolvimento de Software',
    description: 'Fornecemos soluções tecnológicas personalizadas para empresas e startups. Criamos blocos de código, protótipos e módulos que aceleram projetos digitais, garantindo escalabilidade, eficiência e inovação no desenvolvimento de software.',
  },
  {
    icon: <BrushIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Vizzuary - Agência de Design',
    description: 'Transformamos ideias em design impactante e funcional. Atuamos com criação de identidades visuais, branding, design gráfico e digital, ajudando marcas a comunicarem sua essência com criatividade e profissionalismo.',
  },
  {
    icon: <BrandingWatermarkIcon color="primary" sx={{ fontSize: 40 }} />,
    title: 'Identgraff - Plataforma de Gráficas e Papelarias',
    description: 'Conectamos empresas a uma rede qualificada de gráficas e papelarias, facilitando a contratação de serviços gráficos com qualidade, agilidade e preços competitivos. Otimizamos processos para que marcas produzam materiais impressos com excelência.',
  },
]

export default function UniqueSection() {
  return (
    <Box sx={{ backgroundColor: '#121212', color: '#fff', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
          Conexões Estratégicas
        </Typography>
        <Typography variant="subtitle1" gutterBottom sx={{ mb: 6, color: 'gray' }}>
          Na BrandingMax Co., a força está na união das nossas expertises. Através da conexão entre NeoCodify, Vizzuary e Identgraff, oferecemos soluções completas que vão desde a tecnologia até o design, garantindo um posicionamento forte e integrado para nossos clientes.
        </Typography>

        <Grid container spacing={4} justifyContent="center" columns={{ xs: 3, sm: 6, md: 9 }}>
          {uniqueCards.map(({ icon, title, description }, index) => (
            <Grid key={index} size={3}>
              <Paper sx={{ p: 3, height: '100%', bgcolor: '#080808', border: '1px solid #e6003c' }} elevation={3}>
                <Box sx={{ mb: 2 }}>{icon}</Box>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="grey.200">
                  {description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
