const YouTubePlayer = () => {
    return (
      <div>
        <iframe
          width="100%"
          height="275"
          src="https://www.youtube.com/embed/b-KIHcpDb5s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-xl"
        ></iframe>
      </div>
    );
  };
  
  export default YouTubePlayer;
  