import Image from 'next/image'
import React from 'react'

const DataTable = () => {
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white">
        <thead className="bg-gray-100 whitespace-nowrap ">
            <tr>
                <th className="p-3 text-left text-sm  text-muted-foreground rounded-md mr-3">
                    Emp. ID
                </th>
            </tr>
        </thead>
        <tbody className="whitespace-nowrap divide-y divide-gray-200">
        <tr>
            <td className="pl-4 w-8">
            <input id="checkbox1" type="checkbox" className="hidden peer" />
            <label htmlFor="checkbox1" className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z" data-name="7-Check" data-original="#000000" />
                </svg>
            </label>
            </td>
            <td className="p-4 text-sm">
            <div className="flex items-center cursor-pointer w-max">
                <Image 
                src="https://readymadeui.com/profile_4.webp" 
                className="w-9 h-9 rounded-full shrink-0"
                alt=''
                 />
                <div className="ml-4">
                <p className="text-sm text-black">Gladys Jones</p>
                <p className="text-xs text-gray-500">gladys@example.com</p>
                </div>
            </div>
            </td>
            <td className="p-4 text-sm">
            Walt Disney Company
            </td>
            <td className="px-6 py-3">
            (808) 555-0111
            </td>
            <td className="px-6 py-3">
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#CED5D8" />
            </svg>
            <svg className="w-[18px] h-4 inline" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#CED5D8" />
            </svg>
            </td>
            <td className="px-6 py-3">
            <button className="mr-4" title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-gray-500" viewBox="0 0 32 32">
                <path d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" data-original="#000000" />
                </svg>
            </button>
            </td>
        </tr>
        <tr>
            <td className="pl-4 w-8">
            <input id="checkbox2" type="checkbox" className="hidden peer" />
            <label htmlFor="checkbox2" className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z" data-name="7-Check" data-original="#000000" />
                </svg>
            </label>
            </td>
            <td className="p-4 text-sm">
            <div className="flex items-center cursor-pointer w-max">
                <Image src="https://readymadeui.com/profile_5.webp" className="w-9 h-9 rounded-full shrink-0" alt='' />
                <div className="ml-4">
                <p className="text-sm text-black">Jennie Cooper</p>
                <p className="text-xs text-gray-500">jennie@example.com</p>
                </div>
            </div>
            </td>
            <td className="p-4 text-sm">
            IBM
            </td>
            <td className="px-6 py-3">
            (505) 555-3355
            </td>
            <td className="px-6 py-3">
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#CED5D8" />
            </svg>
            </td>
            <td className="px-6 py-3">
            <button className="mr-4" title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-gray-500" viewBox="0 0 32 32">
                <path d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" data-original="#000000" />
                </svg>
            </button>
            </td>
        </tr>
        <tr>
            <td className="pl-4 w-8">
            <input id="checkbox3" type="checkbox" className="hidden peer" />
            <label htmlFor="checkbox3" className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z" data-name="7-Check" data-original="#000000" />
                </svg>
            </label>
            </td>
            <td className="p-4 text-sm">
            <div className="flex items-center cursor-pointer w-max">
                <Image src="https://readymadeui.com/profile_3.webp" className="w-9 h-9 rounded-full shrink-0" alt='' />
                <div className="ml-4">
                <p className="text-sm text-black">Philip Steward</p>
                <p className="text-xs text-gray-500">philip@example.com</p>
                </div>
            </div>
            </td>
            <td className="p-4 text-sm">
            McDonald's
            </td>
            <td className="px-6 py-3">
            (101) 111-66999
            </td>
            <td className="px-6 py-3">
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#CED5D8" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#CED5D8" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#CED5D8" />
            </svg>
            <svg className="w-[18px] h-4 inline" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#CED5D8" />
            </svg>
            </td>
            <td className="px-6 py-3">
            <button className="mr-4" title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-gray-500" viewBox="0 0 32 32">
                <path d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" data-original="#000000" />
                </svg>
            </button>
            </td>
        </tr>
        <tr>
            <td className="pl-4 w-8">
            <input id="checkbox4" type="checkbox" className="hidden peer" />
            <label htmlFor="checkbox4" className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z" data-name="7-Check" data-original="#000000" />
                </svg>
            </label>
            </td>
            <td className="p-4 text-sm">
            <div className="flex items-center cursor-pointer w-max">
                <Image src="https://readymadeui.com/profile_2.webp" className="w-9 h-9 rounded-full shrink-0" alt=''/>
                <div className="ml-4">
                <p className="text-sm text-black">Jorge Black</p>
                <p className="text-xs text-gray-500">jorge@example.com</p>
                </div>
            </div>
            </td>
            <td className="p-4 text-sm">
            Louis Vuitton
            </td>
            <td className="px-6 py-3">
            (201) 333-1100
            </td>
            <td className="px-6 py-3">
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#CED5D8" />
            </svg>
            <svg className="w-[18px] h-4 inline" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#CED5D8" />
            </svg>
            </td>
            <td className="px-6 py-3">
            <button className="mr-4" title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-gray-500" viewBox="0 0 32 32">
                <path d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" data-original="#000000" />
                </svg>
            </button>
            </td>
        </tr>
        <tr>
            <td className="pl-4 w-8">
            <input id="checkbox5" type="checkbox" className="hidden peer" />
            <label htmlFor="checkbox5" className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full fill-white" viewBox="0 0 520 520">
                <path d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z" data-name="7-Check" data-original="#000000" />
                </svg>
            </label>
            </td>
            <td className="p-4 text-sm">
            <div className="flex items-center cursor-pointer w-max">
                <Image src="https://readymadeui.com/profile_6.webp" className="w-9 h-9 rounded-full shrink-0" alt=''/>
                <div className="ml-4">
                <p className="text-sm text-black">Evan Flores</p>
                <p className="text-xs text-gray-500">evan@example.com</p>
                </div>
            </div>
            </td>
            <td className="p-4 text-sm">
            Sony
            </td>
            <td className="px-6 py-3">
            (505) 888-1100
            </td>
            <td className="px-6 py-3">
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline mr-1" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            <svg className="w-[18px] h-4 inline" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" fill="#facc15" />
            </svg>
            </td>
            <td className="px-6 py-3">
            <button className="mr-4" title="Edit">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-gray-500" viewBox="0 0 32 32">
                <path d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z" data-original="#000000" />
                </svg>
            </button>
            </td>
        </tr>
        </tbody>
    </table>
    <div className="md:flex m-4">
        <p className="text-sm text-gray-500 flex-1">Showind 1 to 5 of 100 entries</p>
        <div className="flex items-center max-md:mt-4">
        <p className="text-sm text-gray-500">Display</p>
        <select className="text-sm text-gray-500 border border-gray-400 rounded h-7 mx-4 px-1 outline-none">
            <option>5</option>
            <option>10</option>
            <option>20</option>
            <option>50</option>
            <option>100</option>
        </select>
        <ul className="flex space-x-1 ml-2">
            <li className="flex items-center justify-center cursor-pointer bg-blue-100 w-7 h-7 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500" viewBox="0 0 55.753 55.753">
                <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" data-original="#000000" />
            </svg>
            </li>
            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
            1
            </li>
            <li className="flex items-center justify-center cursor-pointer text-sm bg-[#007bff] text-white w-7 h-7 rounded">
            2
            </li>
            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
            3
            </li>
            <li className="flex items-center justify-center cursor-pointer text-sm w-7 h-7 text-gray-500 rounded">
            4
            </li>
            <li className="flex items-center justify-center cursor-pointer bg-blue-100 w-7 h-7 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-gray-500 rotate-180" viewBox="0 0 55.753 55.753">
                <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" data-original="#000000" />
            </svg>
            </li>
        </ul>
        </div>
    </div>
    </div>

  )
}

export default DataTable
