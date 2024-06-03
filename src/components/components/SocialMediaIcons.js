// src/components/components/SocialMediaIcons.js
import React from 'react';

const SocialMediaIcons = ({ profiles }) => {
  const defaultProfiles = [
    { href: 'https://facebook.com', icon: '🌐' },
    { href: 'https://twitter.com', icon: '🐦' },
    { href: 'https://instagram.com', icon: '📸' },
  ];

  return (
    <div className="component social-media-icons">
      {(profiles || defaultProfiles).map((profile, index) => (
        <a key={index} href={profile.href} target="_blank" rel="noopener noreferrer">
          {profile.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
