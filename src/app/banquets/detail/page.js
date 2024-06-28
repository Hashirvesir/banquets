import WebLayout from '@/components/WebLayout'
import Banner from '@/components/Banner'
import BanquestImg from "../../../../public/banquestbg.png"
import Wrapper from '@/components/Wrapper'
import Detail from '@/components/Detail'


const detail = () => {
  return (
    <>
    <WebLayout>
    <Banner image={BanquestImg} title="Detail"/>
    <Wrapper>
      <Detail/>
    </Wrapper>
    </WebLayout>
    </>
  )
}

export default detail   