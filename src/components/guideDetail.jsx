import React from 'react';
import { useParams, Link } from 'react-router-dom';
import guideContent from './guideContent';
import ReactMarkdown from 'react-markdown';
import { useEffect } from 'react';


function GuideDetail() {
    useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);
  
  const { guideId } = useParams();
  const guide = guideContent[guideId];

  if (!guide) {
    return (
      <div className="text-center text-red-600 mt-10 text-xl">
        Guide not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/guides" className="text-green-700 underline mb-4 block">
        ← Back to Guides
      </Link>

      <h1 className="text-4xl font-bold text-green-900 mb-6">
        {guide.title}
      </h1>

      <img
        src={guide.image}
        alt={guide.title}
        className="w-[30em] mx-auto h-auto object-cover rounded-lg mb-8"
      />

      <div className="prose prose-lg prose-green max-w-none text-green-950">
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <p className="mb-10 leading-relaxed text-xl" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="text-2xl font-semibold mt-6 mb-8 underline underline-offset-2 text-green-800" {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul className="list-disc pl-6 mb-4" {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="mb-2 text-xl" {...props} />
            ),
          }}
        >
          {guide.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default GuideDetail;
