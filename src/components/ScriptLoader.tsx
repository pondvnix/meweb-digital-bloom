
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

// Component สำหรับโหลด script ทุกครั้งที่ route เปลี่ยนหรือ component mount
const ScriptLoader: React.FC = () => {
  const location = useLocation();
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // โหลด script จากไฟล์ main.js
    const loadScript = async () => {
      try {
        // ใช้ fetch ตรวจสอบว่าไฟล์มีอยู่จริงก่อน
        const mainModule = await import('../utils/main.js');
        
        // ตรวจสอบว่ามีฟังก์ชัน initPage หรือไม่
        if (typeof mainModule.default === 'function') {
          mainModule.default();
        }
        
        // ถ้ามีฟังก์ชัน initPage ให้เรียกใช้เพื่อเริ่มต้นทำงานใหม่เมื่อ route เปลี่ยน
        if (typeof mainModule.initPage === 'function') {
          mainModule.initPage();
        }
        
        console.log('Main script loaded successfully for path:', location.pathname);
        setScriptLoaded(true);
      } catch (error) {
        console.error('Error loading main script:', error);
        // ถ้าเกิด error ในการโหลด script ให้ยังคงถือว่าโหลดเสร็จแล้ว เพื่อป้องกัน loop
        setScriptLoaded(true);
      }
    };

    if (!scriptLoaded) {
      loadScript();
    }
    
    // เรียกใช้ฟังก์ชัน global หลังจากโหลด script (หากมีฟังก์ชันที่ประกาศไว้ใน window)
    if (typeof window !== 'undefined' && window.onPageLoad) {
      try {
        window.onPageLoad();
      } catch (error) {
        console.error('Error executing onPageLoad:', error);
      }
    }
  }, [location.pathname, scriptLoaded]); // Re-run effect เมื่อ path เปลี่ยน

  return null; // Component นี้ไม่มีการ render UI
};

export default ScriptLoader;
