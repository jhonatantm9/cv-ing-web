import { AsideLeft } from '@/components/AsideLeft'
import { MainContent } from '@/components/MainContent'
import { AsideRight } from '@/components/AsideRight'

const Home = () => {
  return (
    <div className="flex h-full max-w-screen bg-page-bg gap-5">
      <AsideLeft />
      <MainContent />
      <AsideRight />
    </div>
  )
}

export default Home;
