import Image from 'next/image';
import CustomButton from './CustomButton';

export default async function page() {
  
    return (
        <div className='hero'>
          <div className="flex-1 pt-36 padding-x">
            <h1 className='hero_title'> 
              Find a book or Rent a car - quickly and easily
            </h1>
            <p>
              Stramline your car rental experience with our effortless booking proccess 
            </p>
            <CustomButton/>
          </div>
        </div>
    )
  }
  