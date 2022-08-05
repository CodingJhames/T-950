
import { IconButton, Typography } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView, NoteView } from '../views'


export const JournalPage = () => {

  return (

      <JournalLayout >

        {/* <Typography  > Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Voluptas dolores molestias asperiores reprehenderit unde illum maxime cumque laboriosam! 
          Nulla repellendus molestiae ut laboriosam corporis accusamus facilis tempore ad quos recusandae. 
        </Typography> */}

        <NothingSelectedView />
        {/* <NoteView /> */}


        <IconButton 
          size='large'
          sx={{
            color:'white',
            backgroundColor: 'error.main', 
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            rigth: 50,
            bottom: 50,
        }}
        >  
        <AddOutlined sx={ { fontSize: 30 }} />

        </IconButton>

      </JournalLayout>
      
      
    
  )
}
