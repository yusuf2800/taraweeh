import { useEffect, useState, useRef } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.entry"; // Required for worker support

const pdfUrl = "/quran pdfs/juz1/1.1.pdf";

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
    const scale = 0.9; // Adjust this scale as needed
    const viewport = page.getViewport({ scale, rotation: 180 });

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = viewport.width;
    canvas.height = viewport.height;

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
    <div className="flex flex-col items-center">
      <canvas
        ref={canvasRef}
        className="h-[91.5vh] max-w-full rotate-180 rounded-sm border shadow-lg"
      />

      <footer className="fixed bottom-0 flex h-[50px] w-full justify-center border-t-2 bg-(--bg-color) border-(--color)">
        <button
          onClick={handleNext}
          className="mx-[10px] my-[2px] w-[90px] rounded-lg border-2 font-[600] text-(--color)"
          disabled={currentPage === numPages}
        >
          Next
        </button>
        <button
          onClick={handlePrev}
          className="mx-[5px]  my-[2px] w-[90px] rounded-lg border-2 font-[600] text-(--color)"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <p className="text-lg font-semibold my-auto text-(--color) ml-[5px]">
          Page {currentPage} of {numPages}
        </p>
      </footer>
    </div>
  );
};

export default PDFViewer;
