
import { useParams } from 'react-router-dom'

import DriverConstructors from '../components/DriverConstructors';
import DriverInfo from '../components/DriverInfo';


const Driver = () => {
  const driver: any = useParams();
  const currentDriver = driver.driver;

  return (
    <div className='flex flex-col items-center justify-center pt-6'>
      <DriverInfo driver={currentDriver}></DriverInfo>
      <DriverConstructors driver={currentDriver}></DriverConstructors>
      </div>
  )
}

export default Driver