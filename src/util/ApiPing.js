// ApiPing.js

import { useEffect } from "react";

const ApiPing = () => {
  useEffect(() => {
    const pingAPIs = async () => {
      try {
        // Make a request to your API endpoint to keep it active
        await fetch('https://cgc-nodejs.onrender.com/');
      } catch (error) {
        console.error('Error pinging APIs:', error);
      }
    };

    // Ping APIs every 15 minutes (900,000 milliseconds)
    const intervalId = setInterval(pingAPIs, 900000 );

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return null; // Since this component doesn't render anything, return null
};

export default ApiPing;
