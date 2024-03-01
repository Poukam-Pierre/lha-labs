import { Box, IconButton, ImageListItem, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TitleAndSubtitle from '../../components/layout/TitleAndSubtitle/TitleAndSubtitle';
import React from 'react';
import LorrainPic from '../../assets/LorrainPic.png';
import Image from 'next/image';



export default function OurTeamSection() {
  const socialMediaLinks = [
    { icon: <FacebookIcon />, link: 'lien_facebook' },
    { icon: <TwitterIcon />, link: 'lien_twitter' },
    { icon: <InstagramIcon />, link: 'lien_instagram' },
    { icon: <LinkedInIcon />, link: 'lien_linkedin' },
  ];

   interface MembersInfo {
    name: string;
    role: string;
    description: string;
    linkFacebook:string;
    linkTwitter:string;
    linkInstagram:string;
    linkLinkedin:string;
    srcImg:string;

  }

const items:MembersInfo[]=[
  {
    name:'Lorrain Tchakoumi',
    role:'Chef Equipe Technique',
    description:'At Let’s help Association, our mission is to empower lives through compassionate initiatives. By promoting education and fostering sustainable solutions, we envision a brighter, more.',
    linkFacebook:'lien_facebook',
    linkTwitter:'lien_twitter',
    linkInstagram:'lien_instagram',
    linkLinkedin:'lien_linkedin',
    srcImg:"/",

  }
]

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '35px',
      }}
    >
      <TitleAndSubtitle
        title="Our Team"
        subtitle="United by Purpose, Driven by Passion"
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '50px',
          width: '55%',
        }}
      >
        <ImageListItem sx={{ width: '246px', height: 'auto' }}>
          <Image src={LorrainPic} alt="Picture Lorrain" style={{ minWidth:"100%", minHeight:"100%"}}/>
        </ImageListItem>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '4px',
            }}
          >
            <Typography
              sx={{
                color: 'var(--Primary, #A50000)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '30px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '36px',
                letterSpacing: '-0.6px',
              }}
            >
              Lorrain Tchakoumi
            </Typography>
            <Typography
              sx={{
                color: 'var(--title-active, var(--Titre-active, #333))',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '32px',
              }}
            >
              Chef Equipe Technique
            </Typography>
          </Box>
          <Typography
            sx={{
              color: 'var(--body, #666)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '16px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '28px',
            }}
          >
            At Let’s help Association, our mission is to empower lives through
            compassionate initiatives. By promoting education and fostering
            sustainable solutions, we envision a brighter, more.
          </Typography>
          <Box sx={{ display: 'flex' }}>
            {socialMediaLinks.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '18px',
                  }}
                >
                  <IconButton style={{ color: '#A50000' }}>
                    {item.icon}
                  </IconButton>
                </Box>
              </a>
            ))}
          </Box>
        </Box>
      </Box>
      <Box>les images</Box>
    </Box>
  );
}
