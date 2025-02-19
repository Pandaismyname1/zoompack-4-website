import ArticleCard from "./ArticleCard"

const articles = [
  {
    title: "🚀 Installing Zoompack 4 with Prism Launcher",
    description: "Learn how to install Zoompack 4 using Prism Launcher for the best Minecraft experience.",
    slug: "installing-zoompack-4-prism-launcher",
  },
  {
    title: "⚡ Extra Performance",
    description: "Optimize your game with our performance tips and tricks.",
    slug: "extra-performance",
  }
]

export default function ArticleList() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Tutorials & Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}

