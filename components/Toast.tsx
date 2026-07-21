'use client';

import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast show">
      <CheckCircle style={{ color: 'var(--color-cyan-sky)', width: 22, height: 22 }} />
      <span className="toast-msg">{message}</span>
    </div>
  );
};
