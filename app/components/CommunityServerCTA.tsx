"use client"

import { motion } from "framer-motion"

export default function CommunityServerCTA() {
  return (
      <section className="bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
              className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">Join Our Community</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Are you yearning for a wholesome community to share your experiences with? Join our Discord server and
              meet
              other Zoompack enthusiasts!
            </p>
            <motion.div
                className="mt-10"
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.8, delay: 0.2}}
            >
              <a
                  href="https://discord.gg/say65Z3u"
                  target="_blank"
                  className="apple-button inline-flex items-center"
              >
                <img src="/discord-logo-white.svg" alt="Discord Logo" className="h-6 mr-4"/>
                <span className="text-lg font-semibold">Join Our Discord</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
  )
}

