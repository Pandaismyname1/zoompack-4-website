"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
              className="mt-10 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8}}
          >
            <span className="fire-text" data-text="Zoompack 4">
              Zoompack 4
            </span>
          </motion.h1>
          <motion.p
              className="mt-6 text-lg leading-8 text-muted-foreground"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
          >
            Crafted by hardcore East European gamers, this
            modpack redefines Minecraft with cutting-edge mechanics and meticulously curated mods.
          </motion.p>
          <motion.p
              className="mt-6 text-lg leading-8 text-muted-foreground"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.2}}
          >
            <span className="fire-text" data-text="Unleash the Ultimate Minecraft Experience!">Unleash the Ultimate Minecraft Experience!</span>
          </motion.p>
          <motion.div
              className="mt-10 flex items-center gap-x-6"
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.4}}
          >
            <a
                href="https://www.curseforge.com/minecraft/modpacks/zoompack-4"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button flex gap-2"
            >
              <img src="/curseforge-logo.svg" alt="Curseforge" width={24} height={24}/>
              Download on Curseforge
            </a>
          </motion.div>
        </div>
        <motion.div
            className="mx-auto mt-16 lg:mt-0"
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 0.8, delay: 0.6}}
        >
          <div className="relative">
            <img
                src="/zp-hero.png"
                alt="Zoompack 4 Minecraft Modpack"
                width={600}
                height={600}
                className="w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

