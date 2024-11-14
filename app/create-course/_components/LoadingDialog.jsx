import React, { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { Loader2 } from "lucide-react";

const LoadingDialog = ({ loading }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing AI...");

  const loadingPhrases = [
    "Gathering course materials...",
    "Structuring content...",
    "Optimizing learning path...",
    "Adding interactive elements...",
    "Finalizing your course...",
  ];

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : prev));
      }, 50);

      const textInterval = setInterval(() => {
        const phraseIndex = Math.floor(
          (progress / 100) * loadingPhrases.length
        );
        setLoadingText(
          loadingPhrases[phraseIndex] ||
            loadingPhrases[loadingPhrases.length - 1]
        );
      }, 2000);

      return () => {
        clearInterval(interval);
        clearInterval(textInterval);
      };
    }
  }, [loading, progress]);

  return (
    <AlertDialog open={loading}>
      <AlertDialogContent className="bg-white text-white">
        <AlertDialogHeader>
          <AlertDialogDescription>
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-40 h-40 flex items-center justify-center relative overflow-hidden">
                  {/* Spinning Border */}
                  <Loader2 className="w-24 h-24 text-primary animate-spin absolute" />

                  {/* Rocket GIF with Animation */}
                  <div className="w-10 h-10 animate-bounce absolute z-10">
                    <Image
                      src="/launch.gif"
                      width={64}
                      height={64}
                      className="object-contain"
                      alt="Loading Rocket"
                    />
                  </div>
                </div>
              </div>

              {/* Progress Text */}
              <div className="text-center space-y-2">
                <h2 className="text-xl font-semibold text-primary">
                  {loadingText}
                </h2>
                <div className="w-64 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-secondary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-black">{progress}% Complete</p>
              </div>

              {/* Animated Dots */}
              <div className="flex space-x-2 mt-3">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LoadingDialog;