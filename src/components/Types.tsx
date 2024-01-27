
export type ReduxProps = {
  videos : {
    videoList : VideoProps[];
  } 
};

export type VideoProps = {
  id: number;
  youtubeUrl: string;
  title: string;
  videoUrl: string;
  description: string;
  thumbnail: string;
  views: number;
  likes: number;
  comments: number;
  subscriberCount: number;
  estimatedEarning: number;
  updatedOn: string;
};