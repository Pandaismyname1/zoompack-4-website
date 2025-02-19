"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "Races and Classes",
    description: "Choose your path with the Origins Mod. Specialize in farming, fighting, trading, and more.",
    icon: "👺",
    image: "/showcase/races.png",
  },
  {
    title: "Expansive Dimensions",
    description: "Explore 9 vast dimensions, packed with over 60 armor sets and more than 30 formidable bosses.",
    icon: "🖼️",
    image: "/showcase/dimensions.jpeg",
  },
  {
    title: "Dynamic Leveling System",
    description: "Enhance your character's agility, endurance, combat skills, archery, and more.",
    icon: "🔝",
    image: "/showcase/leveling.jpeg",
  },
  {
    title: "Rich Loot Tables",
    description: "Find gems and stat-boosted items to aid your journey.",
    icon: "🏴‍☠️",
    image: "/showcase/loot.jpeg",
  },
  {
    title: "Talent System",
    description: "Customize your stats to match your playstyle.",
    icon: "💪",
    image: "/showcase/talent.png",
  },
]

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const controls = useAnimation()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    const startAutoScroll = () => {
      intervalId = setInterval(() => {
        if (!isHovered) {
          x.set((x.get() - 1) % -width)
        }
      }, 20)
    }

    startAutoScroll()

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [x, width, isHovered])

  const handleWheel = (e: React.WheelEvent) => {
    const newX = x.get() - e.deltaX
    x.set(Math.max(Math.min(0, newX), -width))
  }

  const handleDragEnd = () => {
    const currentX = x.get()
    if (currentX > 0) {
      controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
    } else if (currentX < -width) {
      controls.start({ x: -width, transition: { type: "spring", stiffness: 300, damping: 30 } })
    }
  }

  return (
    <div id="features" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Zoompack 4 Features</h2>
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onWheel={handleWheel}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex justify-evenly"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="w-[300px] h-[400px] m-4 bg-background rounded-3xl shadow-lg flex flex-col overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="h-1/2 relative">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="h-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-4xl mb-2">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

