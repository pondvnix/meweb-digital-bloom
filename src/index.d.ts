
// Global type definitions

interface Window {
  onPageLoad?: () => void;
  // เพิ่ม global functions อื่นๆ ที่ประกาศใน main.js ตามต้องการ
}

// Define module for the browser stub
declare module './browser-2pn7w1Ad.js' {
  export const b: {
    default: () => any;
  };
}
