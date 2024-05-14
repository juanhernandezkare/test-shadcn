"use client";
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Image from "next/image";
import { toast } from "sonner";

export default function TestingPageNextjs() {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-4'>
      <div className='flex items-center p-10 border rounded-md bg-gray-50'>
        TEST FOR BLAZOR
        <Input className='' onChange={e => console.log(e.target.value)} />
      </div>

      <section>
        <Button onClick={() => console.log("test button shadcn")}>
          TEST BLAZOR
        </Button>
      </section>
    </div>
  );
}
