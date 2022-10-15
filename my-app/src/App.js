import VideoCard from './components/VideoCard.jsx';
import Header from './components/HeaderIntro.jsx';

export function Welcome() {
return <Header />
}

export default function HomePage() {
  const videos = [
    {
      name:`My first youtube video`,
      desc: `Double boom! Rocket league classic`,
      id:`LaUQTVwXOnU`
    },
    {
      name:`Currently trying to learn this skill!`,
      desc: `Learn how to flip reset musty flick!`,
      id:`wfRd18xWiz4`
    }
  ]
  return videos.map(video =>{
      return (
        <VideoCard 
          name={video.name}  
          desc={video.desc}  
          id={video.id}  
        />
        
      )
    }
  )
}

