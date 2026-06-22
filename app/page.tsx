import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import Card from '@mui/joy/Card'
import Stack from '@mui/joy/Stack'
import Chip from '@mui/joy/Chip'

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 73px)',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        p: 4,
      }}
    >
      <Stack spacing={4} sx={{ maxWidth: 1200, mx: 'auto' }}>
        {/* Hero Section */}
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography
            level="h1"
            sx={{
              color: 'white',
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              mb: 2,
            }}
          >
            Wynncraft Helper
          </Typography>
          <Typography
            level="h3"
            sx={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            Your guide to mastering the MMORPG
          </Typography>
        </Box>

        {/* Getting Started Card */}
        <Card sx={{ p: 3 }}>
          <Typography level="h2" sx={{ mb: 2 }}>
            Getting Started
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Wynncraft is the largest MMORPG in Minecraft. Connect to the server at{' '}
            <Chip variant="soft" color="primary">play.wynncraft.com</Chip>{' '}
            (Minecraft 1.20.2+)
          </Typography>
          <Stack spacing={1}>
            <Typography>• Choose your class carefully - each has unique playstyles</Typography>
            <Typography>• You get 2 skill points per level (max 200 at level 101)</Typography>
            <Typography>• Items have stat requirements - plan your build accordingly</Typography>
            <Typography>• Elemental damage scales with skill points</Typography>
          </Stack>
        </Card>

        {/* Classes Overview */}
        <Box>
          <Typography level="h2" sx={{ color: 'white', mb: 2 }}>
            Classes
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
            {[
              { name: 'Archer', weapon: 'Bow', style: 'Ranged DPS with high mobility' },
              { name: 'Warrior', weapon: 'Spear', style: 'Melee fighter with high damage' },
              { name: 'Mage', weapon: 'Wand', style: 'Magical ranged damage dealer' },
              { name: 'Assassin', weapon: 'Dagger', style: 'Fast melee with high mobility' },
              { name: 'Shaman', weapon: 'Relik', style: 'Support/damage hybrid' },
            ].map((cls) => (
              <Card key={cls.name} sx={{ flex: 1 }}>
                <Typography level="h3">{cls.name}</Typography>
                <Typography><strong>Weapon:</strong> {cls.weapon}</Typography>
                <Typography><strong>Style:</strong> {cls.style}</Typography>
              </Card>
            ))}
          </Stack>
        </Box>

        {/* Skill Points Quick Reference */}
        <Card sx={{ p: 3 }}>
          <Typography level="h2" sx={{ mb: 2 }}>
            Skill Points Quick Reference
          </Typography>
          <Stack spacing={2}>
            <Box>
              <Typography level="title-lg">💪 Strength (Earth)</Typography>
              <Typography>Increases melee/spell damage + poison damage</Typography>
            </Box>
            <Box>
              <Typography level="title-lg">🎯 Dexterity (Thunder)</Typography>
              <Typography>Increases critical hit chance + thunder damage</Typography>
            </Box>
            <Box>
              <Typography level="title-lg">🧠 Intelligence (Water)</Typography>
              <Typography>Reduces mana cost, increases max mana + water damage</Typography>
            </Box>
            <Box>
              <Typography level="title-lg">🛡️ Defense (Fire)</Typography>
              <Typography>Reduces damage taken + fire damage</Typography>
            </Box>
            <Box>
              <Typography level="title-lg">⚡ Agility (Air)</Typography>
              <Typography>Increases dodge chance (90% reduction) + air damage</Typography>
            </Box>
          </Stack>
        </Card>
      </Stack>
    </Box>
  )
}
