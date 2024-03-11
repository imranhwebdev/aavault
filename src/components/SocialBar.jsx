import React from 'react'
import twitter from '../assets/img/twitter.svg'
import tlegram from '../assets/img/tlegram.svg'
import discord from '../assets/img/discord.svg'
export default function SocialBar() {
    const socialItems = [
        {
            socialIcon: twitter,
            socialLink: "https://google.com",
        },
        {
            socialIcon: tlegram,
            socialLink: "https://google.com",
        },
        {
            socialIcon: discord,
            socialLink: "https://google.com",
        },
    ];
  return (
    <ul className="social-links">
        {socialItems.map((socialItem, index) => (
            <li key={index}><a href={socialItem.socialLink}><img src={socialItem.socialIcon} alt="" /></a></li>
        ))}
    </ul>
  )
}
