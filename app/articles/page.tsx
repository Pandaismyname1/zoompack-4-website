import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Articles | Zoompack 4",
  description: "Tutorials and guides for Zoompack 4 Minecraft modpack.",
}

const articles = [
  {
    title: "🚀 Installing Zoompack 4 with Prism Launcher",
    description: "Learn how to install Zoompack 4 using Prism Launcher for the best Minecraft experience.",
    slug: "installing-zoompack-4-prism-launcher",
  },
  {
    title: "⚡ Extra Performance",
    description: "Boost your Zoompack 4 performance with GraalVM and optimized JVM flags.",
    slug: "extra-performance",
  },
  // Add more articles here as needed
]

export default function ArticlesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Articles</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <Link key={index} href={`/articles/${article.slug}`} className="block">
            <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-muted-foreground">{article.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

