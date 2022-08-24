import {  TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid,List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem";




export const Sidebar = ( { drawerWidth = 240 } ) => {

  const { displayName } = useSelector( state => state.auth  );
  const { notes } = useSelector( state => state.journal  );

  return (
    
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm:0 } }}
    >
        <Drawer
            variant='permanent'
            open
            sx={{  
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}

        >

          <Toolbar >

            <Typography variant='h6' noWrap component='div'>
              { displayName }
            </Typography>
          </Toolbar>
          <Divider/>

          <List>
                {
                  notes.map(  note => (
                    // <ListItem key={ note.id } disablePadding >
                    //   <ListItemButton>
                    //     <ListItemIcon>
                    //       <TurnedInNot />
                    //     </ListItemIcon>

                    //     <Grid container >
                    //       <ListItemText primary={ note.title } />
                    //       <ListItemText secondary={ 'Elit non fugiat eiusmod exercitation elit ut irure id qui magna est sunt tempor.' } />
                    //     </Grid>

                    //   </ListItemButton>
                    // </ListItem>

                    <SideBarItem key={ note.id } { ...note } />
                  ) )
                }
            </List>


        </Drawer>


    </Box>




  )
}
