import React from 'react';
import { SiHashnode } from '../../../node_modules/react-icons/si';
import { FaTwitter, FaLinkedinIn, FaGithub } from "../../../node_modules/react-icons/fa";
import { Box, Link } from '@mui/material';

function SocialIcon() {
    return (
        <Box display={'flex'} gap={'1.5rem'} >
            <Link target='_blank' href='https://twitter.com/blockenddev' color={'#000'}>
                <FaTwitter />
            </Link>
            <Link target='_blank' href='https://github.com/emreaslan7' color={'#000'}>
                <FaGithub />
            </Link>    
            <Link target='_blank' href='https://emreaslan.hashnode.dev/' color={'#000'} >
                <SiHashnode />
            </Link>
            <Link target='_blank' href='https://www.linkedin.com/in/emreaslan7/' color={'#000'}>
                <FaLinkedinIn />
            </Link>

        </Box> 
    );
}

export default SocialIcon;