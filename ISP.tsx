import * as React from 'react';

type Video = {
  title: string;
  duration: number;
  coverUrl: string;
};
type VideoListProps = {
  items: Array<Video>;
};
type LiveStream = {
  name: string;
  previewUrl: string;
};

export const VideoList = ({ items }: VideoListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <div>
          <div>{item.title}</div>
          <Thumbnail video={item} />
        </div>
      ))}
    </ul>
  );
};

type ThumbnailProps = {
  video: Video;
};
const Thumbnail = ({ video }: ThumbnailProps) => {
  return <div> {video.coverUrl} </div>;
};

export const VideoListComponent = () => {
  const videoItems: Video[] = [
    { title: 'Video1', coverUrl: '/link', duration: 10 },
    { title: 'Video2', coverUrl: '/link2', duration: 10 },
    { title: 'Video3', coverUrl: '/link3', duration: 10 },
  ];
  return <VideoList items={videoItems} />;
};
