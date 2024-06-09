import { Box, Link,  Select,  Show } from '@chakra-ui/react'
import {ArrowLeftIcon, EmailIcon,  InfoIcon,  SunIcon, HamburgerIcon} from '@chakra-ui/icons'

const Navbar = () => {


  return (<>
   <Show above='sm'>
    <Box bg='pink'  display='flex' gap='10' fontSize={25}  w='100%' p='7'>
     <Box><SunIcon/><Link>Home</Link></Box> 
     <Box><ArrowLeftIcon/><Link>Gallery</Link></Box>
     <Box> <EmailIcon/><Link>Contact</Link></Box>
     <Box><InfoIcon/><Link>About</Link></Box> 
   </Box>
   </Show>
    <Show below ='sm'>
    <Box bg='pink'h='16' display='flex' justifyContent='space-between' fontSize={25}  w='100%' p='7'>
        <Box><SunIcon/> <Link>Home</Link></Box> 
        <Box><button><HamburgerIcon/></button></Box>
 

    </Box>
    </Show>
    </>
  )
}

export default Navbar
