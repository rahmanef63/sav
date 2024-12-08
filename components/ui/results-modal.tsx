'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { StyleResult } from '@/types';
import Image from 'next/image';
import { X, RefreshCw, Download, Printer } from 'lucide-react';
import { useState } from 'react';

interface ResultsModalProps {
  results: StyleResult[];
  isOpen: boolean;
  onClose: () => void;
  onTryAgain: () => void;
  onSave: () => void;
}

export function ResultsModal({ results, isOpen, onClose, onTryAgain, onSave }: ResultsModalProps) {
  const [isPrinting, setIsPrinting] = useState(false);

  const handlePrint = () => {
    setIsPrinting(true);
    window.print();
    setTimeout(() => setIsPrinting(false), 1000);
  };

  const handleDownloadPDF = async () => {
    // Implementation for PDF download would go here
    console.log('Downloading PDF...');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b flex justify-between items-center">
              <h2 className="text-2xl font-bold">Your Interior Design Style</h2>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                  disabled={isPrinting}
                >
                  <Printer className="w-5 h-5" />
                </button>
                <button
                  onClick={handleDownloadPDF}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <Download className="w-5 h-5" />
                </button>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {results.map((result, index) => (
                <motion.div
                  key={result.style}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`mb-8 ${index === 0 ? 'border-2 border-primary p-4 rounded-xl' : ''}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{result.style}</h3>
                    <span className="text-lg font-medium">{result.probability}% Match</span>
                  </div>

                  <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={result.imageUrl}
                      alt={result.style}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-gray-600 dark:text-gray-300">{result.description}</p>

                  {index === 0 && (
                    <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                      <p className="font-medium">
                        This style matches your preferences the most! Would you like to schedule a consultation?
                      </p>
                      <div className="mt-4 flex flex-wrap gap-3">
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
                          Schedule Consultation
                        </button>
                        <button
                          onClick={onSave}
                          className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90"
                        >
                          Save Results
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}

              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={onTryAgain}
                  className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/90 transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                  Try Again
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}