import Coursecard from '../components/Coursecard/Coursecard'
import Header from '../components/header/header'

const Courses = () => {
  return (
    <div>
      <Header></Header>

        <div className='container max-w-[1240px] mt-4 mx-auto'>
          <Coursecard></Coursecard>

        </div>
      </div>
  )
}

export default Courses