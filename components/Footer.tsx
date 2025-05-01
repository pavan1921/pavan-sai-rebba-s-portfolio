import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
    </footer>
  );
}
