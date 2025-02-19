import Hero from "./components/Hero"
import FeatureCarousel from "./components/FeatureCarousel"
import CommunityServerCTA from "./components/CommunityServerCTA"
import ArticleList from "./components/ArticleList"

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCarousel />
      <ArticleList />
      <CommunityServerCTA />
    </>
  )
}

