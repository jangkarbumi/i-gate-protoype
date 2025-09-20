'use client';
import Stepper, { Step } from "@/components/Stepper"
import Image from "next/image";

import rickroll from '@/image/rickroll_qr.png'

export default function Ticket() {

    return(
        <Stepper
            backButtonText="Previous"
            nextButtonText="Next"
            initialStep={1}
            disableStepIndicators={true}
        >
            <Step>
                <div className="grid gap-3">

                    <div className="flex flex-col flex-1 gap-2">
                        <h2>Full Name</h2>
                        <input 
                        type="text" 
                        placeholder="Himura Kenshin"
                        className="border border-solid border-gray-900 p-2 rounded-lg dark:border-gray-100"  
                        />
                    </div>

                    <div className="flex flex-col flex-1 gap-2">
                        <h2>NIM</h2>
                        <input 
                        type="text" 
                        placeholder="2406012xxxxxxx"
                        className="border border-solid border-gray-900 p-2 rounded-lg dark:border-gray-100"
                        />
                    </div>

                    <div className="flex flex-col flex-1 gap-2">
                        <h2>Email</h2>
                        <input 
                        type="email" 
                        placeholder="youremail@mail.com"
                        className="border border-solid border-gray-900 p-2 rounded-lg dark:border-gray-100" 
                        />
                    </div>

                </div>

            </Step>

            <Step>
                <div className="space-y-4">
                    <h2 className="text-center text-2xl font-bold">Pay With Your E-Wallet!</h2>

                    <Image
                        src={rickroll}
                        alt="payment qr"
                    />
                 </div>
            </Step>

            <Step>
                <div className="flex flex-col space-y-5">
                    <h2
                        className="text-center text-3xl font-bold"
                    >Payment Success!</h2>
                    <p
                        className="text-center font-semibold"
                    >Check Your Email For the Ticket</p>
                </div>
            </Step>
        </Stepper>
    )
}