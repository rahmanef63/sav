'use client';

import { motion } from 'framer-motion';

interface ColorPaletteProps {
  colors: readonly string[];
}

export function ColorPalette({ colors }: ColorPaletteProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
      <div className="flex gap-4">
        {colors.map((color, index) => (
          <motion.div
            key={color}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <div
              className="w-16 h-16 rounded-full shadow-lg cursor-pointer"
              style={{ backgroundColor: color }}
            />
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-sm bg-background px-2 py-1 rounded shadow">
                {color}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}