
import React, { useEffect } from 'react';

// Component สำหรับโหลด script ทุกครั้งที่ app เริ่มทำงาน
const ScriptLoader: React.FC = () => {
  useEffect(() => {
    // โหลด script จากไฟล์ main.js
    const loadScript = async () => {
      try {
        // Dynamic import สำหรับ JavaScript module
        await import('../utils/main.js')
          .then(() => {
            console.log('Main script loaded successfully');
          })
          .catch((error) => {
            console.error('Error loading main script:', error);
          });
      } catch (error) {
        console.error('Error during script loading:', error);
      }
    };

    loadScript();
  }, []);

  return null; // Component นี้ไม่มีการ render UI
};

export default ScriptLoader;
