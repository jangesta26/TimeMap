import { Card } from '@/components/ui/card'
import React from 'react'

const Faq = () => {
  return (
    <Card className="bg-card/90 px-6 rounded-3xl shadow-2xl p-4 py-10 ">
        <h2 className="text-3xl font-extrabold text-primary mb-8">Frequently Asked Questions</h2>
        <div className="space-y-8 max-w-4xl">
            <div className="flex items-start">
            <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold text-muted-foreground">How can I create an account?</h3>
                <p className="text-md text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
            </div>
            </div>
            <div className="flex items-start">
            <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold text-muted-foreground">Is there a mobile app available?</h3>
                <p className="text-md text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
            </div>
            </div>
            <div className="flex items-start">
            <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold text-muted-foreground">How can I reset my password?</h3>
                <p className="text-md text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div className="flex items-start">
            <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <div className="ml-4">
                <h3 className="text-lg font-semibold text-muted-foreground">How do I update my account information?</h3>
                <p className="text-md text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</p>
            </div>
            </div>
        </div>
    </Card>
  )
}

export default Faq
