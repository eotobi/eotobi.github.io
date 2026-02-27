import React from "react";
import Header from "../../components/header/Header.js";
import Footer from "../../components/footer/Footer.js";
import SocialMedia from "../../components/socialMedia/SocialMedia.js";
import BlogsImg from "./BlogsImg.js";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import styled from "styled-components";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

const StyledBtn = styled.a`
  background-color: ${(props) => props.theme.accentBright};
  &:hover {
    box-shadow: 0 5px 15px ${(props) => props.theme.accentBright};
  }
`;

function Contact(props) {
  const theme = props.theme;

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <div className="contact-heading-div">
          <div className="contact-heading-img-div">
            <img
              className="profile-pic"
              src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
              alt=""
            />
          </div>
          <div className="contact-heading-text-div">
            <h1
              className="contact-heading-text"
              style={{ color: theme.text }}
            >
              {ContactData["title"]}
            </h1>
            <p
              className="contact-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {ContactData["description"]}
            </p>
            <SocialMedia />
            <br />
            <br />
            <StyledBtn className="general-btn" href={greeting.resumeLink}>
              See my Resume
            </StyledBtn>
          </div>
        </div>
        <div className="blog-heading-div">
          <div className="blog-heading-text-div">
            <h1 className="blog-heading-text" style={{ color: theme.text }}>
              {blogSection["title"]}
            </h1>
            <p
              className="blog-header-detail-text subTitle"
              style={{ color: theme.secondaryText }}
            >
              {blogSection["subtitle"]}
            </p>
            <div className="blogsite-btn-div">
              <StyledBtn className="general-btn" href={blogSection.link}>
                My Twitter Profile
              </StyledBtn>
            </div>
          </div>
          <div className="blog-heading-img-div">
            <BlogsImg theme={theme} />
          </div>
        </div>
      </div>
      <Footer theme={props.theme} />
    </div>
  );
}

export default Contact;
