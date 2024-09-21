import React from 'react'
import Style from "../../App.module.scss";
import {Box} from "@mui/material";
import {HiOutlineBookOpen} from "../../../node_modules/react-icons/hi"
import { info } from '../../info/Info';
import classNames from 'classnames';

export default function Article(props) {

   const {avatarImage} = info;
   const {image, readTime, title,description} = props;

    return (
       <Box  display={'flex'} borderRadius={'0.5rem'} flexDirection={{ xs: "column", md: "row" }} className={classNames(Style.shadowed)} alignItems={'center'} width={'100%'}>
         
          <Box  component={'img'} src={image} alt={'mockup'} maxWidth={{base:'none', md:'70%'}} 
          borderRadius={{xs:'0.5rem 0.5rem 0 0', md:'0.5rem 0 0 0.5rem'}} loading={'lazy'}
           zIndex={2}/>
          
          <Box className={'portfolio'} justifyContent={'space-around'} 
               border={'3px solid'}  ml={{md:-1}} mt={{xs:-1, md:0}} zIndex={1} borderRadius={'0.5rem'}
               display={'flex'} flexDirection={'column'} gap={'0.5rem'} 
               alignItems={'center'} fontSize={'1rem'} alignSelf={'stretch'} >
               
               <Box component={'h1'} fontSize={{xs:'1.25rem', md:'1.4rem'}} style={{textAlign:'center'}} mx={{xs:0, md:1}} mt={{xs:2, md:0}}>{title}</Box>
  
                <Box component={'text'} mx={3} textAlign={{xs:'center', md:'left'}} fontSize={{xs:'0.8rem', md:'0.9rem'}} >{description}</Box>

                <Box display={'flex'} width={'100%'} justifyContent={'space-around'} mb={{xs:2, md:0}}>
                   
                  <Box display={'flex'} alignItems={'center'}>
                     <Box component={'img'} src={avatarImage} borderRadius={'100%'} width={'1.5rem'}/>
                     <Box component={'text'} fontSize={"0.8rem"} fontWeight={'bold'}>emreaslan</Box>
                  </Box>
                   
                  <Box component={'text'} fontSize={'0.8rem'} fontWeight={'extrabold'} display={'flex'} alignItems={'center'}>
                     <HiOutlineBookOpen/>{readTime}
                  </Box>
                </Box>

          </Box>
       </Box>
    );
}
