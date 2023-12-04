const YouTubePlayer = () => {
    return (
      <div>
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/b-KIHcpDb5s?autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  
  export default YouTubePlayer;
  