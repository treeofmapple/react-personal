import { ShoppingCart, UserIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import { APP_NAME } from '@/lib/constants'
import { CART_LINK, SIGN_LINK } from '@/lib/constants/redirect';
import ModeToggle from './mode-toggle';

const Header = () => {
    return <header className = "w-full border-b shadow-md">
    <div className = "wrapper flex justify-between items-center py-5 px-16">
        <Link href='/' className='flex items-center'>
            <Image 
                src='/images/logo.svg'
                alt={`${APP_NAME} logo`}
                height={52} 
                width={52} 
                priority={true}/>
            <span className="hidden md:block font-bold text-3xl ml-4">
                {APP_NAME}
            </span>
        </Link>

        <div className = "space-x-2">
            <ModeToggle/>
            <Button asChild variant='ghost'>
                <Link href={CART_LINK}>
                    <ShoppingCart/> Cart
                </Link>
            </Button>
            
            <Button asChild>
                <Link href={SIGN_LINK}>
                    <UserIcon /> Sign In
                </Link>
            </Button>
        </div>
    </div>
</header>;

  
};
 
export default Header;