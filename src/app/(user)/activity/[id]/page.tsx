import React from 'react';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // Await the params before accessing them
  const resolvedParams = await params; // Wait for params to resolve

  console.log("ID:", resolvedParams.id); // Log the ID

  return (
    <div>
      <h1>My Post: {resolvedParams.id}</h1>
    </div>
  );
};

export default Page;
