import React from "react";
import { Grid } from "./style";


import MenuVertical from "../MenuVertical";
import MenuHorizontal from "../MenuHorizontal";
import TiposVideos from "../TiposVideos";
import ParteVideos from "../ParteVideos";
import Sidebar from "../Sidebar";


const Layout: React.FC = () => {


    return(
        <>
       
        <Grid>
      
        <MenuVertical/>
            <MenuHorizontal/>
            <TiposVideos/>
             <ParteVideos/>
        </Grid>

        

       
           
        </>

    );
}

export default Layout;
