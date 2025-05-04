//Image
import Image from 'next/image';

//Link
import Link from 'next/link';

//components
import Socials from '../components/Socials'

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-4 sm:px-8 md:px-12 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-4 py-4'>
          {/* logo */}
          <Link href='/'>
            <Image
              src='/logo.svg'
              width={200}
              height={58}
              alt='Shubham Patel'
              className="w-[150px] md:w-[180px] xl:w-[200px]"
              priority={true}
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
