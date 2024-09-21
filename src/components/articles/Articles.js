import React from 'react';
import {Box, Grid, Link} from "@mui/material";
import {info} from "../../info/Info";
import Article from './Article';


function Articles() {
  return (
    <Box marginTop={{ xs: 10, md: 20 }}>
    <Grid container display={'flex'} justifyContent={'center'}  gap={16}>
        {info.articles.map((article, index) => (
           <Grid item xs={10} md={10} lg={8} key={index}>
            <Link href={article.link} target='_blank' underline='none' color={'inherit'} sx={{ '&:hover': { color: 'inherit' } }}>
                <Article 
                    image={article.image} 
                    link={article.link}
                    title={article.title}
                    description={article.description}
                    readTime={article.readTime}
                />
              </Link>  
           </Grid>
        ))}
    </Grid>
</Box>
  )
}

export default Articles