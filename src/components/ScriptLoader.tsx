
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component สำหรับโหลด script ทุกครั้งที่ route เปลี่ยนหรือ component mount
const ScriptLoader: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // โหลด script จากไฟล์ main.js
    const loadScript = async () => {
      try {
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
      } catch (error) {
        console.error('Error loading main script:', error);
      }
    };

    loadScript();
    
    // เรียกใช้ฟังก์ชัน global หลังจากโหลด script (หากมีฟังก์ชันที่ประกาศไว้ใน window)
    if (typeof window !== 'undefined' && window.onPageLoad) {
      window.onPageLoad();
    }
  }, [location.pathname]); // Re-run effect เมื่อ path เปลี่ยน

  return null; // Component นี้ไม่มีการ render UI
};

export default ScriptLoader;
