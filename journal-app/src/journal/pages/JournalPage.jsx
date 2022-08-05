


import { Typography } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView } from '../views/NothingSelectedView'

export const JournalPage = () => {
  return (

    <>
      <JournalLayout >

        {/* <Typography  > Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Voluptas dolores molestias asperiores reprehenderit unde illum maxime cumque laboriosam! 
          Nulla repellendus molestiae ut laboriosam corporis accusamus facilis tempore ad quos recusandae. 
        </Typography> */}

        <NothingSelectedView />
      

      </JournalLayout>
      
    </>

    
  )
}
