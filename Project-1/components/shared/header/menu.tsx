import { EllipsisVertical, Sheet, ShoppingCart, UserIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'
import { CART_LINK, SIGN_LINK } from '@/lib/constants/redirect';
import ModeToggle from './mode-toggle';
import { SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Menu = () => {

    return (
        <div className="flex justify-end gap-3">
            <nav className="hidden md:flex w-full max-w-xs gap-1">
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
            </nav>
            <nav className='md:hidden'>
                <Sheet>
                    <SheetTrigger>
                        <EllipsisVertical/>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetTitle>Menu</SheetTitle>
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
                        <SheetDescription></SheetDescription>
                    </SheetContent>
                </Sheet>
            </nav>
        </div>
    );

}

export default Menu;