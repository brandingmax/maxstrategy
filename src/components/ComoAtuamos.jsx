import React from 'react'
import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

const ComoAtuamos = () => {
  const cards = [
    {
      icon: <TravelExploreIcon color="#e6003c" sx={{ fontSize: 40 }} />,
      title: 'Posicionamento Estratégico de Marca',
      description: `Ajudamos empresas a construírem um posicionamento sólido, alinhado com seu propósito, diferenciais e objetivos de mercado. Trabalhamos desde o planejamento até a comunicação, garantindo clareza, relevância e conexão com o público ideal.`,
    },
    {
      icon: <TrendingUpIcon color="#e6003c" sx={{ fontSize: 40 }} />,
      title: 'Performance e Escalabilidade',
      description: `Desenvolvemos estratégias de marketing orientadas por dados e metas, focando em geração de leads, vendas e crescimento sustentável. Otimizamos processos, criamos campanhas de alta conversão e ampliamos os canais digitais para acelerar resultados.`,
    },
    {
      icon: <Diversity3Icon color="#e6003c" sx={{ fontSize: 40 }} />,
      title: 'Experiência de Marca e Relacionamento',
      description: `Construímos jornadas de experiência que fortalecem a conexão entre marcas e clientes. Aplicamos storytelling, design, interações e estratégias de encantamento para gerar fidelização, autoridade e impacto duradouro no mercado.`,
    },
    {
      icon: <WorkspacePremiumIcon color="#e6003c" sx={{ fontSize: 40 }} />,
      title: 'Consultoria e Desenvolvimento Empresarial',
      description: `Capacitamos empreendedores e equipes através de consultorias, mentorias e treinamentos, oferecendo métodos e ferramentas para estruturar, organizar e potencializar negócios, tornando-os mais competitivos, profissionais e preparados para escalar.`,
    },
  ]

  return (
    <Box sx={{ py: 5, backgroundColor: '#fff', color: '#000' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center', color: '#000' }}>
          Como Atuamos?
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, textAlign: 'center', maxWidth: 700, mx: 'auto', color: '#000' }}>
          Atuamos de forma integrada, combinando estratégia, marketing, branding e performance para acelerar resultados, fortalecer negócios e posicionar marcas de forma relevante e escalável.
        </Typography>

        <Grid container spacing={4} columns={{ xs: 6, sm: 12, md: 12 }}>
          {cards.map(({ icon, title, description }, index) => (
            <Grid size={{ xs: 6, sm: 12, md: 6 }} key={index}>
              <Card sx={{ height: '100%', border: '1px solid #e6003c', backgroundColor: '#fff', color: '#000', boxShadow: 0 }}>
                <CardContent>
                  <Box sx={{ mb: 2, color: '#e6003c' }}>{icon}</Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#000' }}>
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#000', whiteSpace: 'pre-line' }}>
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

export default ComoAtuamos
