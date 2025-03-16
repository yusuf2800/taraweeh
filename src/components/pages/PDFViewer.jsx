import { useEffect, useState, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry"; // Required for worker support

const pdfUrl = "/quran pdfs/juz1/1.1.pdf"; // Your PDF URL

const PDFViewer = () => {
  const [pdf, setPdf] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = pdfjsLib.getDocument(pdfUrl);
      const loadedPdf = await loadingTask.promise;
      setPdf(loadedPdf);
      setNumPages(loadedPdf.numPages);
      renderPage(1, loadedPdf); // Start with the first page
    };

    loadPdf();
  }, [pdfUrl]);

  const renderPage = async (pageNum, loadedPdf) => {
    const page = await loadedPdf.getPage(pageNum);

    // Get the page's rotation property

    // Define the viewport with correct scale and rotation
    const scale = 0.8; // Adjust this scale as needed
    const viewport = page.getViewport({ scale, rotation: 180 });

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    // Render the page on the canvas
    page.render({ canvasContext: context, viewport });
  };

  const handleNext = () => {
    if (pdf && currentPage < numPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      renderPage(newPage, pdf);
    }
  };

  const handlePrev = () => {
    if (pdf && currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      renderPage(newPage, pdf);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <canvas
        ref={canvasRef}
        className="h-auto max-w-full rotate-180 rounded-sm border shadow-lg"
      />

      <footer className="w-full flex justify-center">
        <button
          onClick={handlePrev}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400"
          disabled={currentPage === numPages}
        >
          Next
        </button>
        <p className="text-lg font-semibold">
          Page {currentPage} of {numPages}
        </p>
      </footer>
    </div>
  );
};

export default PDFViewer;
