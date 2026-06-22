import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'
import Stack from '@mui/joy/Stack'

export default function Guides() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 73px)',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        p: 4,
      }}
    >
      <Stack spacing={4} sx={{ maxWidth: 1200, mx: 'auto' }}>
        <Typography
          level="h1"
          sx={{
            color: 'white',
            fontSize: { xs: '2rem', md: '3rem' },
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Wynncraft Guides
        </Typography>

        {/* Skill Points Deep Dive */}
        <Card sx={{ p: 3 }}>
          <Typography level="h2" sx={{ mb: 2 }}>
            Understanding Skill Points
          </Typography>
          <Typography sx={{ mb: 2 }}>
            You earn 2 skill points per level. Allocate them wisely across 5 stats:
          </Typography>

          <Stack spacing={3}>
            <Box>
              <Typography level="h3" sx={{ color: 'primary.main' }}>💪 Strength (Earth)</Typography>
              <Typography sx={{ mb: 1 }}><strong>Element:</strong> Earth</Typography>
              <Typography>• Increases melee & spell damage</Typography>
              <Typography>• Boosts poison damage</Typography>
              <Typography>• Scales with diminishing returns</Typography>
            </Box>

            <Box>
              <Typography level="h3" sx={{ color: 'warning.main' }}>🎯 Dexterity (Thunder)</Typography>
              <Typography sx={{ mb: 1 }}><strong>Element:</strong> Thunder</Typography>
              <Typography>• Increases critical hit chance</Typography>
              <Typography>• Boosts thunder damage</Typography>
              <Typography>• Crits deal 2x damage</Typography>
            </Box>

            <Box>
              <Typography level="h3" sx={{ color: 'info.main' }}>🧠 Intelligence (Water)</Typography>
              <Typography sx={{ mb: 1 }}><strong>Element:</strong> Water</Typography>
              <Typography>• Reduces mana cost of spells</Typography>
              <Typography>• Increases maximum mana</Typography>
              <Typography>• Boosts water damage</Typography>
            </Box>

            <Box>
              <Typography level="h3" sx={{ color: 'danger.main' }}>🛡️ Defense (Fire)</Typography>
              <Typography sx={{ mb: 1 }}><strong>Element:</strong> Fire</Typography>
              <Typography>• Reduces damage taken</Typography>
              <Typography>• Boosts fire damage</Typography>
              <Typography>• Essential for survivability</Typography>
            </Box>

            <Box>
              <Typography level="h3" sx={{ color: 'success.main' }}>⚡ Agility (Air)</Typography>
              <Typography sx={{ mb: 1 }}><strong>Element:</strong> Air</Typography>
              <Typography>• Increases dodge chance</Typography>
              <Typography>• Dodges reduce damage by 90%</Typography>
              <Typography>• Boosts air damage</Typography>
            </Box>
          </Stack>
        </Card>

        {/* Important Limits */}
        <Card sx={{ p: 3 }}>
          <Typography level="h2" sx={{ mb: 2 }}>
            Important Limits
          </Typography>
          <Stack spacing={1}>
            <Typography>• <strong>Manual allocation cap:</strong> 100 points per stat</Typography>
            <Typography>• <strong>Total cap (with items):</strong> 150 points per stat</Typography>
            <Typography>• <strong>Total skill points:</strong> 200 (at level 101)</Typography>
          </Stack>
        </Card>

        {/* Build Tips */}
        <Card sx={{ p: 3, bgcolor: 'warning.softBg' }}>
          <Typography level="h2" sx={{ mb: 2 }}>
            💡 Build Tips
          </Typography>
          <Stack spacing={1}>
            <Typography>• Many high-level items have skill point requirements</Typography>
            <Typography>• Plan your build around items you want to use</Typography>
            <Typography>• Strength and Dexterity are additive with each other but multiplicative with damage</Typography>
            <Typography>• Don&apos;t spread points too thin - focus on 2-3 stats for most builds</Typography>
          </Stack>
        </Card>
      </Stack>
    </Box>
  )
}
