'use client';
import { usePathname } from 'next/navigation';

const Head = () => {

  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `TimeMap ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `This acronym highlights the system's ability to streamline attendance tracking by automatically recording and pushing attendance data with maximum efficiency, making the process seamless and user-friendly.`,
    keywords: 'TimeMap, Biometric Authentication, Real-Time Data Sync, Automated Notifications, User-Friendly Interface, Detailed Reports, Integration Capabilities, Data Security, CSS, Customizable Settings',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`https://....${pathname}`} />
      <link rel='canonical' href={`https://....${pathname}`} />
      <link rel='me' href='mailto:janellgesta@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Janell Gesta' />
      <meta property='og:title' content={meta.title} />
    </>
  )
}

export default Head;