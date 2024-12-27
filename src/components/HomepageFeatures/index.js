import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { func } from 'joi';
import Layout from "@theme/Layout";
import BlogPostItem from "@theme/BlogPostItem";
import { Content } from "@theme/BlogPostPage";

export default function HomepageFeatures() {
  //alert("Hello, I am currently improving performance, images are not present, except in the printable section of the chassis")
  return (
    <div>
      <div className="container margin-vert--xs" style={{ margin: '0px 2.5%', maxWidth: '95%' }}>
        <div className="row">
          <Tester />
          <div className="col col--8" >
            <div className="text--center">
              <div style={{ textAlign: 'center' }}><img src={require("/static/media/Logos/Everybot118.webp").default}></img></div>
              <br></br>
              <h1>Welcome to the Everybot Documentation Site</h1>
              <br>
              </br>
              <h3>Google Doc for translated <a href='https://docs.google.com/document/d/1lBv1Fh4_S4MBdBZgeo5OS2aI-miKmlPI-0C_GDHbHdI/edit?usp=sharing' target='_blank'>Everybot</a> manual and <a href='https://docs.google.com/document/d/1Eb5SdHCCC-5kwIwPgk8-dheHW8TVtwfSRiBPiTpqHRk/edit?usp=sharing' target='_blank'>KitBot</a> resources</h3>
              <br></br><br></br><br></br>
              <h2>At the top you will find:  </h2>
              <div>
                <ul style={{ textAlign: 'center', listStylePosition: 'inside', marginBottom: '5px', fontSize: '20px' }}>
                  <li>
                    Step-by-step instructions to build the Everybot which will be gradually released in the first weeks of the season
                  </li>
                  <li>
                    Resources for the Everybot, such as the Everybot Discord, Bill of Materials, CAD and Code
                  </li>
                  <li>
                    Everybot Evergreens, a collection of exercises and technical resources
                  </li>
                  <li>
                    Posts that document major updates for those building the Everybot as well as updates or large changes in the manual
                  </li>
                  <li>
                    Resources to support the base KitBot configuration
                  </li>
                </ul>
              </div>
              <br></br><br></br><br></br><br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Tester() {
  const [test, setText] = useState("Error");

  useEffect(() => {
    blogs();
  }, [])

  const blogs = async () => {
    const response = await fetch('https://robonauts-everybot.github.io/Everybot-Docs/blog/feed.json');
    let text = await response.json();
    setText(text.items);
  }

  //getText();

  if (test == "Error") {
    return <aside className="col col--2"></aside>
  }

  let firstBlog = "/Everybot-Docs" + test[0].id.match(/\/blog\/.*/);
  let secondBlog = "/Everybot-Docs" + test[1].id.match(/\/blog\/.*/);
  let thirdBlog = "/Everybot-Docs" + test[2].id.match(/\/blog\/.*/);

  return (
    <aside className="col col--2"><nav className="sidebar_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module thin-scrollbar" aria-label="Blog recent posts navigation" style={{
      top: "calc(var(--ifm-navbar-height) + 2rem)", position: "sticky", maxHeight: "calc(100vh - (var(--ifm-navbar-height) + 2rem))", overflowY: "auto"
    }}><h3 className={styles.updates}>Recent Updates</h3><ul className="sidebarItemList_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module clean-list"><li className="sidebarItem_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module" style={{ margin: "0px 0" }}><a className={styles.details} href={firstBlog}>{test[0].title}</a></li><br /><li className="sidebarItem_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module" style={{ margin: "0px 0" }}><a className={styles.details} href={secondBlog}>{test[1].title}</a></li><br /><li className="sidebarItem_node_modules-@docusaurus-theme-classic-lib-theme-BlogSidebar-Desktop-styles-module" style={{ margin: "0px 0" }}><a className={styles.details} href={thirdBlog}>{test[2].title}</a></li></ul></nav></aside >
  );
}

//let test;