import WebLayout from '@/components/WebLayout'
import Banner from '@/components/Banner'
import BanquestImg from "../../../public/banquestbg.png"
import Filters from '@/components/Filters'
import Wrapper from '@/components/Wrapper'
import ProductCard from '@/components/ProductCard'

const banquets = () => {
  return (
    <>
    <WebLayout>
      <Banner image={BanquestImg} title="banquets"/>
      <Wrapper>
      <div className='mt-[50px] mb-[200px]'>
      <Filters/>
      </div>
      <div className='mb-[200px]'>
      <ProductCard/>
      </div>
      </Wrapper>
    </WebLayout>
    </>
  )
}

export default banquets