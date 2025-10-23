import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useEffect } from 'react';

export default function News() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);
  const { elementRef: buttonRef, isVisible: buttonVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/in.js';
    script.async = true;
    script.type = 'text/javascript';
    script.innerHTML = 'lang: de_DE'; 
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const newsItems = [
    {
      id: 1,
      isLinkedIn: true,
      linkedInEmbedUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7371113195438047232',
      linkedInPostUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7371113195438047232'
    },
  ];

  return (
    <section id="news" className="pt-24 sm:pt-32 pb-16 sm:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          ref={titleRef}
          className={`text-3xl sm:text-4xl font-black text-gray-900 mb-8 sm:mb-10 transition-all duration-1000 ${
            titleVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Neuigkeiten
        </h2>

        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ${
                cardsVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {item.isLinkedIn && item.linkedInEmbedUrl ? (
                <div className="relative group">
                  <iframe
                    src={item.linkedInEmbedUrl}
                    className="w-full h-[500px] sm:h-[600px] border-0 rounded-lg"
                    allowFullScreen
                    title="LinkedIn Post"
                  />
                  <a
                    href={item.linkedInPostUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-2 right-2 bg-white hover:bg-gray-100 p-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Open in LinkedIn"
                  >
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              ) : item.isLinkedIn && item.linkedInData ? (
                <div className="bg-white rounded-lg border border-gray-300 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-2 sm:p-3 border-b border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                            {item.linkedInData.authorName}
                          </h3>
                          <p className="text-xs text-gray-500">{item.linkedInData.timeAgo}</p>
                        </div>
                      </div>
                      <button className="text-gray-500 hover:bg-gray-100 p-1 rounded">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="px-2 sm:px-3 py-2 sm:py-3">
                    <p className="text-sm text-gray-900 mb-2">
                      {item.linkedInData.postText}
                    </p>
                    <p className="text-xs text-blue-600 mb-3">
                      {item.linkedInData.hashtags}
                    </p>
                    <a
                      href={item.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-500 hover:text-blue-600 hover:underline"
                    >
                      See translation
                    </a>
                  </div>

                  <div
                    className="w-full cursor-pointer"
                    onClick={() => window.open(item.linkedInUrl, '_blank')}
                  >
                    <img
                      src={item.linkedInData.postImage}
                      alt="LinkedIn Post"
                      className="w-full object-cover"
                    />
                  </div>

                  <div className="px-2 sm:px-3 py-2 border-t border-gray-200">
                    <div className="flex items-center gap-1 mb-2">
                      <div className="flex -space-x-1">
                        <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                          <ThumbsUp className="w-2.5 h-2.5 text-white fill-white" />
                        </div>
                        <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                          <span className="text-white text-xs">❤</span>
                        </div>
                        <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center">
                          <span className="text-white text-xs">💡</span>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600 ml-1">{item.linkedInData.reactions}</span>
                    </div>
                  </div>

                  <div className="px-2 sm:px-3 py-2 border-t border-gray-200">
                    <div className="flex items-center justify-between text-gray-600">
                      <button className="flex items-center gap-1 sm:gap-2 hover:bg-gray-100 px-2 sm:px-3 py-2 rounded transition-colors flex-1 justify-center">
                        <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Like</span>
                      </button>
                      <button className="flex items-center gap-1 sm:gap-2 hover:bg-gray-100 px-2 sm:px-3 py-2 rounded transition-colors flex-1 justify-center">
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Comment</span>
                      </button>
                      <button className="flex items-center gap-1 sm:gap-2 hover:bg-gray-100 px-2 sm:px-3 py-2 rounded transition-colors flex-1 justify-center">
                        <Repeat2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Share</span>
                      </button>
                      <button className="flex items-center gap-1 sm:gap-2 hover:bg-gray-100 px-2 sm:px-3 py-2 rounded transition-colors flex-1 justify-center">
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span className="text-xs sm:text-sm font-semibold hidden sm:inline">Send</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="group cursor-pointer">
                  <div className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all hover:shadow-lg hover:scale-105 hover:-translate-y-1">
                    <div className="relative h-36 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-4">
                      <div className="text-gray-400 text-xs mb-2 flex items-center justify-between">
                        <span>{item.date}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">{item.category}</span>
                      </div>

                      <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 text-xs mb-3">
                        {item.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-0.5">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-400 group-hover:text-pink-600 transition-colors">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div
          ref={buttonRef}
          className={`mt-8 text-right transition-all duration-1000 ${
            buttonVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-8'
          }`}
        >
          <a href="/news">
            <button className="text-white px-6 py-2 rounded-full transition-all hover:shadow-lg hover:scale-105 text-sm font-semibold" style={{ backgroundColor: '#B34A22' }}>
              Alle Neuigkeiten
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
