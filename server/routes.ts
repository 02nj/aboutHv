import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.messages.create.path, async (req, res) => {
    try {
      const input = api.messages.create.input.parse(req.body);
      const message = await storage.createMessage(input);

      // Send to Discord Webhook if configured
      const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              embeds: [{
                title: "New Message from Portfolio",
                color: 0x5865F2, // Discord Blurple
                fields: [
                  { name: "Name", value: input.name, inline: true },
                  { name: "Discord ID", value: input.discordId || "Not provided", inline: true },
                  { name: "Content", value: input.content }
                ],
                timestamp: new Date().toISOString()
              }]
            })
          });
        } catch (error) {
          console.error("Failed to send Discord webhook:", error);
        }
      }

      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
