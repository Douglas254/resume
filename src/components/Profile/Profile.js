import React from "react";
import { Typography } from "@material-ui/core";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import PersonOutlineOutlined from "@material-ui/icons/PersonOutlineOutlined";

import resumeData from "../../utils/resumeData";

import "./Profile.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";

// function to dislay the timeline items on the profile section
const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          <a href={link} target="_blank" rel="noreferrer">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>

      <figure className="profile_image">
        <img
          src={`${process.env.PUBLIC_URL}/douglasProfile.jpg`}
          alt="douglas profile pic"
        />
      </figure>

      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlined />}>
          {/* calling CustomTimelineItem function */}
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Birthday" text={resumeData.birthday} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {/* { mapping through socials object} */}
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <br />
        <button>My Button here</button>
      </div>
    </div>
  );
};

export default Profile;
