import { useParams } from 'react-router-dom';
import ConstructorDrivers from '../components/ConstructorDrivers'

const Constructor = () => {

    const constructor: any = useParams();
    console.log(constructor)
    const currentConstructor = constructor.Constructor;

    return (
        <div>
            <div className='flex flex-row justify-center gap-20 pt-6'>
                Current or Previous Drivers</div>
            <ConstructorDrivers c={currentConstructor}></ConstructorDrivers>
        </div>
    )
}

export default Constructor