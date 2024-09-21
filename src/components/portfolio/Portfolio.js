import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info";




export default function Portfolio() {
    return (
      <Box marginTop={20}>
          <Grid container display={'flex'} justifyContent={'center'}  gap={16}>
              {info.portfolio.map((project, index) => (
                 <Grid item xs={12} md={6} key={index}>
                     <PortfolioBlock 
                        image={project.image} 
                        live={project.live} 
                        source={project.source} 
                        title={project.title}
                        descriptionProject={project.descriptionProject}
                        descriptionYou= {project.descriptionYou}
                     />
                 </Grid>
              ))}
          </Grid>
      </Box>
      

    );
};