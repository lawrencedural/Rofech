const LoadingScreen = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-rofech-limewash">
      <div className="text-center">
        <svg width="56" height="56" viewBox="0 0 56 56" className="mx-auto mb-5" fill="none">
          <rect
            x="4" y="4" width="48" height="48"
            stroke="#FFED00"
            strokeWidth="1.5"
            strokeDasharray="180"
            strokeDashoffset="180"
            className="animate-draw"
          />
        </svg>
        <p className="font-mono text-xs uppercase tracking-widest2 text-rofech-concrete">Loading</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
