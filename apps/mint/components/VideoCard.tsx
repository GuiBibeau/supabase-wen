import React from "react";

const videos = [
  "https://yigspqwthvcyzbzacayf.supabase.co/storage/v1/object/public/w3fs/MemberCard_Render_blue_v1.mp4",
  "https://yigspqwthvcyzbzacayf.supabase.co/storage/v1/object/public/w3fs/MemberCard_Render_green_v1.mp4",
  "https://yigspqwthvcyzbzacayf.supabase.co/storage/v1/object/public/w3fs/MemberCard_Render_pink_v1.mp4",
  "https://yigspqwthvcyzbzacayf.supabase.co/storage/v1/object/public/w3fs/MemberCard_Render_red_v1.mp4",
  "https://yigspqwthvcyzbzacayf.supabase.co/storage/v1/object/public/w3fs/MemberCard_Render_v1.mp4",
];

type Props = {
  className?: string;
};

export const VideoCard: React.VFC<Props> = ({ ...rest }) => {
  return (
    <video {...rest} autoPlay>
      <source
        src="https://yigspqwthvcyzbzacayf.supabase.co/storage/v1/object/public/w3fs/MemberCard_Render_v1.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
};
