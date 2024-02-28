import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import sideTop from "@/assets/side-top-news.png";

const SideNav = () => {
    return (
        <Box>
            <Card>
            <CardMedia>
              <Image src={sideTop} width={800} alt="top news" />
            </CardMedia>
            <CardContent>
              <div className="my-5">
                <span className="px-4 py-2 bg-red-500 rounded-lg text-white">
                  Technology
                </span>
              </div>
              <Typography gutterBottom variant="h5" component="div">
                Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S.
                Military Aid Package Yet
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Europe, Joe Biden, Military, News, Russia, Security, UK,
                Ukraine, United States, Worthy News (Worthy News) – U.S.
                President Joe Biden has announced nearly $3 billion in new U.S.
                military a...
              </Typography>
            </CardContent>
          </Card>
        </Box>
    );
};

export default SideNav;