import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImage from '@/assets/TheDragonNews.png'
import moment from "moment";

const Header = () => {
    const currentDate = moment().format('dddd, MMMM Do, YYYY')
    return (
        <Box className="w-full my-5">
            <Container>
                <Image src={headingImage} alt="heading Image" height={300} width={500} className="mx-auto"/ >
                <Typography variant="body2" color="gray" textAlign="center" className="my-2">Journalism Without Fear or Favour</Typography>
                <Typography className="text-xl font-medium text-center">{currentDate}</Typography>
            </Container>
        </Box>
    );
};

export default Header;