## Packages
framer-motion | Complex reveal animations and smooth scrolling effects
lucide-react | Iconography (already in base, but explicit for clarity)

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  display: ["'Outfit'", "sans-serif"],
  body: ["'Inter'", "'Cairo'", "sans-serif"], // Cairo is excellent for Arabic
}

Discord Integration:
The backend expects a DISCORD_WEBHOOK_URL environment variable to send messages to Discord.
The user should add this in the Secrets tab in Replit.
