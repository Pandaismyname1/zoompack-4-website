"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface ArticleCardProps {
  title: string
  description: string
  slug: string
}

export default function ArticleCard({ title, description, slug }: ArticleCardProps) {
  return (
    <motion.div
      className="bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden hover-lift"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/articles/${slug}`}>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

