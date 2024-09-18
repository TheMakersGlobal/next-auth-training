'use client';

import { Button } from "../ui/button";
import Link from "next/link";

interface BackButtonProps{
    href:string;
    label:string;
};

export const BackButton = ({
    href,
    label
}:BackButtonProps) => {
    return(
        <Button
        variant='link'
        className="font-normal w-full ring-1 hover:bg-slate-100 "
        size='sm'
        asChild
        >
            <Link href={href}>
            {label}
            </Link>
        </Button>
    )
}