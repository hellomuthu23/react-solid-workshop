import * as React from 'react';

type ThumbnailProps = {
  coverUrl: string;
};

const Thumbnail = ({ coverUrl }: ThumbnailProps) => {
  return <div>{coverUrl}</div>;
};

type Video = {
  title: string;
  duration: number;
  coverUrl: string;
};

type LiveStream = {
  name: string;
  previewUrl: string;
};

type Props = {
  items: Array<Video | LiveStream>;
};
const VideoList = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => {
        if ('coverUrl' in item) {
          // it's a video
          return <Thumbnail coverUrl={item.coverUrl} />;
        } else {
          // it's a live stream
          return <Thumbnail coverUrl={item.previewUrl} />;
        }
      })}
    </ul>
  );
};

export const VideoListComponent = () => {
  const videoItems: Video[] = [
    { title: 'Video1', coverUrl: '/link', duration: 10 },
    { title: 'Video2', coverUrl: '/link2', duration: 10 },
    { title: 'Video3', coverUrl: '/link3', duration: 10 },
  ];
  return <VideoList items={videoItems} />;
};

export const LiveStreamListComponent = () => {
  const videoItems: LiveStream[] = [
    { name: 'Video1', previewUrl: '/link' },
    { name: 'Video2', previewUrl: '/link2' },
  ];
  return <VideoList items={videoItems} />;
};
