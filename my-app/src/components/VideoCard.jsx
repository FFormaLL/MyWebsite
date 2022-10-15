import './VideoCard.css';

export default function VideoCard(props) {
  return (
    <div class="gpuRTX">
    <h2>{props.name}</h2>
    <p>{props.desc}</p>
    <iframe 
        src={`https://www.youtube.com/embed/${props.id}`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
    >
    </iframe>

    </div>
  );
}