'use client';
import { useEffect, useState } from 'react';

const useChartDimensions = () => {
  const [dimensions, setDimensions] = useState({ width: 780, height: 400 });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth < 640 ? 360 :
                    window.innerWidth < 768 ? 480 :
                    window.innerWidth < 1024 ? 600 :
                    window.innerWidth < 1280 ? 780 : 960;

      const height = window.innerWidth < 640 ? 200 :
                     window.innerWidth < 768 ? 300 :
                     window.innerWidth < 1024 ? 350 :
                     window.innerWidth < 1280 ? 400 : 450; 

      setDimensions({ width, height });
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  return dimensions;
};

export default useChartDimensions;
