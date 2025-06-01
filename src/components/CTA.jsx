import React from 'react'
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material'

const CTA = () => {
  return (
    <Box sx={{
      backgroundColor: '#e6003c',
      color: '#fff',
      textAlign: 'center',
      borderRadius: 2,
      p: 5,
      mt: 1
    }}>
      <Typography variant="h4" gutterBottom>
        Potencialize Seu Negócio com a MaxStrategy
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        A MaxStrategy é sua parceira estratégica para acelerar resultados, fortalecer sua marca e gerar crescimento sustentável.
      </Typography>

      <List sx={{ display: 'inline-block', textAlign: 'left', mb: 2, px: 0 }}>
        {[
          "Estratégias personalizadas para o seu negócio.",
          "Conectamos inteligência, criatividade e performance.",
          "Transformamos desafios em oportunidades reais."
        ].map((text, i) => (
          <ListItem
            key={i}
            sx={{
              py: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              textAlign: 'center'
            }}
          >
            <Typography variant="h6" component="span" sx={{ mr: 1 }}>🔹</Typography>
            <ListItemText
              primary={text}
              sx={{ m: 0, '& .MuiTypography-root': { textAlign: 'center' } }}
            />
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 1 }}>
        <Button 
          variant="contained" 
          href="https://wa.me/5511950604767" 
          target="_blank"
          sx={{ 
            backgroundColor: '#0D0D0D', 
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#1a1a1a',
            }
          }}
        >
          Solicitar Consultoria
        </Button>
      </Box>
    </Box>
  )
}

export default CTA
