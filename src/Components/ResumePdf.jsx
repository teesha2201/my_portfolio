
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set workerSrc to load the PDF.js worker from an external CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumePdf = ({ file }) => {
  return (
    <div>
      <Document
        file={file}
        onLoadSuccess={({ numPages }) => console.log(`Loaded a file with ${numPages} pages.`)}
        onLoadError={console.error}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default ResumePdf;

