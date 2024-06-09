import { Box, Card, CardBody, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'


const Gallery = () => {

const ImageArr =[{
    src:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    heading:'Living room Sofa',
    price:'$450'
},
{
    src:'data:image/jpeg;base64,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',
    heading:'DSLR Camera',
    price:'$300'
},
{
    src:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTsJei8lQO2YOQfMQgdb1np6yVeZZSt456X79q47y4l2eZLM8nu3fLDyXSo2if7IH6SNo9v3RoNHDHELWpiXSNtvXPEcThIPg9bMJy1YubbFt9Rml2YDH7Yow&usqp=CAE',
    heading:'Apple Iphone',
    price:'$2599'
},
{
    src:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR3LWg2hRcIfonaPNYSbwrs536sWwZWToScNKFlW8DH-vfp-irBpIsEgnyS1s3KNUi2FHAgiQqKU4Evm_bdPz1ZxVqtkogPt88LQDyS4nTHe56EBzHB9-bp&usqp=CAE',
    heading:'Exotic color Block sling bag',
    price:'$599'
},{
    src:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQek9grTjIaQF3TosKNNTwmX2j1wwJGCZA3ztjp9lmZBdJLVfZP0fowtuLaMRKPVbgPqDvum_TMhpV4jMYLfEsKCC1cxqwP8xNk9k53wbC7waE2QsZDrBS0&usqp=CAE',
    heading:'Apple 13 MacBook',
    price:'$7548'
},
{
    src:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRTpkDAyHlIpgMGv3XEMa6l2rgXsfpHywMOkww81u-DhG9jdsm9ShqwjONP5mMw4G2KTnXceCfq0pPyIuh_TiTuFDmYdbntJaInhKkiRNI&usqp=CAE',
    heading:'RT 7 TABLET',
    price:'$1200'
},
{
    src:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZ_4R7dVCgaHVV4jbF8HpRsbpVWnbBCNdwh5cAPEh2ibPb7ac2n1sfIR6N1HaiU5RJwND8VYmc_bUJ2tR2SNCXXYTYrIkyzEpYJWcneZPa7cJCnSyznDm3QQM&usqp=CAE',
    heading:'Fogg Scent Perfume',
    price:'$59'
},
{
    src:'https://muzambi.com/cdn/shop/files/Untitleddesign_93.jpg?v=1716206779',
    heading:'OPPO A1 18',
    price:'$3999'
}]

  return (
     <>
    <Box display='grid' gridTemplateColumns={{base:'repeat(2,1fr)' ,sm:'repeat(2,1fr)' ,md:'repeat(3,1fr)', lg:'repeat(6,1fr)' }}  gap='8' p='10'>
     {ImageArr.map((img,ind)=>{
        return ( 
       <GridItem  key={ind}>
         <Card h='100%'>
         <CardBody>
           <Image
             w='100%'
             h='auto'
             src= {img.src}
             alt={img.heading}
             borderRadius='lg'
           />
           <Stack mt='6'>
             <Heading size='md'>{img.heading}</Heading>
             <Text> {img.price}</Text>
           </Stack>
         </CardBody>
       </Card>
       </GridItem>
     
        )
        })}
      </Box>

      </> 
    )

     }
     
   
   

export default Gallery