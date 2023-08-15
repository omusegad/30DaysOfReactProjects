import Image from 'next/image';
import CustomButton from './CustomButton';

export default async function page() {
  
    return (
        <div id='hero'>
            <div className="container flex flex-col-reverse md:flex-row mx-auto bg-black-40 mt-10 items-center">
             <div className="flex flex-col space-y-12 md:w-1/2">
                <h1 className='text-4xl font-bold'>Bring Everyone together <br/> to build products </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda corporis, dolor quidem beatae fugit consequuntur deserunt blanditiis doloremque tempora non quos? Cupiditate ratione sed, suscipit incidunt eveniet eaque laudantium. Officia laudantium vero voluptates quibusdam veniam nihil commodi quos provident quidem dolorum voluptatum dolorem dolor rerum, ipsum nam atque, maiores accusamus!
                </p>
             </div>
             <div className='md:w-1/2 items-start'>
                <Image src="/guiter.jpg" alt="" width="500" height="500" />
             </div>
            </div>
        </div>
    )
  }
  